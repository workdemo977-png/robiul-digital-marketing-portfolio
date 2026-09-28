/**
 * Md. Robiul Sardar - Digital Marketing Portfolio Data
 * Centralized, easily editable data configuration for all profile details, services,
 * portfolio projects, experience timeline, and contact channels.
 */

import portraitImg from '../assets/images/regenerated_image_1790569365039.jpg';
import portraitOfficialImg from '../assets/images/regenerated_image_1790569365039.jpg';
import instagramHeroImg from '../assets/images/instagram_marketing_hero_1790567263312.jpg';
import strategyMockupImg from '../assets/images/digital_strategy_mockup_1790567277572.jpg';

export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  subtitle: string;
  experienceYears: string;
  location: string;
  avatarUrl: string;
  portraitOfficialUrl: string;
  headline: string;
  subheadline: string;
  bio: string;
  contacts: {
    whatsapp: string;
    whatsappFormatted: string;
    whatsappUrl: string;
    email: string;
    emailUrl: string;
    linkedinName: string;
    linkedinUrl: string;
    fiverrName: string;
    defaultFiverrUrl: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  isPrimary?: boolean;
  keyDeliverables: string[];
  bestFor: string;
  deliverableTimeframe: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Instagram Marketing' | 'SEO' | 'Social Media' | 'Keyword Research' | 'Digital Marketing';
  serviceProvided: string;
  shortDescription: string;
  resultsOrObjectives: string;
  deliverables: string[];
  imageUrl?: string;
  isPlaceholder?: boolean;
  caseStudyHighlights?: string[];
}

export interface ExperienceRole {
  role: string;
  organization: string;
  period: string;
  summary: string;
  coreResponsibilities: string[];
}

export interface WorkStep {
  stepNumber: string;
  title: string;
  description: string;
  channelsOrTips: string;
}

export const PERSONAL_DATA: PersonalInfo = {
  name: 'Md. Robiul Sardar',
  shortName: 'Robiul Sardar',
  title: 'Digital Marketing Specialist',
  subtitle: 'Social Media Marketer & Organic Growth Strategist',
  experienceYears: '4+ Years',
  location: 'Narail, Bangladesh',
  avatarUrl: portraitImg,
  portraitOfficialUrl: portraitOfficialImg,
  headline: 'Grow Your Brand. Reach the Right Audience. Build Real Digital Growth.',
  subheadline:
    "Hi, I'm Robiul — a Digital Marketing Specialist helping businesses grow their online presence through Instagram & Facebook Marketing, SEO, social media growth, lead generation, and strategic digital marketing.",
  bio:
    "Hi, I'm Md. Robiul Sardar, a Digital Marketing Specialist with 4+ years of experience helping businesses improve their online presence and reach the right audience. My work focuses on Instagram and Facebook marketing, social media growth, SEO, keyword research, profile backlink building, lead generation, and digital marketing strategies. I focus on practical strategies, clear communication, quality work, and long-term client relationships.",
  contacts: {
    whatsapp: '0134731139',
    whatsappFormatted: '+880 1347-31139',
    whatsappUrl: 'https://wa.me/880134731139?text=Hi%20Robiul,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.',
    email: 'mdrobiulsardar391@gmail.com',
    emailUrl: 'mailto:mdrobiulsardar391@gmail.com?subject=Inquiry%20about%20Digital%20Marketing%20Services',
    linkedinName: 'Md. Robiul Sardar',
    linkedinUrl: 'https://www.linkedin.com/in/md-robiul-sardar-623817434/',
    fiverrName: 'Robiul Sardar on Fiverr',
    defaultFiverrUrl: 'https://www.fiverr.com/robiulsardar', // Editable placeholder URL
  },
};

export const CORE_STATS = [
  { label: '4+ Years Experience', description: 'Practical industry experience delivering digital campaigns' },
  { label: 'Digital Marketing Specialist', description: 'Tailored organic and paid strategies across channels' },
  { label: 'Social Media Marketing', description: 'High-visibility Instagram & Facebook audience engagement' },
  { label: 'SEO & Growth Strategy', description: 'Sustainable keyword discovery & authority backlink building' },
];

export const INSTAGRAM_SERVICES_LIST = [
  {
    title: 'Instagram Profile Optimization',
    description: 'Transforming bios, highlight covers, clickable CTA links, and profile keywords to convert visitors into active followers.',
  },
  {
    title: 'Content Strategy',
    description: 'Developing high-converting carousel, reel, and graphic frameworks aligned with brand aesthetics and niche relevance.',
  },
  {
    title: 'Organic Audience Growth',
    description: 'Authentic engagement techniques to connect with real prospects, eliminating fake bot followers and building community.',
  },
  {
    title: 'Engagement Improvement',
    description: 'Proven strategies to increase comment depth, story polls participation, DMs, saves, and share velocity.',
  },
  {
    title: 'Hashtag Research',
    description: 'Niche, mid-tier, and high-relevance curated hashtag sets designed to maximize Explore page reach.',
  },
  {
    title: 'Competitor Research',
    description: 'In-depth analysis of top competitors in your niche to identify content gaps, viral patterns, and audience desires.',
  },
  {
    title: 'Content Planning',
    description: 'Monthly editorial calendars with organized posting schedules, visual themes, and structured caption copy.',
  },
  {
    title: 'Audience Research',
    description: 'Demographic and psychographic mapping of ideal customer profiles to tailor tone and offers.',
  },
  {
    title: 'Brand Positioning',
    description: 'Establishing clear authority, visual consistency, and a memorable brand voice in crowded social feeds.',
  },
  {
    title: 'Engagement Strategy',
    description: 'Proactive daily networking routines, story interaction funnels, and relationship building with accounts in your field.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'instagram-marketing',
    title: 'Instagram Marketing',
    shortDescription: 'Comprehensive organic growth, profile optimization, aesthetic visual content strategy, and targeted hashtag reach.',
    iconName: 'Instagram',
    isPrimary: true,
    keyDeliverables: [
      'Full bio, username, and highlight optimization',
      'Targeted organic audience growth strategy',
      'Curated hashtag ladder sets for discovery',
      'Content calendar and engagement roadmap',
    ],
    bestFor: 'E-commerce brands, coaches, local businesses, and personal brands seeking organic Instagram authority.',
    deliverableTimeframe: 'Ongoing Monthly or 2-Week Sprint',
  },
  {
    id: 'facebook-marketing',
    title: 'Facebook Marketing',
    shortDescription: 'Business page optimization, high-engagement community posting, targeted campaigns, and follower nurturing.',
    iconName: 'Facebook',
    keyDeliverables: [
      'Professional Facebook business page audit & setup',
      'Audience demographic targeting setup',
      'High-converting post copy & creative ideas',
      'Meta Business Suite optimization & messaging setup',
    ],
    bestFor: 'Local service businesses, retail stores, and agencies targeting high-converting local demographics.',
    deliverableTimeframe: 'Weekly / Monthly Management',
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    shortDescription: 'End-to-end multi-platform scheduling, community moderation, caption drafting, and brand consistency.',
    iconName: 'Share2',
    keyDeliverables: [
      'Multi-channel post scheduling & publishing',
      'Engaging caption writing with targeted CTAs',
      'Community replies, direct message handling',
      'Monthly performance summaries and growth insights',
    ],
    bestFor: 'Busy business owners needing a consistent, worry-free social media presence across channels.',
    deliverableTimeframe: 'Monthly Retainer',
  },
  {
    id: 'seo-keyword-research',
    title: 'SEO & Keyword Research',
    shortDescription: 'In-depth search volume research, competitor keyword gaps, on-page optimization, and organic ranking roadmaps.',
    iconName: 'Search',
    keyDeliverables: [
      'High-intent, low-difficulty search queries discovery',
      'Search competitor analysis and gap identification',
      'On-page title, meta, and heading recommendations',
      'Keyword mapping document for your core website pages',
    ],
    bestFor: 'Websites seeking sustainable, long-term search engine traffic without relying solely on paid ads.',
    deliverableTimeframe: '5 to 7 Days Delivery',
  },
  {
    id: 'profile-backlink-building',
    title: 'Profile Backlink Building',
    shortDescription: 'High-domain-authority, manual profile backlink creation to strengthen website credibility and indexation.',
    iconName: 'Link2',
    keyDeliverables: [
      '100% manual profile link creation on high DA/PA sites',
      'Clean anchor text and accurate NAP brand details',
      'Transparent live link submission Excel report with logins',
      'Safe, white-hat link velocity respecting search algorithms',
    ],
    bestFor: 'New websites and service brands looking to build an authentic foundation of referral signals.',
    deliverableTimeframe: '5 to 10 Business Days',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    shortDescription: 'Targeted B2B and B2C prospect identification, filtered outreach lists, and decision-maker contact discovery.',
    iconName: 'Target',
    keyDeliverables: [
      'Niche-specific verified email and contact lists',
      'Prospect company size, industry, and role filtering',
      'Clean data verification eliminating invalid emails',
      'Structured CSV/Sheets export ready for outreach',
    ],
    bestFor: 'B2B companies, agencies, and sales teams needing fresh pipelines of qualified prospects.',
    deliverableTimeframe: 'Per-batch (3 to 7 Days)',
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    shortDescription: 'High-converting email campaigns, newsletter sequences, audience segmentation, and subscriber retention strategies.',
    iconName: 'Mail',
    keyDeliverables: [
      'Welcome sequence and nurturing campaign drafting',
      'Compelling subject lines engineered for open rates',
      'List segmentation and clean list management advice',
      'Automated email funnel architecture guidance',
    ],
    bestFor: 'Online stores, creators, and service providers aiming to turn subscribers into repeat customers.',
    deliverableTimeframe: 'Per Sequence / Monthly',
  },
  {
    id: 'content-digital-marketing',
    title: 'Content & Digital Marketing',
    shortDescription: 'Comprehensive digital strategy integrating content distribution, audience funnels, and multichannel branding.',
    iconName: 'Megaphone',
    keyDeliverables: [
      'Multi-channel marketing strategy document',
      'Content pillar architecture (Education, Proof, Offers)',
      'Customer journey mapping from discovery to client',
      'Actionable checklist tailored to your current team size',
    ],
    bestFor: 'Brands looking for a structured, unified digital roadmap across social, search, and outbound channels.',
    deliverableTimeframe: 'Strategic Roadmapping Sprint',
  },
];

export const EXPERIENCE_DETAILS: ExperienceRole = {
  role: 'Digital Marketing Specialist / Freelancer',
  organization: 'Self-Employed / Freelance Practice',
  period: '4+ Years of Professional Practice',
  summary:
    'Dedicated digital marketing specialist delivering results-driven social media growth, SEO foundations, and client-centric campaign execution for businesses globally.',
  coreResponsibilities: [
    'Instagram Marketing & Organic Growth: Designing tailored content strategies, profile revamps, and daily engagement routines.',
    'Facebook Marketing: Setting up business assets, targeted audience sets, and organic engagement initiatives.',
    'Social Media Management: Organizing cross-platform calendars, caption drafting, and brand consistency.',
    'Content Strategy: Building content pillars that balance brand storytelling, customer education, and conversion CTAs.',
    'SEO & Keyword Research: Uncovering high-intent commercial keywords and competitor search vulnerabilities.',
    'Profile Backlink Building: Executing manual, white-hat profile backlinks on authoritative web properties.',
    'Lead Generation: Curating targeted business prospect lists with verified contact details for sales teams.',
    'Email Marketing: Developing welcome email sequences and promotional newsletters that drive clicks.',
    'Business Profile Optimization: Polishing Google, social, and directory profiles with unified brand information.',
    'Digital Brand Growth: Advising clients on long-term organic retention, customer trust, and digital reputation.',
  ],
};

export const WORK_STEPS: WorkStep[] = [
  {
    stepNumber: '01',
    title: 'Send Me a Message',
    description:
      'Reach out directly via your preferred channel — WhatsApp, Fiverr, LinkedIn, or Email. I respond promptly to discuss your goals.',
    channelsOrTips: 'Channels: WhatsApp (0134731139), Email, LinkedIn, or Fiverr.',
  },
  {
    stepNumber: '02',
    title: 'Tell Me About Your Business',
    description:
      'Share your website link, social media handles, primary target audience, current growth hurdles, and the specific service you need.',
    channelsOrTips: 'Helpful details: Current follower counts, website URL, target geography, and budget expectations.',
  },
  {
    stepNumber: '03',
    title: 'Discuss the Strategy',
    description:
      'I will review your current digital footprint, analyze your competitor landscape, and present an actionable, custom-tailored strategy.',
    channelsOrTips: 'Outcome: Clear breakdown of deliverables, recommended timelines, and transparent execution plan.',
  },
  {
    stepNumber: '04',
    title: 'Start the Project',
    description:
      'Once we agree on milestones, scope, and communication checkpoints, work begins immediately with regular progress updates.',
    channelsOrTips: 'Execution: Daily/weekly milestone tracking, open communication, and client satisfaction focus.',
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-instagram-growth-lifestyle',
    title: 'Lifestyle Brand Instagram Organic Reach Overhaul',
    category: 'Instagram Marketing',
    serviceProvided: 'Instagram Marketing & Profile Optimization',
    shortDescription:
      'Complete profile restructuring, cohesive highlight branding, and niche hashtag strategy for an emerging lifestyle brand.',
    resultsOrObjectives:
      'Target Objectives: Increase organic non-follower reach, refine bio conversion rate, and establish a consistent 3x weekly posting rhythm.',
    deliverables: [
      'Profile Bio Rewrite & SEO Name Optimization',
      '6 Branded Story Highlight Covers',
      '30-Day Niche Hashtag Research Matrix',
      'Weekly Engagement Routine Guide',
    ],
    imageUrl: instagramHeroImg,
    isPlaceholder: true,
    caseStudyHighlights: [
      'Conducted thorough audit of existing 90-day engagement drop-offs',
      'Introduced educational carousel templates and hook-driven video cover thumbnails',
      'Streamlined DM response templates for inbound customer inquiries',
    ],
  },
  {
    id: 'proj-seo-local-keywords',
    title: 'E-Commerce Organic Search & Keyword Discovery',
    category: 'SEO',
    serviceProvided: 'SEO & Keyword Research',
    shortDescription:
      'In-depth competitor keyword gap analysis and search intent mapping for high-intent commercial product pages.',
    resultsOrObjectives:
      'Target Objectives: Identify low-competition, high-conversion long-tail keyword opportunities to rank above local competitors.',
    deliverables: [
      'Competitor Keyword Gap Matrix (Excel & Google Sheets)',
      '120+ Curated Long-Tail Keywords with Volume & Difficulty',
      'On-Page Meta Title & Description Recommendations',
      'Content Topic Cluster Map for Blog Strategy',
    ],
    imageUrl: strategyMockupImg,
    isPlaceholder: true,
    caseStudyHighlights: [
      'Categorized keywords by search intent: Informational, Navigational, Commercial, and Transactional',
      'Identified 42 high-volume search queries ignored by major competitors',
      'Provided copy-ready title tags and H1 hierarchy guidelines',
    ],
  },
  {
    id: 'proj-social-media-content-system',
    title: 'Multi-Channel Social Media Content Architecture',
    category: 'Social Media',
    serviceProvided: 'Social Media Management & Strategy',
    shortDescription:
      'Structured 60-day visual and caption roadmap synchronizing Instagram and Facebook business pages.',
    resultsOrObjectives:
      'Target Objectives: Eliminate irregular posting gaps, establish authentic brand tone, and systematically drive link clicks.',
    deliverables: [
      'Unified 60-Day Content Editorial Calendar',
      'Caption Copy Deck with Strong Call-to-Actions',
      'Engagement Playbook for Community Interactions',
      'Performance Reporting Dashboard Template',
    ],
    imageUrl: instagramHeroImg,
    isPlaceholder: true,
    caseStudyHighlights: [
      'Created 4 core content pillars: Brand Story, Educational Tips, Client Proof, and Direct Offers',
      'Optimized publishing windows based on active audience time zones',
      'Implemented comment moderation rules and quick-reply triggers',
    ],
  },
  {
    id: 'proj-keyword-research-b2b',
    title: 'Niche B2B Keyword Research & Intent Mapping',
    category: 'Keyword Research',
    serviceProvided: 'In-Depth Keyword Research',
    shortDescription:
      'Comprehensive keyword research identifying lucrative service keywords for a B2B technology consulting firm.',
    resultsOrObjectives:
      'Target Objectives: Pinpoint high-CPC, bottom-of-funnel search terms with buyer intent for organic content production.',
    deliverables: [
      'Comprehensive Keyword Research Spreadsheet',
      'Search Difficulty and Monthly Volume Categorization',
      'Competitor SERP Analysis Breakdown',
      'Content Outline Recommendations for Top 10 Core Terms',
    ],
    imageUrl: strategyMockupImg,
    isPlaceholder: true,
    caseStudyHighlights: [
      'Filtered out ambiguous informational terms to prioritize commercial intent queries',
      'Mapped target keywords to specific landing page URLs',
      'Included actionable SERP feature recommendations (FAQs, snippets, local packs)',
    ],
  },
  {
    id: 'proj-profile-backlinks-authority',
    title: 'High-Authority Manual Profile Backlinks Foundation',
    category: 'Digital Marketing',
    serviceProvided: 'Profile Backlink Building & Brand Citations',
    shortDescription:
      'Systematic manual creation of authoritative profile backlinks on verified, high-domain-authority global platforms.',
    resultsOrObjectives:
      'Target Objectives: Establish baseline brand domain diversity, consistent NAP information, and safe backlink velocity.',
    deliverables: [
      'Manual Profile Creation on High DA 70+ Platforms',
      'Consistent Brand Bio, Avatar, and Website Link Placement',
      'Comprehensive Excel Delivery Report with Live URLs & Credentials',
      'Indexation Guidance and Best Practices Summary',
    ],
    imageUrl: strategyMockupImg,
    isPlaceholder: true,
    caseStudyHighlights: [
      '100% white-hat manual profile registration without automated bot tools',
      'Consistent company description and social link interconnectivity',
      'Full transparency with master spreadsheet handover',
    ],
  },
  {
    id: 'proj-digital-funnel-leadgen',
    title: 'Targeted Lead Generation & Outreach Pipeline',
    category: 'Digital Marketing',
    serviceProvided: 'B2B Lead Generation & Profile Outreach',
    shortDescription:
      'Prospect discovery and verified contact list building for targeted business outreach campaigns.',
    resultsOrObjectives:
      'Target Objectives: Deliver filtered prospect lists with 98%+ valid contact accuracy ready for sales messaging.',
    deliverables: [
      'Custom B2B Prospect Database with Verified Decision Makers',
      'Company Name, Industry, Website, Contact Email, & LinkedIn Profile',
      'Data Verification Report',
      'Personalized Outreach Message Hook Suggestions',
    ],
    imageUrl: strategyMockupImg,
    isPlaceholder: true,
    caseStudyHighlights: [
      'Identified high-fit prospect companies meeting strict criteria',
      'Verified email validity using industry verification standards',
      'Structured database for seamless import into email outreach software',
    ],
  },
];

export const FAQS = [
  {
    question: 'How do we get started working together?',
    answer:
      'Simply choose your preferred channel: message me on WhatsApp (0134731139), connect on LinkedIn, send an email, or order via Fiverr. We will discuss your goals, review your website or social media presence, and map out an effective roadmap.',
  },
  {
    question: 'Why is Instagram Marketing prioritized?',
    answer:
      'Instagram is one of the fastest organic channels for building brand visual identity, engaging directly with potential buyers, and driving traffic. My focus is on genuine organic audience growth, strategic profile optimization, and content that converts visitors into followers.',
  },
  {
    question: 'Do you provide reports and transparent deliverables?',
    answer:
      'Yes, absolutely. For all services — whether keyword research, backlink building, or social media management — you receive detailed documentation, live links, or performance summaries so you always have full visibility over the work done.',
  },
  {
    question: 'Can you work on customized packages for my business?',
    answer:
      'Yes. Every business has different growth stages and budgets. We can combine Instagram Marketing with SEO Keyword Research or Lead Generation depending on your immediate growth targets.',
  },
];
