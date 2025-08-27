'use client';

import { JourneyData, InstitutionType, CustomerType } from '@/types';
import { ChevronRight, Target, Users, Building, CreditCard } from 'lucide-react';

interface JourneyStageProps {
  data: JourneyData;
  isSelected: boolean;
  onClick: () => void;
  institutionFilter: InstitutionType | 'all';
  customerFilter: CustomerType | 'all';
}

const institutionIcons = {
  'Big Banks': Building,
  'Building Societies': Users,
  'Credit Unions': CreditCard,
};

const roleColors = {
  'Leader': 'bg-green-100 text-green-800 border-green-200',
  'Contributor': 'bg-blue-100 text-blue-800 border-blue-200',
  'Minimal': 'bg-gray-100 text-gray-600 border-gray-200',
};

export default function JourneyStageComponent({ 
  data, 
  isSelected, 
  onClick, 
  institutionFilter, 
  customerFilter 
}: JourneyStageProps) {
  const filteredInstitutions = institutionFilter === 'all' 
    ? Object.entries(data.institutions)
    : [[institutionFilter, data.institutions[institutionFilter]]];

  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
          isSelected 
            ? 'border-doshi-primary bg-doshi-primary/5 shadow-lg' 
            : 'border-gray-200 hover:border-doshi-primary/50 hover:shadow-md'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Target className="w-6 h-6 text-doshi-primary" />
            <h3 className="text-lg font-semibold text-gray-900">{data.stage}</h3>
          </div>
          <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
        </div>
      </button>

      {isSelected && (
        <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
          {filteredInstitutions.map(([institutionName, institutionData]) => {
            const Icon = institutionIcons[institutionName as InstitutionType];
            const data = institutionData as any; // Type assertion for the data structure
            
            return (
              <div key={String(institutionName)} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon className="w-5 h-5 text-doshi-secondary" />
                  <h4 className="font-semibold text-gray-800">{String(institutionName)}</h4>
                </div>
                
                <div className="mb-4 p-3 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Buyer Journey:</span> {data.buyerJourney}
                  </p>
                </div>

                <div className="space-y-3">
                  {(customerFilter === 'all' || customerFilter === 'new') && (
                    <div className="border-l-4 border-green-400 pl-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded border ${
                          roleColors[data.doshi.new.type as keyof typeof roleColors]
                        }`}>
                          {data.doshi.new.type}
                        </span>
                        <span className="text-sm font-medium text-gray-700">New Customers</span>
                      </div>
                      <p className="text-sm text-gray-600">{data.doshi.new.description}</p>
                    </div>
                  )}

                  {(customerFilter === 'all' || customerFilter === 'existing') && (
                    <div className="border-l-4 border-blue-400 pl-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded border ${
                          roleColors[data.doshi.existing.type as keyof typeof roleColors]
                        }`}>
                          {data.doshi.existing.type}
                        </span>
                        <span className="text-sm font-medium text-gray-700">Existing Customers</span>
                      </div>
                      <p className="text-sm text-gray-600">{data.doshi.existing.description}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
