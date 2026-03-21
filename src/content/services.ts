export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  includes: string[];
  forWho: string[];
  situations: string[];
  outcomes: string[];
  painPoints: string[];
  engagement: string[];
  deliverables: string[];
  fit: string[];
  notFit: string[];
};

export const services: Service[] = [
  {
    slug: 'ai-readiness-and-prioritization',
    title: 'AI Readiness & Prioritization Advisory',
    summary: 'Clarify where AI can create practical business value before your team commits budget or operational effort.',
    description:
      'ElevareAI helps leadership teams identify where AI is viable, where it is premature, and how to prioritize opportunities based on business constraints and expected operating impact.',
    includes: [
      'Business objective mapping for AI opportunities',
      'Readiness review across data, workflows, and team capacity',
      'Shortlist of realistic AI initiatives by effort and impact',
      'Decision memo for leadership alignment'
    ],
    forWho: ['Owners and executives evaluating AI pathways', 'Operations leaders who need practical adoption sequencing'],
    situations: [
      'Your team is overwhelmed by AI options and vendor messaging',
      'You need a clear point of view before approving pilots',
      'Different departments have conflicting priorities'
    ],
    outcomes: ['A prioritized roadmap aligned to business goals', 'More confident go/no-go decisions', 'Reduced risk of low-value experimentation'],
    painPoints: ['AI initiatives start without clear ownership', 'Unclear expected value or internal readiness', 'Decision bottlenecks at leadership level'],
    engagement: [
      'Discovery workshop with key stakeholders',
      'Operational and decision-context assessment',
      'Prioritization review with leadership',
      'Final recommendations and next-step options'
    ],
    deliverables: ['AI opportunity map', 'Priority matrix', 'Leadership briefing and recommendation summary'],
    fit: ['Organizations seeking decision clarity before major AI commitments', 'Teams that need structured executive alignment'],
    notFit: ['Teams looking only for rapid implementation execution without advisory', 'Organizations unwilling to allocate stakeholder time for discovery']
  },
  {
    slug: 'saas-selection-and-vendor-evaluation',
    title: 'SaaS Selection & Vendor Evaluation',
    summary: 'Structure software decisions so procurement, operations, and leadership can choose with confidence.',
    description:
      'ElevareAI supports businesses through selection criteria design, vendor comparison, and fit evaluation for SaaS decisions that affect revenue operations, delivery, and internal workflows.',
    includes: [
      'Requirements framing and decision criteria definition',
      'Vendor comparison frameworks and scoring support',
      'Commercial and operational fit review',
      'Recommendation package for internal decision-makers'
    ],
    forWho: ['Companies replacing critical software', 'Teams procuring cross-functional platforms'],
    situations: [
      'Current tooling no longer supports growth needs',
      'Evaluation process lacks structure or consistency',
      'Vendors look similar but carry different operational tradeoffs'
    ],
    outcomes: ['Clear vendor tradeoff visibility', 'Better internal alignment during procurement', 'Lower risk of tool mismatch'],
    painPoints: ['Selection decisions driven by demos rather than requirements', 'Confusion between feature depth and business fit', 'Stakeholder disagreement late in process'],
    engagement: [
      'Decision brief and constraints gathering',
      'Evaluation matrix creation',
      'Vendor option review sessions',
      'Final recommendation presentation'
    ],
    deliverables: ['Documented requirements', 'Vendor scorecard', 'Recommendation summary with rationale'],
    fit: ['Organizations that want objective, decision-focused software selection', 'Teams that need an external structured viewpoint'],
    notFit: ['Companies seeking legal procurement services', 'Teams that only need one-off product demos']
  },
  {
    slug: 'automation-and-digital-operations-design',
    title: 'Automation & Digital Operations Design',
    summary: 'Identify where automation can improve execution quality, handoffs, and operational consistency.',
    description:
      'ElevareAI advises on automation opportunities and workflow design decisions so teams can reduce repetitive work and improve reliability without introducing unnecessary complexity.',
    includes: [
      'Workflow mapping and friction-point analysis',
      'Automation opportunity identification by business function',
      'Tool-path recommendations and sequencing guidance',
      'Operating model considerations for adoption'
    ],
    forWho: ['Operations teams with recurring process bottlenecks', 'Leadership teams modernizing digital operations'],
    situations: [
      'Manual handoffs are causing delays and errors',
      'Teams rely on disconnected tools and ad-hoc processes',
      'Automation initiatives are being discussed without shared priorities'
    ],
    outcomes: ['Clearer process architecture', 'Practical automation priorities', 'Improved operational consistency over time'],
    painPoints: ['High process variance between teams', 'Low visibility into operational bottlenecks', 'Too many automation ideas with no sequencing'],
    engagement: [
      'Current-state workflow review',
      'Target-state design guidance',
      'Prioritized recommendations for rollout',
      'Decision support checkpoints with stakeholders'
    ],
    deliverables: ['Workflow assessment summary', 'Automation opportunity backlog', 'Phased recommendation plan'],
    fit: ['Teams looking for operational clarity before execution', 'Businesses seeking better workflow governance'],
    notFit: ['Organizations expecting custom software development delivery from ElevareAI', 'Teams unwilling to standardize core workflows']
  },
  {
    slug: 'technology-decision-governance',
    title: 'Technology Decision Governance',
    summary: 'Create repeatable decision standards for AI, SaaS, and digital change initiatives.',
    description:
      'ElevareAI helps organizations define how technology decisions are scoped, reviewed, and approved so investment choices remain consistent, accountable, and business-aligned.',
    includes: [
      'Decision governance model design',
      'Evaluation and escalation criteria setup',
      'Cross-functional stakeholder role clarity',
      'Decision communication framework'
    ],
    forWho: ['Executive teams managing multiple technology initiatives', 'Organizations scaling decision accountability'],
    situations: [
      'Technology investments are made inconsistently across teams',
      'No shared framework exists for AI and SaaS decision quality',
      'Operational leaders need clearer governance expectations'
    ],
    outcomes: ['More consistent decision quality', 'Better accountability across stakeholders', 'Stronger alignment between strategy and execution'],
    painPoints: ['Unclear ownership for major technology decisions', 'Repeated debates on decision criteria', 'Difficult post-decision accountability'],
    engagement: [
      'Governance discovery and stakeholder interviews',
      'Framework drafting and review iterations',
      'Leadership alignment workshop',
      'Governance playbook handoff'
    ],
    deliverables: ['Decision governance framework', 'Role and responsibility map', 'Adoption guidance for leadership teams'],
    fit: ['Organizations building long-term decision discipline', 'Teams with cross-functional technology investment activity'],
    notFit: ['Organizations seeking compliance certification advisory', 'Teams that need legal policy drafting as primary scope']
  }
];
