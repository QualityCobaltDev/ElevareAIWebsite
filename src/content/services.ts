export type Service = {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
  useCases: string[];
};

export const services: Service[] = [
  {
    slug: 'ai-vendor-advisory',
    title: 'AI Vendor Advisory',
    summary:
      'We help your team shortlist vetted AI vendors across relevant service streams and align options to your business goals.',
    outcomes: ['Faster vendor evaluation cycles', 'Reduced procurement uncertainty', 'Clear decision criteria for leadership'],
    useCases: ['Comparing AI tools for operations', 'Selecting providers for digital transformation initiatives']
  },
  {
    slug: 'ai-driven-marketing-and-attribution',
    title: 'AI-Driven Marketing & Attribution Access',
    summary:
      'We connect businesses with AI-powered marketing and attribution specialists when advanced media performance is required.',
    outcomes: ['Improved visibility into channel performance', 'More accountable campaign decision-making', 'Stronger performance marketing foundation'],
    useCases: ['Cross-channel attribution setup', 'Performance-focused digital growth programs']
  },
  {
    slug: 'workflow-and-operations-automation',
    title: 'Workflow & Operations Automation',
    summary:
      'We guide businesses toward workflow platforms and automation partners that improve operational consistency and execution speed.',
    outcomes: ['Streamlined internal processes', 'Better handoff clarity across teams', 'Lower operational friction'],
    useCases: ['Workflow platform implementation', 'Automation opportunities across internal teams']
  },
  {
    slug: 'financial-operations-support',
    title: 'Financial Operations Support Connections',
    summary:
      'We connect businesses with trusted accounting, bookkeeping, and tax professionals for reliable financial operations support.',
    outcomes: ['Cleaner financial workflows', 'Improved compliance readiness', 'More time for strategic priorities'],
    useCases: ['Back-office accounting support', 'Bookkeeping and tax service partner sourcing']
  }
];
