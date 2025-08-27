'use client';

import { Sparkles, Play, RotateCcw } from 'lucide-react';

interface HeaderProps {
  onStartTour: () => void;
  onReset: () => void;
  isInTour: boolean;
}

export default function Header({ onStartTour, onReset, isInTour }: HeaderProps) {
  return (
    <div className="bg-gradient-to-r from-doshi-primary to-doshi-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <Sparkles className="w-8 h-8" />
              <h1 className="text-3xl font-bold">Doshi Impact</h1>
            </div>
            <p className="text-lg opacity-90 max-w-2xl">
              Discover how Doshi transforms buyer journeys across different financial institutions, 
              creating value for both new customer acquisition and existing customer engagement.
            </p>
          </div>
          
          <div className="flex space-x-3">
            {!isInTour && (
              <button
                onClick={onStartTour}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                <span className="font-medium">Guided Tour</span>
              </button>
            )}
            
            <button
              onClick={onReset}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="font-medium">Reset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
