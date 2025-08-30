
import React, { useState } from 'react';
import { ItineraryRequest, Pace, Budget } from '../types';
import { INTERESTS_OPTIONS, PACE_OPTIONS, BUDGET_OPTIONS } from '../constants';
import { CheckCircleIcon, HashtagIcon, MapPinIcon, PriceTagIcon, RocketLaunchIcon, RunningIcon } from './icons';

interface ItineraryFormProps {
  onSubmit: (request: ItineraryRequest) => void;
  isLoading: boolean;
}

const FormSection: React.FC<{ title: string, step: string, children: React.ReactNode }> = ({ title, step, children }) => (
    <div className="mb-8 animate-slide-in-up">
        <div className="flex items-center mb-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md">{step}</div>
            <h3 className="ml-4 text-xl font-bold text-dark">{title}</h3>
        </div>
        <div className="pl-12">
            {children}
        </div>
    </div>
);

const ItineraryForm: React.FC<ItineraryFormProps> = ({ onSubmit, isLoading }) => {
  const [city, setCity] = useState('');
  const [numberOfDays, setNumberOfDays] = useState(3);
  const [interests, setInterests] = useState<string[]>([]);
  const [pace, setPace] = useState<Pace>(Pace.Moderate);
  const [budget, setBudget] = useState<Budget>(Budget.MidRange);
  const [error, setError] = useState('');

  const toggleInterest = (interest: string) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
        setNumberOfDays(Math.max(1, Math.min(14, value)));
    } else if (e.target.value === '') {
        setNumberOfDays(1);
    }
  }

  const handleDecrementDays = () => setNumberOfDays(prev => Math.max(1, prev - 1));
  const handleIncrementDays = () => setNumberOfDays(prev => Math.min(14, prev + 1));


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!city || numberOfDays <= 0 || interests.length === 0) {
      setError('Please fill out all fields and select at least one interest.');
      return;
    }
     if (numberOfDays > 14) {
      setError('For best results, please plan trips of 14 days or less.');
      return;
    }
    onSubmit({ city, numberOfDays, interests, pace, budget });
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/50 space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-dark">Let's Plan Your Next Adventure!</h2>
        <p className="text-muted mt-1">Tell us your travel preferences, and we'll craft the perfect trip.</p>
      </div>
      
      <FormSection title="Where are we going?" step="1">
         <div className="relative">
             <MapPinIcon className="h-5 w-5 text-muted absolute top-1/2 left-3 -translate-y-1/2" />
             <input type="text" id="city" value={city} onChange={e => setCity(e.target.value)} placeholder="e.g., Tokyo, Japan" required className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary" />
         </div>
      </FormSection>

      <FormSection title="How long is your adventure?" step="2">
        <div className="flex items-center justify-center space-x-4">
            <button type="button" onClick={handleDecrementDays} disabled={numberOfDays <= 1} className="w-10 h-10 rounded-full bg-light text-primary font-bold text-2xl flex items-center justify-center shadow-sm hover:bg-orange-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">-</button>
            <div className="relative text-center">
                <HashtagIcon className="h-5 w-5 text-muted absolute top-1/2 left-3 -translate-y-1/2" />
                <input 
                    type="number" 
                    aria-label="Number of days" 
                    id="days" 
                    value={numberOfDays} 
                    onChange={handleDaysChange} 
                    min="1" 
                    max="14" 
                    required 
                    className="w-28 text-center pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary font-semibold text-lg" 
                />
            </div>
             <button type="button" onClick={handleIncrementDays} disabled={numberOfDays >= 14} className="w-10 h-10 rounded-full bg-light text-primary font-bold text-2xl flex items-center justify-center shadow-sm hover:bg-orange-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">+</button>
        </div>
         <p className="text-center text-muted text-xs mt-3">Enter a trip duration between 1 and 14 days.</p>
      </FormSection>

      <FormSection title="What's your vibe?" step="3">
         <div>
            <label className="block text-sm font-medium text-muted mb-3">Select your interests:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {INTERESTS_OPTIONS.map(({label, icon: Icon}) => (
                <button
                type="button"
                key={label}
                onClick={() => toggleInterest(label)}
                className={`flex flex-col items-center justify-center text-center p-3 border rounded-lg transition-all transform hover:-translate-y-1 ${interests.includes(label) ? 'bg-primary/10 border-primary text-primary shadow-md' : 'bg-light/50 hover:bg-gray-100 border-gray-200 text-muted'}`}
                >
                <Icon className="h-6 w-6 mb-1.5" />
                <span className="text-xs font-semibold">{label}</span>
                </button>
            ))}
            </div>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-muted mb-3 flex items-center"><RunningIcon className="h-4 w-4 mr-2"/>Pace</label>
              <div className="flex flex-col space-y-2">
                {PACE_OPTIONS.map(({value, label, description, icon: Icon}) => (
                  <button type="button" key={value} onClick={() => setPace(value)} className={`relative text-left p-3 border-2 rounded-lg transition-all ${pace === value ? 'border-primary bg-primary/5 shadow' : 'bg-white hover:bg-gray-50 border-gray-200'}`}>
                    {pace === value && <div className="absolute top-1.5 right-1.5"><CheckCircleIcon className="h-5 w-5 text-primary" /></div>}
                    <div className="flex items-center">
                        <Icon className={`h-7 w-7 mr-3 ${pace === value ? 'text-primary' : 'text-muted'}`}/>
                        <div>
                            <p className="font-semibold">{label}</p>
                            <p className="text-xs text-muted">{description}</p>
                        </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
             <div>
              <label className="block text-sm font-medium text-muted mb-3 flex items-center"><PriceTagIcon className="h-4 w-4 mr-2"/>Budget</label>
              <div className="flex flex-col space-y-2">
                {BUDGET_OPTIONS.map(({value, label, description, icon: Icon}) => (
                  <button type="button" key={value} onClick={() => setBudget(value)} className={`relative text-left p-3 border-2 rounded-lg transition-all ${budget === value ? 'border-primary bg-primary/5 shadow' : 'bg-white hover:bg-gray-50 border-gray-200'}`}>
                    {budget === value && <div className="absolute top-1.5 right-1.5"><CheckCircleIcon className="h-5 w-5 text-primary" /></div>}
                    <div className="flex items-center">
                        <Icon className={`h-7 w-7 mr-3 ${budget === value ? 'text-primary' : 'text-muted'}`}/>
                        <div>
                            <p className="font-semibold">{label}</p>
                            <p className="text-xs text-muted">{description}</p>
                        </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
         </div>
      </FormSection>
      
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div className="pt-4">
        <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
        >
            <RocketLaunchIcon className="h-6 w-6 mr-2" />
            Create My Adventure!
        </button>
      </div>
    </form>
  );
};

export default ItineraryForm;