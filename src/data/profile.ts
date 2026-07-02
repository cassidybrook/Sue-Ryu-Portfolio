export const profile = {
  name: 'Sue Ryu',
  title: 'Delivery Enablement & Performance Specialist',
  location: 'Mount Roskill, Auckland, New Zealand',
  address: '24 Hardley Avenue, Mount Roskill, Auckland',
  phone: '021 075 9773',
  email: 'sue.ryu@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/sue-ryu-ca-5285b1195/',
  cvUrl: '/Sue-Ryu-CV.pdf',
  cvFilename: 'Sue-Ryu-CV.pdf',
  about:
    'Finance and delivery professional with a foundation in assurance, reporting, and performance analysis. Currently a Delivery Enablement & Performance Specialist at Air New Zealand, where I support planning, delivery, and cross-functional collaboration in fast-paced environments. Previously a Finance Specialist and Senior Assurance Associate at Ernst & Young, I bring analytical rigour, stakeholder partnership, and a track record of turning financial and operational data into clear, actionable insights.',
} as const

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
] as const

export const education = [
  {
    id: 'caanz',
    institution: 'Chartered Accountants Australia and New Zealand (CAANZ)',
    credential: 'Provisional Member',
    period: '2020 – Present',
    details: [
      'Completed modules: Tax, Financial Accounting, Management and Applied Finance, Audit, Capstone',
    ],
  },
  {
    id: 'uoa',
    institution: 'University of Auckland',
    credential: 'Bachelor of Commerce / Arts',
    period: '2015 – 2019',
    details: ['Accounting, Psychology, Criminology'],
  },
  {
    id: 'bdsc',
    institution: 'Botany Downs Secondary College',
    credential: 'NCEA 1, 2 and 3 with Merit',
    period: '2010 – 2014',
    details: [],
  },
] as const

export const experience = [
  {
    id: 'airnz-deps',
    company: 'Air New Zealand',
    role: 'Delivery Enablement & Performance Specialist',
    period: 'Apr 2025 – Present',
    location: 'Auckland, New Zealand',
    highlights: [
      'Planning and delivery support — managing competing priorities, adapting to changing business needs, and maintaining strong working relationships to deliver high-quality outcomes',
      'Financial analysis and business insights — supporting strategic decision-making through reporting, performance analysis, and identifying opportunities to improve business outcomes',
      'Stakeholder collaboration — partnering with cross-functional teams to solve problems, communicate insights clearly, and support delivery outcomes in fast-paced environments',
    ],
  },
  {
    id: 'airnz-fs',
    company: 'Air New Zealand',
    role: 'Finance Specialist',
    period: 'Apr 2023 – Apr 2025',
    location: 'Auckland, New Zealand',
    highlights: [
      'Financial reporting and analysis — conducting in-depth financial analysis and reporting to support strategic decision-making and providing insights on cost management',
      'Budgeting and forecasting — comparing actual performance against targets to drive financial accountability and business performance',
      'Stakeholder collaboration — partnering with various squads to translate financial data into actionable insights, supporting business objectives',
    ],
  },
  {
    id: 'ey',
    company: 'Ernst & Young',
    role: 'Senior Assurance Associate',
    period: 'Mar 2020 – Apr 2023',
    highlights: [
      'Audit and compliance — conducting financial audits for clients across various industries, ensuring compliance with IFRS / NZ GAAP and regulatory requirements',
      'Risk assessment and internal controls — evaluated internal controls and identified risks, providing recommendations to improve financial reporting accuracy',
      'Stakeholder engagement — collaborated with clients and senior auditors to gather financial data, assess audit findings, and deliver key insights to support informed decision-making',
    ],
  },
] as const

export const leadership = [
  {
    id: 'yopro',
    organization: 'Air New Zealand',
    role: 'Yo Pro Network Lead',
    description:
      'Leading the planning and execution of events for the Yo Pro Network, creating opportunities for networking, professional growth, and community-building among early-career employees.',
  },
  {
    id: 'ey-social',
    organization: 'Ernst & Young',
    role: 'Year Group Lead & Social Committee',
    description:
      'Ensuring voices of colleagues are heard at monthly meetings held with other year group leaders and Partners. Organising social functions for the assurance service line (monthly and quarterly).',
  },
] as const
