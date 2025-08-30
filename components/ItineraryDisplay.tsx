import React, { useState } from 'react';
import { Itinerary, Activity, DailyPlan } from '../types';
import { CalendarIcon, ClipboardIcon, FoodIcon, LandmarkIcon, LeafIcon, LightbulbIcon, MapPinIcon, PrinterIcon, ShoppingBagIcon, SunIcon, TransitIcon, UnknownIcon, WandIcon } from './icons';

interface ItineraryDisplayProps {
  itinerary: Itinerary;
  onModify: (prompt: string) => void;
  isModifying: boolean;
}

const getActivityIcon = (type: string) => {
  const lowerType = type.toLowerCase();
  if (lowerType.includes('food') || lowerType.includes('culinary') || lowerType.includes('dining') || lowerType.includes('restaurant')) return <FoodIcon className="h-5 w-5 text-white" />;
  if (lowerType.includes('history') || lowerType.includes('culture') || lowerType.includes('museum') || lowerType.includes('landmark')) return <LandmarkIcon className="h-5 w-5 text-white" />;
  if (lowerType.includes('outdoor') || lowerType.includes('nature') || lowerType.includes('park')) return <LeafIcon className="h-5 w-5 text-white" />;
  if (lowerType.includes('shopping')) return <ShoppingBagIcon className="h-5 w-5 text-white" />;
  return <UnknownIcon className="h-5 w-5 text-white" />;
};

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => (
  <div className="flex space-x-4 break-inside-avoid">
    <div className="flex flex-col items-center">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow">
        {getActivityIcon(activity.type)}
      </div>
      <div className="w-px h-full bg-gray-200"></div>
    </div>
    <div className="flex-grow pb-8">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-lg text-dark">{activity.description}</h4>
        <p className="text-sm font-medium text-primary flex-shrink-0 ml-4">{activity.time}</p>
      </div>
      <div className="mt-2 text-sm text-muted space-y-1">
        <p className="flex items-start"><MapPinIcon className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" /><span>{activity.location}</span></p>
        <p className="flex items-start"><TransitIcon className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" /><span>{activity.transit}</span></p>
      </div>
    </div>
  </div>
);

const formatItineraryForCopy = (itinerary: Itinerary): string => {
  let text = `Your Adventure in ${itinerary.city}, ${itinerary.country}\n\n`;
  
  itinerary.dailyPlans.forEach(plan => {
    text += `----------\n`;
    text += `Day ${plan.day}: ${plan.theme}\n`;
    text += `----------\n\n`;
    
    plan.activities.forEach(activity => {
      text += `${activity.time}: ${activity.description}\n`;
      text += `Location: ${activity.location}\n`;
      text += `Transit: ${activity.transit}\n\n`;
    });
    
    if (plan.alternatives && plan.alternatives.length > 0) {
      text += `Alternative Suggestions:\n`;
      plan.alternatives.forEach(alt => {
        text += `- ${alt}\n`;
      });
      text += `\n`;
    }
  });
  
  return text;
};


const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ itinerary, onModify, isModifying }) => {
  const [modificationPrompt, setModificationPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const itineraryText = formatItineraryForCopy(itinerary);
    navigator.clipboard.writeText(itineraryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleModificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modificationPrompt.trim()) {
      onModify(modificationPrompt);
      setModificationPrompt('');
    }
  };

  return (
    <>
      <div id="printable-area" className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/50 space-y-8">
        <header className="border-b border-gray-200 pb-4 text-center">
          <h2 className="text-3xl font-extrabold text-dark tracking-tight">Your Adventure in <span className="text-primary">{itinerary.city}, {itinerary.country}</span></h2>
        </header>

        <div className="flex justify-center gap-4 no-print">
            <button onClick={handleCopy} className="flex items-center gap-2 px-4 py-2 bg-light text-muted font-semibold rounded-lg shadow-sm hover:bg-gray-200 transition-colors">
                <ClipboardIcon className="h-5 w-5"/> {copied ? 'Copied!' : 'Copy'}
            </button>
            <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-light text-muted font-semibold rounded-lg shadow-sm hover:bg-gray-200 transition-colors">
                <PrinterIcon className="h-5 w-5"/> Print / Save PDF
            </button>
        </div>

        {itinerary.dailyPlans.map((plan, index) => (
          <div key={plan.day} className={`animate-slide-in-up ${index > 0 ? 'page-break' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
            <div className="sticky top-0 bg-white/80 backdrop-blur-sm z-10 py-4 -my-4 mb-4">
              <div className="flex items-center space-x-4">
                 <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow">
                   <CalendarIcon className="h-6 w-6 text-white" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-dark">Day {plan.day}</h3>
                   <p className="font-medium text-secondary flex items-center"><SunIcon className="h-4 w-4 mr-2 text-yellow-500"/>{plan.theme}</p>
                </div>
              </div>
            </div>

            <div className="relative border-l-2 border-gray-200 ml-6 pl-2">
              {plan.activities.map((activity, actIndex) => (
                <ActivityCard key={actIndex} activity={activity} />
              ))}
            </div>
            
            {plan.alternatives && plan.alternatives.length > 0 && (
              <div className="mt-6 bg-orange-50 border-l-4 border-primary-hover p-4 rounded-r-lg break-inside-avoid">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <LightbulbIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-sm font-semibold text-primary">Alternative Suggestions</h5>
                    <ul className="mt-2 list-disc list-inside text-sm text-orange-800 space-y-1">
                      {plan.alternatives.map((alt, altIndex) => (
                        <li key={altIndex}>{alt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-200/50 no-print">
        <form onSubmit={handleModificationSubmit}>
          <h3 className="text-lg font-bold text-dark mb-2">Refine Your Itinerary</h3>
          <p className="text-muted text-sm mb-4">Want to make a change? Tell the AI what you'd like to adjust. (e.g., "Replace the museum on day 2 with something outdoors")</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text"
              value={modificationPrompt}
              onChange={(e) => setModificationPrompt(e.target.value)}
              placeholder="Your instructions here..."
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary flex-grow"
              disabled={isModifying}
            />
            <button
              type="submit"
              disabled={isModifying || !modificationPrompt.trim()}
              className="flex justify-center items-center bg-gradient-to-r from-accent to-sky-400 text-white font-bold py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {isModifying ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Refining...
                </>
              ) : (
                <>
                  <WandIcon className="h-5 w-5 mr-2" />
                  Refine
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ItineraryDisplay;