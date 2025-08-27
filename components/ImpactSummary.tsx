'use client';

import { InstitutionType, CustomerType } from '@/types';
import { journeyData } from '@/data/journeyData';
import { TrendingUp, Users, Building, Award } from 'lucide-react';

interface ImpactSummaryProps {
  institutionFilter: InstitutionType | 'all';
  customerFilter: CustomerType | 'all';
}

export default function ImpactSummary({ institutionFilter, customerFilter }: ImpactSummaryProps) {
  // Calculate impact metrics based on filters
  const calculateImpact = () => {
    let leaderRoles = 0;
    let contributorRoles = 0;
    let totalStages = 0;

    journeyData.forEach(stage => {
      const institutions = institutionFilter === 'all' 
        ? Object.entries(stage.institutions)
        : [[institutionFilter, stage.institutions[institutionFilter]]];

      institutions.forEach(([institutionName, institutionData]) => {
        // Type assertion since we know the structure from our data
        const data = institutionData as any;
        
        if (customerFilter === 'all' || customerFilter === 'new') {
          totalStages++;
          if (data.doshi.new.type === 'Leader') leaderRoles++;
          else if (data.doshi.new.type === 'Contributor') contributorRoles++;
        }
        
        if (customerFilter === 'all' || customerFilter === 'existing') {
          if (customerFilter === 'existing') totalStages++;
          if (data.doshi.existing.type === 'Leader') leaderRoles++;
          else if (data.doshi.existing.type === 'Contributor') contributorRoles++;
        }
      });
    });

    return { leaderRoles, contributorRoles, totalStages };
  };

  const { leaderRoles, contributorRoles, totalStages } = calculateImpact();
  const impactPercentage = Math.round(((leaderRoles + contributorRoles) / totalStages) * 100);

  const getInstitutionName = () => {
    if (institutionFilter === 'all') return 'All Institutions';
    return institutionFilter;
  };

  const getCustomerName = () => {
    if (customerFilter === 'all') return 'All Customers';
    return customerFilter === 'new' ? 'New Customers' : 'Existing Customers';
  };

  return (
    <div className="bg-gradient-to-br from-doshi-primary/5 to-doshi-secondary/5 rounded-xl p-6 border border-doshi-primary/20">
      <div className="flex items-center space-x-3 mb-4">
        <Award className="w-6 h-6 text-doshi-primary" />
        <h2 className="text-xl font-semibold text-gray-900">
          Doshi Impact Overview
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-4">
        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">{leaderRoles}</div>
          <div className="text-sm text-gray-600">Leader Roles</div>
        </div>

        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">{contributorRoles}</div>
          <div className="text-sm text-gray-600">Contributor Roles</div>
        </div>

        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <Building className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600">{impactPercentage}%</div>
          <div className="text-sm text-gray-600">Journey Impact</div>
        </div>

        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-600">{totalStages}</div>
          <div className="text-sm text-gray-600">Touch Points</div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4">
        <p className="text-gray-700">
          <span className="font-semibold">Current View:</span> {getInstitutionName()} • {getCustomerName()}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Doshi plays a meaningful role in <span className="font-semibold text-doshi-primary">{impactPercentage}%</span> of journey stages, 
          leading in <span className="font-semibold text-green-600">{leaderRoles}</span> stages and contributing significantly in <span className="font-semibold text-blue-600">{contributorRoles}</span> others.
        </p>
      </div>
    </div>
  );
}
