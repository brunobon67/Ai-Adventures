
import React, { useState } from 'react';
import { ItineraryRequest, Pace, Budget } from '../types';
import { INTERESTS_OPTIONS, PACE_OPTIONS, BUDGET_OPTIONS } from '../constants';
import { CalendarIcon, MapPinIcon, PriceTagIcon, RocketLaunchIcon, RunningIcon } from './icons';

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
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!city || !startDate || !endDate || interests.length === 0) {
      setError('Please fill out all fields and select at least one interest.');
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
        setError('End date must be after the start date.');
        return;
    }
    onSubmit({ city, startDate, endDate, interests, pace, budget });
  };
  
  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/50 space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-dark">Let's plan your next adventure!</h2>
        <p className="text-muted mt-1">Tell us your preferences and we'll create a magical trip for you.</p>
      </div>
      
      <FormSection title="Where are we going?" step="1">
         <div className="relative">
             <MapPinIcon className="h-5 w-5 text-muted absolute top-1/2 left-3 -translate-y-1/2" />
             <input type="text" id="city" value={city} onChange={e => setCity(e.target.value)} placeholder="e.g., Tokyo, Japan" required className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary" />
         </div>
      </FormSection>

      <FormSection title="When is your adventure?" step="2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
                <CalendarIcon className="h-5 w-5 text-muted absolute top-1/2 left-3 -translate-y-1/2"/>
                <input type="date" aria-label="Start Date" id="start-date" value={startDate} min={today} onChange={e => setStartDate(e.target.value)} required className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary" />
            </div>
            <div className="relative">
                <CalendarIcon className="h-5 w-5 text-muted absolute top-1/2 left-3 -translate-y-1/2"/>
                <input type="date" aria-label="End Date" id="end-date" value={endDate} min={startDate || today} onChange={e => setEndDate(e.target.value)} required className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary" />
            </div>
        </div>
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
                {PACE_OPTIONS.map(option => (
                  <button type="button" key={option.value} onClick={() => setPace(option.value)} className={`text-left p-3 border rounded-lg transition-all ${pace === option.value ? 'bg-primary/10 border-primary text-primary shadow' : 'bg-white hover:bg-gray-50 border-gray-300'}`}>
                    <p className="font-semibold">{option.label}</p>
                    <p className="text-xs">{option.description}</p>
                  </button>
                ))}
              </div>
            </div>
             <div>
              <label className="block text-sm font-medium text-muted mb-3 flex items-center"><PriceTagIcon className="h-4 w-4 mr-2"/>Budget</label>
              <div className="flex flex-col space-y-2">
                {BUDGET_OPTIONS.map(option => (
                  <button type="button" key={option.value} onClick={() => setBudget(option.value)} className={`text-left p-3 border rounded-lg transition-all ${budget === option.value ? 'bg-primary/10 border-primary text-primary shadow' : 'bg-white hover:bg-gray-50 border-gray-300'}`}>
                    <p className="font-semibold">{option.label}</p>
                    <p className="text-xs">{option.description}</p>
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
            className="w-full flex justify-center items-center bg-primary text-white font-bold py-4 px-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105"
        >
            <RocketLaunchIcon className="h-6 w-6 mr-2" />
            Create My Adventure!
        </button>
      </div>
    </form>
  );
};

export default ItineraryForm;
