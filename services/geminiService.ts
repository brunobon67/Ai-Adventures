
import { GoogleGenAI, Type, Chat } from '@google/genai';
import { Itinerary, ItineraryRequest } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const itinerarySchema = {
  type: Type.OBJECT,
  properties: {
    city: { type: Type.STRING, description: "The city for the itinerary." },
    country: { type: Type.STRING, description: "The country where the city is located." },
    dailyPlans: {
      type: Type.ARRAY,
      description: "An array of daily plans for the trip.",
      items: {
        type: Type.OBJECT,
        properties: {
          day: { type: Type.INTEGER, description: "The day number of the trip (e.g., 1, 2, 3)." },
          theme: { type: Type.STRING, description: "A creative theme for the day's activities (e.g., 'Historical Heartbeat')." },
          activities: {
            type: Type.ARRAY,
            description: "A list of activities for the day.",
            items: {
              type: Type.OBJECT,
              properties: {
                time: { type: Type.STRING, description: "Suggested time for the activity (e.g., '9:00 AM - 11:00 AM')." },
                description: { type: Type.STRING, description: "A detailed description of the activity." },
                location: { type: Type.STRING, description: "The name and full address of the location." },
                transit: { type: Type.STRING, description: "A detailed hint about how to get there (e.g., '5-min walk from last activity', 'Metro Line 1, 2 stops')." },
                type: { type: Type.STRING, description: "A category for the activity (e.g., 'Food & Culinary', 'Museum', 'Outdoor')." }
              },
              required: ["time", "description", "location", "transit", "type"]
            }
          },
          alternatives: {
            type: Type.ARRAY,
            description: "A few alternative suggestions if the user wants to swap an activity.",
            items: { type: Type.STRING }
          }
        },
        required: ["day", "theme", "activities", "alternatives"]
      }
    }
  },
  required: ["city", "country", "dailyPlans"]
};

const parseItineraryResponse = (responseText: string): Itinerary => {
  try {
    const jsonText = responseText.trim();
    const itineraryData: Itinerary = JSON.parse(jsonText);
    
    // Simple validation
    if (!itineraryData.city || !itineraryData.dailyPlans || itineraryData.dailyPlans.length === 0) {
      throw new Error("Generated itinerary is missing required fields.");
    }

    return itineraryData;
  } catch(e) {
      console.error("Failed to parse JSON response:", responseText);
      throw new Error("The AI returned an invalid itinerary format. Please try modifying your request.");
  }
}

const getInitialPrompt = (request: ItineraryRequest): string => `
    Create a personalized travel itinerary based on the following details.
    The response must be a valid JSON object that adheres to the provided schema. Do not include any markdown formatting like \`\`\`json.
    
    Travel Details:
    - City: ${request.city}
    - Trip Duration: ${request.numberOfDays} days
    - Interests: ${request.interests.join(', ')}
    - Pace: ${request.pace}
    - Budget: ${request.budget}
    
    Instructions:
    1.  Generate a day-by-day itinerary for the specified number of days.
    2.  For each day, provide a creative theme and a sequence of timed activities.
    3.  CRUCIAL: Ensure the itinerary for each day is geographically logical. Each activity location MUST be close to the previous one to create an efficient walking or short transit route. Minimize travel time between activities.
    4.  Each activity must include a detailed description, a specific location with a FULL STREET ADDRESS where possible, and a detailed transit hint (e.g., '5-minute walk from last activity', 'Take Metro Line 1 (Red) 2 stops to Central Station').
    5.  Categorize each activity based on the user's interests.
    6.  Include 2-3 alternative suggestions for each day.
    7.  The number of activities per day should reflect the user's chosen 'Pace'.
    8.  The type of activities and venues should reflect the user's chosen 'Budget'.
  `;

export const startItineraryChat = async (request: ItineraryRequest): Promise<{ itinerary: Itinerary; chat: Chat }> => {
  try {
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        responseMimeType: "application/json",
        responseSchema: itinerarySchema,
      }
    });

    const prompt = getInitialPrompt(request);
    const response = await chat.sendMessage({ message: prompt });
    
    const itinerary = parseItineraryResponse(response.text);
    return { itinerary, chat };
  } catch (error) {
    console.error("Error starting itinerary chat with Gemini API:", error);
    throw new Error("The AI failed to generate an initial itinerary. This could be due to an unusual request or an API issue. Please try again.");
  }
};

export const modifyItinerary = async (chat: Chat, modificationPrompt: string): Promise<Itinerary> => {
  try {
    const prompt = `
        Based on our previous conversation and the itinerary we have created, please apply the following modification: "${modificationPrompt}".
        
        It is critical that you provide the complete, updated itinerary in the exact same JSON format as before, adhering to the original schema. Do not just describe the changes. I need the full JSON object for the entire trip.
    `;
    const response = await chat.sendMessage({ message: prompt });

    const itinerary = parseItineraryResponse(response.text);
    return itinerary;
  } catch (error) {
    console.error("Error modifying itinerary with Gemini API:", error);
    throw new Error("The AI failed to modify the itinerary. It may not have understood the request or returned an invalid format. Please try rephrasing your request.");
  }
};