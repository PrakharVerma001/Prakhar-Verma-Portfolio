// Prefix public/ asset paths with the configured base URL so they resolve
// correctly both locally (base "/") and on GitHub Pages (base "/repo-name/").
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const profile = {
  name: 'Prakhar Verma',
  role: 'DevOps Engineer',
  tagline:
    'I build and automate the infrastructure behind reliable software — CI/CD pipelines, container orchestration, and observability at scale.',
  location: 'Hyderabad, India',
  // TODO: replace with real values once provided
  email: 'prakharv.official@gmail.com',
  phone: '',
  socials: {
    github: '',
    linkedin: '',
  },
  resumeUrl: '', // link to a downloadable PDF resume, e.g. '/resume.pdf'
  photo: asset('/profile.png'),
}

export type ExperienceEntry = {
  role: string
  company: string
  companyUrl?: string
  logo?: string
  current?: boolean
  duration: string
  dateRange: string
  location: string
  highlights: string[]
  stack: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer, Staff A',
    company: 'Blackbaud',
    logo: asset('/logo-blackbaud.png'),
    current: true,
    duration: 'Present',
    dateRange: 'Feb 2026 — Present',
    location: 'Hyderabad, India',
    highlights: [
      'Designed and implemented enterprise automation and patch orchestration solutions using Azure Durable Functions, Azure DevOps, Azure Automation, PowerShell, and REST APIs.',
      'Developed ServiceNow RFC automation, payload generation, approval workflows, and end-to-end deployment tracking for infrastructure operations.',
      'Managed Windows Server patching, compliance validation, and software deployments using Tanium, CMDB, and enterprise automation frameworks.',
      'Investigated and remediated security vulnerabilities through CrowdStrike Falcon, including Python upgrades, endpoint recovery, and compliance enforcement.',
      'Built resilient workflows with retry logic, exception handling, logging, monitoring, notifications, and hybrid orchestration architectures.',
      'Created technical documentation, runbooks, SOPs, architecture diagrams, and leveraged AI-assisted development to improve operational efficiency and solution delivery.',
    ],
    stack: [
      'Azure Durable Functions',
      'Azure DevOps',
      'Azure Automation',
      'PowerShell',
      'ServiceNow',
      'Tanium',
      'CrowdStrike Falcon',
      'REST APIs',
      'JSON',
      'Windows Server',
      'CMDB',
      'Git',
      'Patch Management',
      'Infrastructure Automation',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'Tudip Technologies Pvt Ltd',
    logo: asset('/logo-tudip.png'),
    duration: '1 yr 4 mos',
    dateRange: 'Sep 2024 — Jan 2026',
    location: 'Pune, India',
    highlights: [
      'Developed and optimized CI/CD pipelines using Azure DevOps and Jenkins, reducing deployment time by 40%.',
      'Designed and deployed a high-availability OTT platform using Docker Swarm, managing container orchestration and microservices.',
      'Improved video streaming efficiency by integrating MinIO as an intermediary storage solution, reducing latency by 35%.',
      'Ensured smooth operations by implementing real-time monitoring using Prometheus, Grafana, and Fluentd.',
    ],
    stack: [
      'AWS',
      'Kubernetes',
      'Docker Swarm',
      'Azure DevOps',
      'Jenkins',
      'Kong',
      'Nginx',
      'Prometheus',
      'Grafana',
      'Redis Cluster',
      'Portainer',
      'Fluentd',
      'MinIO',
    ],
  },
  {
    role: 'Cloud Architect',
    company: 'Good Space AI',
    logo: asset('/logo-goodspace.webp'),
    duration: '1 yr 2 mos',
    dateRange: 'Aug 2020 — Oct 2021',
    location: 'Noida, India',
    highlights: [
      'Designed and deployed AWS infrastructure from scratch for an AI-driven interview platform.',
      'Provisioned and configured EC2 instances, load balancers, security groups, and IAM roles to ensure scalability and security.',
      'Optimized database migration and performance using Amazon RDS and DynamoDB, reducing query latency by 30%.',
      'Implemented CI/CD pipelines using AWS CodePipeline, CodeBuild, and CodeDeploy, ensuring automated and error-free deployments.',
      'Automated cloud infrastructure using Terraform and AWS CloudFormation, reducing deployment time by 50%.',
      'Monitored system health and performance using Prometheus and Grafana, ensuring 99.9% uptime.',
    ],
    stack: [
      'AWS',
      'EC2',
      'RDS',
      'DynamoDB',
      'IAM',
      'Terraform',
      'CloudFormation',
      'CodePipeline',
      'CodeBuild',
      'CodeDeploy',
      'Prometheus',
      'Grafana',
    ],
  },
]

export type EducationEntry = {
  school: string
  degree: string
  years: string
}

export const education: EducationEntry[] = [
  {
    school: 'National Institute of Technology, Warangal',
    degree: "Master's in Computer Science",
    years: '2021 — 2024',
  },
  {
    school: 'Gorakhpur University (DDUGU)',
    degree: "Bachelor's in Computer Science",
    years: '2017 — 2020',
  },
]

export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
    skills: ['AWS', 'EC2', 'RDS', 'DynamoDB', 'IAM', 'S3', 'Azure DevOps', 'Azure Automation'],
  },
  {
    title: 'CI/CD & Automation',
    skills: [
      'Jenkins',
      'Azure Pipelines',
      'Azure Durable Functions',
      'AWS CodePipeline',
      'CodeBuild',
      'CodeDeploy',
      'Terraform',
      'CloudFormation',
      'PowerShell',
      'REST APIs',
    ],
  },
  {
    title: 'Containers & Orchestration',
    skills: ['Docker', 'Docker Swarm', 'Kubernetes', 'Portainer', 'Kong', 'Nginx'],
  },
  {
    title: 'Monitoring & Observability',
    skills: ['Prometheus', 'Grafana', 'Fluentd'],
  },
  {
    title: 'Data & Caching',
    skills: ['Redis Cluster', 'MinIO'],
  },
  {
    title: 'ITSM & Security',
    skills: ['ServiceNow', 'Tanium', 'CrowdStrike Falcon', 'CMDB', 'Windows Server', 'Patch Management'],
  },
]

export const impactStats = [
  { value: '40%', label: 'Faster deployments via CI/CD optimization' },
  { value: '35%', label: 'Lower streaming latency with MinIO' },
  { value: '50%', label: 'Faster infra rollout via Terraform automation' },
  { value: '99.9%', label: 'Uptime maintained in production' },
]
