import React, { useState } from 'react';
import ItineraryForm from './components/ItineraryForm';
import ItineraryDisplay from './components/ItineraryDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { Itinerary, ItineraryRequest } from './types';
import { startItineraryChat, modifyItinerary } from './services/geminiService';
import { PaperAirplaneIcon } from './components/icons';
import { Chat } from '@google/genai';

const App: React.FC = () => {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [chat, setChat] = useState<Chat | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModifying, setIsModifying] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(true);

  const handleFormSubmit = async (request: ItineraryRequest) => {
    setIsLoading(true);
    setError(null);
    setItinerary(null);
    setShowForm(false);
    try {
      const result = await startItineraryChat(request);
      setItinerary(result.itinerary);
      setChat(result.chat);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to generate itinerary. ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleReset = () => {
    setItinerary(null);
    setError(null);
    setShowForm(true);
    setChat(null);
  };

  const handleModificationSubmit = async (modificationPrompt: string) => {
    if (!chat || !modificationPrompt) return;
    setIsModifying(true);
    setError(null);
    try {
      const result = await modifyItinerary(chat, modificationPrompt);
      setItinerary(result);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to modify itinerary. ${errorMessage}`);
    } finally {
      setIsModifying(false);
    }
  }

  return (
    <div className="min-h-screen font-sans text-dark flex flex-col print-container-reset">
      <header className="py-6 no-print">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                <PaperAirplaneIcon className="h-9 w-9 text-primary" />
                <h1 className="text-4xl font-extrabold tracking-tight">
                    AI Adventure Planner
                </h1>
            </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 flex-grow flex flex-col items-center print-container-reset">
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
              <ItineraryDisplay 
                itinerary={itinerary} 
                onModify={handleModificationSubmit}
                isModifying={isModifying}
              />
              <div className="text-center mt-8 no-print">
                 <button onClick={handleReset} className="bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    Plan Another Trip
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

       <footer className="py-6 no-print">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted text-sm">
            <p>&copy; {new Date().getFullYear()} Adventure AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;