
import React from 'react';
import { Itinerary, Activity } from '../types';
import { CalendarIcon, FoodIcon, LandmarkIcon, LeafIcon, LightbulbIcon, MapPinIcon, ShoppingBagIcon, SunIcon, TransitIcon, UnknownIcon } from './icons';

interface ItineraryDisplayProps {
  itinerary: Itinerary;
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
  <div className="flex space-x-4">
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

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ itinerary }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/50 space-y-8">
      <header className="border-b border-gray-200 pb-4 text-center">
        <h2 className="text-3xl font-extrabold text-dark tracking-tight">Your Adventure in <span className="text-primary">{itinerary.city}, {itinerary.country}</span></h2>
      </header>

      {itinerary.dailyPlans.map((plan, index) => (
        <div key={plan.day} className="animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="sticky top-0 bg-white/80 backdrop-blur-sm z-10 py-4 -my-4 mb-4">
            <div className="flex items-center space-x-4">
               <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow">
                 <CalendarIcon className="h-6 w-6 text-white" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-dark">Day {plan.day} - <span className="font-medium text-secondary">{plan.date}</span></h3>
                 <p className="text-sm font-medium text-muted flex items-center"><SunIcon className="h-4 w-4 mr-2 text-yellow-500"/>{plan.theme}</p>
              </div>
            </div>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-6 pl-2">
            {plan.activities.map((activity, actIndex) => (
              <ActivityCard key={actIndex} activity={activity} />
            ))}
          </div>
          
          {plan.alternatives && plan.alternatives.length > 0 && (
            <div className="mt-6 bg-orange-50 border-l-4 border-primary-hover p-4 rounded-r-lg">
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
  );
};

export default ItineraryDisplay;
