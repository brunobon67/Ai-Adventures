
export enum Pace {
  Relaxed = 'Relaxed',
  Moderate = 'Moderate',
  Packed = 'Packed',
}

export enum Budget {
  Budget = 'Budget-Friendly',
  MidRange = 'Mid-Range',
  Luxury = 'Luxury',
}

export interface ItineraryRequest {
  city: string;
  numberOfDays: number;
  interests: string[];
  pace: Pace;
  budget: Budget;
}

export interface Activity {
  time: string;
  description: string;
  location: string;
  transit: string;
  type: string;
}

export interface DailyPlan {
  day: number;
  theme: string;
  activities: Activity[];
  alternatives: string[];
}

export interface Itinerary {
  city: string;
  country: string;
  dailyPlans: DailyPlan[];
}
