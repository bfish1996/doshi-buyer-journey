'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';

interface GuidedTourProps {
  isActive: boolean;
  onClose: () => void;
  onStepChange: (step: number) => void;
  currentStep: number;
}

const tourSteps = [
  {
    title: "Welcome to Doshi Impact",
    content: "This interactive tool shows how Doshi creates value across different buyer journeys in financial services. Perfect for presenting to prospects and exploring opportunities.",
    highlight: "header"
  },
  {
    title: "Filter by Institution Type",
    content: "Start by selecting the type of financial institution you're interested in. Each has unique characteristics and customer behaviors.",
    highlight: "institution-filter"
  },
  {
    title: "Customer Journey Stages",
    content: "Click on any stage to see detailed insights. Watch how Doshi's role changes from 'Leader' to 'Contributor' depending on the context.",
    highlight: "journey-stages"
  },
  {
    title: "Impact Metrics",
    content: "The summary shows Doshi's overall impact - perfect for demonstrating value to prospects at a glance.",
    highlight: "impact-summary"
  },
  {
    title: "Ready to Explore",
    content: "You're all set! Use the filters and click through stages to build your story. This tool works great for both presentations and self-exploration.",
    highlight: "none"
  }
];

export default function GuidedTour({ isActive, onClose, onStepChange, currentStep }: GuidedTourProps) {
  if (!isActive) return null;

  const currentTourStep = tourSteps[currentStep];
  const isLastStep = currentStep === tourSteps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = () => {
    if (!isLastStep) {
      const nextStep = currentStep + 1;
      onStepChange(nextStep);
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      const prevStep = currentStep - 1;
      onStepChange(prevStep);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      
      {/* Tour Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl z-50 w-full max-w-md mx-4">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {currentTourStep.title}
              </h3>
              <p className="text-gray-600">
                {currentTourStep.content}
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Step {currentStep + 1} of {tourSteps.length}</span>
              <span>{Math.round(((currentStep + 1) / tourSteps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-doshi-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              disabled={isFirstStep}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isFirstStep 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {isLastStep ? (
              <button
                onClick={onClose}
                className="bg-doshi-primary text-white px-6 py-2 rounded-lg hover:bg-doshi-primary/90 transition-colors font-medium"
              >
                Get Started
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 bg-doshi-primary text-white px-4 py-2 rounded-lg hover:bg-doshi-primary/90 transition-colors"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
