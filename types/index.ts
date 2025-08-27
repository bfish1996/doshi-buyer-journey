export type InstitutionType = 'Big Banks' | 'Building Societies' | 'Credit Unions';

export type CustomerType = 'new' | 'existing';

export type JourneyStage = 
  | 'Awareness'
  | 'Consideration' 
  | 'Decision'
  | 'Early Usage'
  | 'Deepening Relationship'
  | 'Loyalty & Advocacy'
  | 'Renewal / Churn';

export interface DoshiRole {
  type: 'Leader' | 'Contributor' | 'Minimal';
  description: string;
}

export interface JourneyData {
  stage: JourneyStage;
  institutions: {
    [K in InstitutionType]: {
      buyerJourney: string;
      doshi: {
        new: DoshiRole;
        existing: DoshiRole;
      };
    };
  };
}

export interface FilterState {
  institutionType: InstitutionType | 'all';
  customerType: CustomerType | 'all';
  selectedStage: JourneyStage | null;
}
