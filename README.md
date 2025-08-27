# Doshi Buyer Journey Impact

An interactive web application that visualizes Doshi's impact across retail banking buyer journeys. Perfect for sales presentations and prospect exploration.

## Features

🎯 **Interactive Journey Mapping** - Click through 7 buyer journey stages to see Doshi's role
🏦 **Institution Filtering** - View impact across Big Banks, Building Societies, and Credit Unions  
👥 **Customer Segmentation** - Toggle between new and existing customer perspectives
📊 **Impact Metrics** - Real-time calculation of Doshi's influence across journey stages
🎪 **Guided Tour** - Built-in presentation mode for sales demos
📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

## Sales Collateral Features

- **Presentation Ready**: Clean, professional design suitable for client meetings
- **Guided Tour**: Step-by-step walkthrough for prospects
- **Interactive Exploration**: Prospects can explore at their own pace
- **Impact Visualization**: Clear metrics showing Doshi's value proposition
- **Institution-Specific Views**: Tailor the story to specific prospect types

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd doshi-buyer-journey
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Deployment on Vercel

This app is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically with zero configuration

The app uses static export configuration for optimal performance on Vercel's edge network.

## Usage for Sales

### Presentation Mode
1. Click "Guided Tour" to start a structured walkthrough
2. Use the tour to introduce prospects to Doshi's value proposition
3. Highlight key impact metrics and journey stages

### Exploration Mode
1. Let prospects filter by their institution type
2. Show them specific customer journey stages relevant to their business
3. Use the impact summary to quantify Doshi's potential value

### Key Selling Points
- **Leader Role**: Stages where Doshi drives the customer journey
- **Contributor Role**: Stages where Doshi enhances existing processes
- **Journey Coverage**: Percentage of touchpoints where Doshi adds value

## Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
├── data/               # Journey data and types
├── types/              # TypeScript type definitions
└── README.md
```

## Customization

The journey data is stored in `data/journeyData.ts` and can be easily updated to reflect new insights or institution types.

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience  
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Vercel** - Deployment and hosting platform

## License

Private - Doshi Internal Use
