'use client';

import { InstitutionType, CustomerType, FilterState } from '@/types';
import { Building, Users, CreditCard, UserCheck, UserPlus } from 'lucide-react';

interface FilterControlsProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const institutionOptions: { value: InstitutionType | 'all'; label: string; icon: any }[] = [
  { value: 'all', label: 'All Banks', icon: Building },
  { value: 'Big Banks', label: 'Big Banks', icon: Building },
  { value: 'Building Societies', label: 'Building Societies', icon: Users },
  { value: 'Credit Unions', label: 'Credit Unions', icon: CreditCard },
];

const customerOptions: { value: CustomerType | 'all'; label: string; icon: any }[] = [
  { value: 'all', label: 'All Customers', icon: Users },
  { value: 'new', label: 'New Customers', icon: UserPlus },
  { value: 'existing', label: 'Existing Customers', icon: UserCheck },
];

export default function FilterControls({ filters, onFilterChange }: FilterControlsProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter Journey View</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Institution Type
          </label>
          <div className="space-y-2">
            {institutionOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.value}
                  onClick={() => onFilterChange({ 
                    ...filters, 
                    institutionType: option.value 
                  })}
                  className={`w-full flex items-center space-x-3 p-3 rounded-md border transition-colors ${
                    filters.institutionType === option.value
                      ? 'border-doshi-primary bg-doshi-primary/5 text-doshi-primary'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Customer Type
          </label>
          <div className="space-y-2">
            {customerOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.value}
                  onClick={() => onFilterChange({ 
                    ...filters, 
                    customerType: option.value 
                  })}
                  className={`w-full flex items-center space-x-3 p-3 rounded-md border transition-colors ${
                    filters.customerType === option.value
                      ? 'border-doshi-primary bg-doshi-primary/5 text-doshi-primary'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
