
import React, { useState } from 'react';
import ItineraryForm from './components/ItineraryForm';
import ItineraryDisplay from './components/ItineraryDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { Itinerary, ItineraryRequest } from './types';
import { generateItinerary } from './services/geminiService';
import { PaperAirplaneIcon } from './components/icons';

const App: React.FC = () => {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(true);

  const handleFormSubmit = async (request: ItineraryRequest) => {
    setIsLoading(true);
    setError(null);
    setItinerary(null);
    setShowForm(false);
    try {
      const result = await generateItinerary(request);
      setItinerary(result);
    } catch (err) {
      console.error(err);
      setError('Failed to generate itinerary. Please check your inputs or try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleReset = () => {
    setItinerary(null);
    setError(null);
    setShowForm(true);
  }

  return (
    <div className="min-h-screen font-sans text-dark flex flex-col">
      <header className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-3">
          <PaperAirplaneIcon className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-dark tracking-tight">
            Adventure AI
          </h1>
        </div>
      </header>
      
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 flex-grow flex flex-col items-center">
        <div className="w-full max-w-4xl">
          {showForm && <ItineraryForm onSubmit={handleFormSubmit} isLoading={isLoading} />}
          
          {isLoading && <LoadingSpinner />}
          
          {!showForm && error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md animate-fade-in text-center" role="alert">
              <p className="font-bold">Oops! Something went wrong.</p>
              <p>{error}</p>
              <button onClick={handleReset} className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                Try Again
              </button>
            </div>
          )}

          {!isLoading && !showForm && itinerary && (
            <div className="animate-fade-in">
              <ItineraryDisplay itinerary={itinerary} />
              <div className="text-center mt-8">
                 <button onClick={handleReset} className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-primary-hover transition-transform hover:scale-105">
                    Plan Another Trip
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

       <footer className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted text-sm">
            <p>&copy; {new Date().getFullYear()} Adventure AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;