import { JourneyData } from '@/types';

export const journeyData: JourneyData[] = [
  {
    stage: 'Awareness',
    institutions: {
      'Big Banks': {
        buyerJourney: 'Awareness via mass marketing (TV, sponsorships, digital ads). High brand recall.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Content-led campaigns (TikTok, Insta, YouTube) → Doshi app download for financial coaching → soft intro to bank.'
          },
          existing: {
            type: 'Minimal',
            description: 'Existing customers already aware. Awareness nudges may resurface ("your bank offers free coaching") but impact is low.'
          }
        }
      },
      'Building Societies': {
        buyerJourney: 'Awareness local, reputation-based, heritage branding.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Campaigns highlight "community + learning" → Doshi is a trust-builder ("Bath Building Society helps you get money smart").'
          },
          existing: {
            type: 'Minimal',
            description: 'Already members, but Doshi can re-raise awareness of *new services/products*.'
          }
        }
      },
      'Credit Unions': {
        buyerJourney: 'Awareness via community groups, word of mouth. Very low budget.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Community campaigns: "Free money coaching for members" → Doshi entry.'
          },
          existing: {
            type: 'Contributor',
            description: 'Raise awareness of products members don\'t realise CU offers (loans, savings).'
          }
        }
      }
    }
  },
  {
    stage: 'Consideration',
    institutions: {
      'Big Banks': {
        buyerJourney: 'Customers compare on rates, UX, trust. Digital-heavy.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Doshi acts as a low-friction *trial of the brand*. User interacts with content before product decision → builds trust.'
          },
          existing: {
            type: 'Contributor',
            description: 'Surface "why stay?" value → nudges tied to product features (ISA explainer, credit builder lessons).'
          }
        }
      },
      'Building Societies': {
        buyerJourney: 'Considered for mortgages/savings, ethics, mutuality.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Doshi strengthens "mutual" identity — *"we help you learn, not just sell."*'
          },
          existing: {
            type: 'Contributor',
            description: 'Content shows *why* existing members should consider additional products.'
          }
        }
      },
      'Credit Unions': {
        buyerJourney: 'Consideration often about access & fairness.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Doshi gives legitimacy, showing CU is modern and member-first.'
          },
          existing: {
            type: 'Contributor',
            description: 'Doshi combats "CU = only for loans" misconception → education opens cross-sell.'
          }
        }
      }
    }
  },
  {
    stage: 'Decision',
    institutions: {
      'Big Banks': {
        buyerJourney: 'Digital-first onboarding, slick flows.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Doshi bridges from "learn about credit" → CTA to open account. Onboards user into bank via coaching.'
          },
          existing: {
            type: 'Contributor',
            description: 'Embedded in first-week comms. Guides salary deposit, savings goal, card usage.'
          }
        }
      },
      'Building Societies': {
        buyerJourney: 'Often hybrid (branch + online).',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Doshi de-risks slow onboarding → keeps user engaged while docs/KYC processed.'
          },
          existing: {
            type: 'Contributor',
            description: 'Teaches how to use mortgage/savings product in early days.'
          }
        }
      },
      'Credit Unions': {
        buyerJourney: 'Manual, paperwork-heavy.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Doshi keeps intent alive during long onboarding ("while you wait, learn how your loan works").'
          },
          existing: {
            type: 'Contributor',
            description: 'Smooths loan onboarding → repayment plans, credit score hygiene in first week.'
          }
        }
      }
    }
  },
  {
    stage: 'Early Usage',
    institutions: {
      'Big Banks': {
        buyerJourney: 'Push app adoption, transactions, overdrafts.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Gamifies first 7 days (2 lessons + 1 savings goal). Prevents app dormancy.'
          },
          existing: {
            type: 'Contributor',
            description: 'Nudge to activate dormant features (set DDs, make first transfer).'
          }
        }
      },
      'Building Societies': {
        buyerJourney: 'Savings + mortgage are anchors.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Early nudges to deposit into savings or start ISA.'
          },
          existing: {
            type: 'Contributor',
            description: 'Education on mortgage repayments, overpayments, ISA usage.'
          }
        }
      },
      'Credit Unions': {
        buyerJourney: 'Payroll deduction savings, small loans.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Doshi reinforces first savings habit.'
          },
          existing: {
            type: 'Contributor',
            description: 'Debt coaching, on-time repayment nudges in first 30 days.'
          }
        }
      }
    }
  },
  {
    stage: 'Deepening Relationship',
    institutions: {
      'Big Banks': {
        buyerJourney: 'Cross-sell credit cards, loans, insurance.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Doshi primes intent with "understanding credit/mortgage" → leads to product.'
          },
          existing: {
            type: 'Contributor',
            description: 'Targeted journeys tied to accounts held → e.g., saver → ISA explainer, borrower → insurance.'
          }
        }
      },
      'Building Societies': {
        buyerJourney: 'Mortgage is anchor → deepen with savings, ISAs, family accounts.',
        doshi: {
          new: {
            type: 'Leader',
            description: '"How mortgages work" modules → funnel to product advisors.'
          },
          existing: {
            type: 'Contributor',
            description: 'Content-led upsell into family savings/ISA.'
          }
        }
      },
      'Credit Unions': {
        buyerJourney: 'Limited range (loans, savings, insurance).',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Education highlights fair-loan access → increase loan uptake.'
          },
          existing: {
            type: 'Contributor',
            description: 'Upsell insurance/debt consolidation via nudges.'
          }
        }
      }
    }
  },
  {
    stage: 'Loyalty & Advocacy',
    institutions: {
      'Big Banks': {
        buyerJourney: 'Loyalty weak, advocacy rare.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Builds perception of *"bank cares"* early on.'
          },
          existing: {
            type: 'Contributor',
            description: 'Ongoing coaching creates stickiness, less likely to churn.'
          }
        }
      },
      'Building Societies': {
        buyerJourney: 'Loyalty stronger due to mutuality.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Reinforces narrative from the start.'
          },
          existing: {
            type: 'Contributor',
            description: 'Keeps emotional tie alive with continuous coaching.'
          }
        }
      },
      'Credit Unions': {
        buyerJourney: 'Highest loyalty, advocacy community-driven.',
        doshi: {
          new: {
            type: 'Leader',
            description: 'Positions CU as modern yet still "people-first."'
          },
          existing: {
            type: 'Contributor',
            description: 'Strengthens existing advocacy by making members feel supported.'
          }
        }
      }
    }
  },
  {
    stage: 'Renewal / Churn',
    institutions: {
      'Big Banks': {
        buyerJourney: 'High churn, low loyalty.',
        doshi: {
          new: {
            type: 'Minimal',
            description: 'Not relevant (customer hasn\'t yet cycled).'
          },
          existing: {
            type: 'Contributor',
            description: 'Retention via nudges around debt mgmt & saving.'
          }
        }
      },
      'Building Societies': {
        buyerJourney: 'Moderate churn, long tenure via mortgages.',
        doshi: {
          new: {
            type: 'Minimal',
            description: 'Not relevant.'
          },
          existing: {
            type: 'Contributor',
            description: 'Lessons on refinancing, switching → reduces attrition.'
          }
        }
      },
      'Credit Unions': {
        buyerJourney: 'Low churn, risk of outgrowing.',
        doshi: {
          new: {
            type: 'Minimal',
            description: 'Not relevant.'
          },
          existing: {
            type: 'Contributor',
            description: 'Keeps members engaged with content even if product range is narrow.'
          }
        }
      }
    }
  }
];
