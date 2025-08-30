
import React, { useState, useEffect } from 'react';

const loadingMessages = [
    "Plotting the perfect photo ops...",
    "Consulting with local foodies...",
    "Finding the best hidden gems...",
    "Syncing your adventure calendar...",
    "Packing our virtual bags...",
    "Making sure you don't miss a thing..."
];

const LoadingSpinner: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setMessageIndex(prevIndex => (prevIndex + 1) % loadingMessages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-xl border-gray-200/50 animate-fade-in">
        <svg className="animate-spin h-12 w-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <h2 className="mt-4 text-xl font-semibold text-dark">Charting Your Course...</h2>
        <p className="mt-2 text-muted text-center h-5 transition-opacity duration-500">
            {loadingMessages[messageIndex]}
        </p>
    </div>
  );
};

export default LoadingSpinner;