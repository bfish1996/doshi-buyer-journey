'use client';

import { useState } from 'react';
import { FilterState, JourneyStage } from '@/types';
import { journeyData } from '@/data/journeyData';
import Header from '@/components/Header';
import FilterControls from '@/components/FilterControls';
import JourneyStageComponent from '@/components/JourneyStage';
import ImpactSummary from '@/components/ImpactSummary';
import GuidedTour from '@/components/GuidedTour';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  const [filters, setFilters] = useState<FilterState>({
    institutionType: 'all',
    customerType: 'all',
    selectedStage: null,
  });

  const [isInTour, setIsInTour] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  const handleStageClick = (stage: JourneyStage) => {
    setFilters(prev => ({
      ...prev,
      selectedStage: prev.selectedStage === stage ? null : stage,
    }));
  };

  const handleReset = () => {
    setFilters({
      institutionType: 'all',
      customerType: 'all',
      selectedStage: null,
    });
    setIsInTour(false);
    setTourStep(0);
  };

  const startTour = () => {
    setIsInTour(true);
    setTourStep(0);
    handleReset();
  };

  const closeTour = () => {
    setIsInTour(false);
    setTourStep(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onStartTour={startTour}
        onReset={handleReset}
        isInTour={isInTour}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Impact Summary */}
        <div className="mb-8" id="impact-summary">
          <ImpactSummary 
            institutionFilter={filters.institutionType}
            customerFilter={filters.customerType}
          />
        </div>

        {/* Filter Controls */}
        <div className="mb-8" id="institution-filter">
          <FilterControls 
            filters={filters}
            onFilterChange={setFilters}
          />
        </div>

        {/* Journey Flow */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm" id="journey-stages">
          <div className="flex items-center space-x-3 mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Buyer Journey Stages
            </h2>
            <div className="text-sm text-gray-500">
              Click any stage to explore Doshi's impact
            </div>
          </div>

          <div className="space-y-4">
            {journeyData.map((stageData, index) => (
              <div key={stageData.stage} className="relative">
                <JourneyStageComponent
                  data={stageData}
                  isSelected={filters.selectedStage === stageData.stage}
                  onClick={() => handleStageClick(stageData.stage)}
                  institutionFilter={filters.institutionType}
                  customerFilter={filters.customerType}
                />
                
                {/* Arrow between stages */}
                {index < journeyData.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-doshi-primary to-doshi-secondary rounded-lg p-6 text-white text-center">
          <h3 className="text-xl font-semibold mb-2">
            Ready to Transform Your Customer Journey?
          </h3>
          <p className="mb-4 opacity-90">
            Discover how Doshi can create measurable impact across your buyer journey stages.
          </p>
          <button className="bg-white text-doshi-primary px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Schedule a Demo
          </button>
        </div>
      </div>

      {/* Guided Tour */}
      <GuidedTour
        isActive={isInTour}
        onClose={closeTour}
        onStepChange={setTourStep}
        currentStep={tourStep}
      />
    </div>
  );
}
