export interface Profile {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  cvUrl: string;
}

export interface HeroStat {
  value: string;
  label: string;
  suffix?: string;
}

export interface ExpertiseTag {
  label: string;
}

export interface ValueCard {
  title: string;
  description: string;
  icon: string;
}

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo' | 'case-study' | 'report';
}

export interface Project {
  id: string;
  title: string;
  role: string;
  timeframe: string;
  summary: string;
  businessProblem: string;
  solutionApproach: string;
  technologies: string[];
  impact: string;
  keyContributions: string[];
  links: ProjectLink[];
  featured: boolean;
  category: string;
  imageAlt?: string;
  icon?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  leadership?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  coursework: string[];
  highlights?: string[];
  thesis?: string;
}

export interface Certification {
  id?: string;
  title: string;
  provider: string;
  issuer?: string;
  date: string;
  issueDate?: string;
  credentialUrl?: string;
  category: string;
  tagColor?: string;
  icon?: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export const profile: Profile = {
  name: 'Bui Cao Nguyen',
  initials: 'CN',
  title: 'AI ENGINEER',
  tagline:
    'AI Engineer specializing in Enterprise Multi-Agent Systems, Advanced RAG Pipelines & High-Performance Data Platforms.',
  summary:
    'Experienced in designing autonomous state machines with self-correcting PEV loops (Plan → Execute → Verify) on LangGraph, 3-tier hybrid RAG architectures (HyDE + pgvector + TEI Cross-Encoder), and enterprise ELT pipelines on Snowflake and AWS for predictive time-series forecasting.',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'buicaonguyen115@gmail.com',
  phone: '0944015003',
  linkedin: 'https://www.linkedin.com/in/bui-cao-nguyen11',
  github: 'https://github.com/BCNguyen115/Multi-Agents',
  cvUrl: '/Bui_Cao_Nguyen_Resume_Yale.docx',
};

export const heroStats: HeroStat[] = [
  { value: '~0%', label: 'Hallucination Rate' },
  { value: '+45%', label: 'RAG Retrieval Boost' },
  { value: '102+', label: 'Automated Tests' },
  { value: '7', label: 'Docker Microservices' },
];

export const expertiseTags: ExpertiseTag[] = [
  { label: 'Multi-Agent Systems' },
  { label: 'LangGraph StateGraph' },
  { label: 'PEV Self-Correction' },
  { label: 'HyDE & Hybrid RAG' },
  { label: 'TEI Cross-Encoder' },
  { label: 'DuckDB WASM' },
  { label: 'Model Context Protocol (MCP)' },
  { label: 'Snowflake ELT' },
  { label: 'Prophet & Bayesian STS' },
  { label: 'FastAPI & Docker' },
  { label: 'Next.js 14' },
  { label: 'PostgreSQL (pgvector)' },
  { label: 'Langfuse V2' },
  { label: 'Power BI' },
];

export const aboutSummary = {
  paragraphs: [
    'I am an AI Engineer specializing in Enterprise Multi-Agent Systems, Advanced RAG Pipelines, and scalable Data Engineering. My work centers on building reliable autonomous agent state machines, hybrid retrieval systems, and end-to-end data products that translate complex business requirements into high-impact production solutions.',
    'I architect self-correcting agent loops (Plan → Execute → Verify) on LangGraph StateGraph that eliminate hallucinations via automated strict schema audits, integrated with client-side SQL analytics using DuckDB WASM and AST-level query guardrails.',
    'With hands-on experience deploying enterprise ELT pipelines on Snowflake, Bayesian Structural Time Series revenue forecasting, and OCR/LLM document platforms, I combine deep AI engineering with resilient data architecture and disciplined software delivery.',
  ],
};

export const dataDrivenVision = {
  title: 'Architecting Autonomous & Verifiable Enterprise AI',
  paragraphs: [
    'Modern enterprise AI demands more than simple LLM wrappers — it requires deterministic state machine orchestration, rigorous self-correction loops, and verifiable accuracy across every tool execution and data transformation.',
    'By integrating 3-tier hybrid RAG (HyDE + pgvector HNSW + TEI Cross-Encoder reranking), AST-level SQL validation with sqlglot, and client-side DuckDB WASM compute, I design AI architectures that eliminate hallucinations and reduce backend infrastructure overhead.',
    'From enterprise revenue forecasting on Snowflake and AWS to multi-agent analytics swarms, my engineering is guided by measurable ROI, low latency, and zero-compromise security.',
  ],
};

export const valueCards: ValueCard[] = [
  {
    title: 'Multi-Agent Swarm Orchestration',
    description:
      'Architecting LangGraph StateGraph state machines with autonomous PEV loops (Plan → Execute → Verify) and multi-agent coordination.',
    icon: 'BrainCircuit',
  },
  {
    title: 'Advanced Hybrid RAG Architecture',
    description:
      'Designing 3-tier RAG with HyDE hypothetical documents, pgvector 1536-dim HNSW hybrid search, and TEI Cross-Encoder reranking.',
    icon: 'Layers',
  },
  {
    title: 'Enterprise Data Engineering',
    description:
      'Building robust ELT pipelines on Snowflake with stored procedures, Apache Iceberg tables, Data Sharing, and AWS cloud data services.',
    icon: 'Database',
  },
  {
    title: 'Time Series & ML Forecasting',
    description:
      'Training revenue forecasting models with Facebook Prophet and Bayesian STS using rolling-origin cross-validation (MAPE -18%).',
    icon: 'TrendingUp',
  },
  {
    title: 'Secure Tool Execution & MCP',
    description:
      'Implementing Model Context Protocol (MCP) tool standards with sqlglot AST-level validators blocking DML and SQL injections.',
    icon: 'Workflow',
  },
  {
    title: 'Full-Stack & Observability',
    description:
      'Containerizing microservices with Docker Compose, Next.js 14, FastAPI, and instrumenting end-to-end tracing with Langfuse V2.',
    icon: 'Cpu',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'SQL' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'C++' },
      { name: 'C#' },
    ],
  },
  {
    category: 'Databases & Warehouses',
    icon: 'Database',
    skills: [
      { name: 'Snowflake' },
      { name: 'PostgreSQL (pgvector)' },
      { name: 'MySQL' },
      { name: 'Microsoft SQL Server' },
      { name: 'MongoDB' },
      { name: 'Apache Iceberg' },
    ],
  },
  {
    category: 'Data Engineering & Cloud',
    icon: 'Workflow',
    skills: [
      { name: 'Apache Airflow' },
      { name: 'Apache Spark' },
      { name: 'Docker' },
      { name: 'ETL/ELT Pipelines' },
      { name: 'Dataiku' },
    ],
  },
  {
    category: 'BI & AI / Analytics',
    icon: 'BrainCircuit',
    skills: [
      { name: 'Power BI (DAX, Data Modeling)' },
      { name: 'Tableau' },
      { name: 'Time Series Forecasting (Prophet, STS)' },
      { name: 'LangGraph' },
      { name: 'DuckDB WASM' },
      { name: 'Streamlit' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Scikit-Learn' },
    ],
  },
  {
    category: 'Languages',
    icon: 'Users',
    skills: [
      { name: 'Vietnamese (Native)' },
      { name: 'English (Upper-Intermediate)' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'enterprise-revenue-forecasting-snowflake',
    title: 'Enterprise Revenue Forecasting & Snowflake ELT Pipeline',
    role: 'Data Engineer Intern',
    timeframe: 'Apr 2026 – Aug 2026',
    summary:
      'Enterprise ELT pipelines on Snowflake and end-to-end revenue forecasting models combining Facebook Prophet and Bayesian Structural Time Series (STS) to model trend changes, holiday effects, and seasonality.',
    businessProblem:
      'Financial teams required scalable ELT processing for high-volume financial datasets, historical data sharing across departments, and precise time-series revenue forecasting without manual intervention.',
    solutionApproach:
      'Architected optimized Snowflake stored procedures, dynamic views, and automated validation scripts. Integrated Snowflake Data Sharing and Apache Iceberg tables, and built a Prophet & Bayesian STS pipeline with rolling-origin cross-validation.',
    technologies: [
      'Snowflake',
      'Facebook Prophet',
      'Bayesian STS',
      'Python',
      'SQL',
      'Power BI',
      'Apache Iceberg',
    ],
    impact:
      'Reduced forecasting error (MAPE by ~18%), optimized high-volume financial data processing, and automated direct inference outputs into Snowflake data marts for Power BI executive reporting.',
    keyContributions: [
      'Architected and maintained enterprise ELT pipelines on Snowflake, writing optimized stored procedures, dynamic views, and automated validation scripts to process high-volume financial datasets.',
      'Integrated Snowflake Data Sharing and Apache Iceberg table formats, executing historical data loads and establishing secure data access layers for cross-functional analytics.',
      'Designed and trained an end-to-end enterprise revenue forecasting pipeline leveraging Facebook Prophet and Bayesian Structural Time Series (STS) to model trend changes, holiday effects, and seasonality.',
      'Performed rolling-origin time-series cross-validation and hyperparameter tuning, reducing forecasting error (MAPE by ~18%) and automating inference output back into Snowflake data marts for Power BI executive reporting.',
    ],
    links: [],
    featured: false,
    category: 'Data Engineering',
    icon: 'TrendingUp',
  },
  {
    id: 'concentrix-document-etl-platform',
    title: 'Intelligent Document Ingestion & PO ETL Platform',
    role: 'Full-Stack Developer / Data Engineer Intern',
    timeframe: 'Oct 2025 – Dec 2025',
    summary:
      'An automated document ETL platform integrating OCR and LLMs to extract, parse, and structure vendor purchase orders and serial numbers into MySQL with FastAPI and React.js.',
    businessProblem:
      'Manual processing of high-volume unstructured vendor purchase orders and serial numbers caused severe operational bottlenecks, transcription errors, and slow turnaround times.',
    solutionApproach:
      'Engineered an automated extraction pipeline combining OCR with LLM entity parsing, high-throughput RESTful microservices with FastAPI, a responsive React.js UI, and Docker containerization.',
    technologies: [
      'Python',
      'FastAPI',
      'React.js',
      'Docker',
      'MySQL',
      'OCR',
      'LLMs',
      'REST APIs',
    ],
    impact:
      'Drastically eliminated manual data entry time, streamlined unstructured document ingestion workflows, and ensured high data consistency across high-volume vendor records.',
    keyContributions: [
      'Engineered an automated document ETL platform integrating OCR and LLMs to extract, parse, and structure vendor purchase orders and serial numbers into MySQL.',
      'Built a responsive UI using React.js and developed high-throughput RESTful microservices with FastAPI, containerizing the entire service via Docker.',
      'Streamlined unstructured document ingestion workflows, drastically eliminating manual data entry time and ensuring high data consistency across high-volume vendor records.',
    ],
    links: [],
    featured: false,
    category: 'AI / LLM',
    icon: 'Workflow',
  },
  {
    id: 'intelligent-loan-appraisal',
    title: 'Intelligent Loan Appraisal & Credit Risk Scoring',
    role: 'AI & Data Developer',
    timeframe: 'Q3 2023 – Q4 2023',
    summary:
      'An end-to-end machine learning system that automates credit risk assessment and customer segmentation for financial institutions, replacing manual appraisal workflows with real-time decision support.',
    businessProblem:
      'Financial institutions faced slow, inconsistent, and manually intensive loan appraisal processes that led to delayed decisions and increased risk exposure across customer segments.',
    solutionApproach:
      'Built a full ML pipeline including data preparation, customer segmentation via K-Means clustering, predictive credit risk models using CatBoost and XGBoost, and an interactive Streamlit appraisal interface.',
    technologies: [
      'Python',
      'Pandas',
      'Scikit-Learn',
      'XGBoost',
      'CatBoost',
      'K-Means',
      'Streamlit',
    ],
    impact:
      'Delivered an automated appraisal experience capable of real-time risk scoring, reducing manual assessment dependency and providing consistent, data-backed loan recommendations.',
    keyContributions: [
      'Cleaned and prepared financial data, handling missing values, outliers, and inconsistent formats across multiple data sources.',
      'Engineered features to improve signal quality and model predictive accuracy for credit risk outcomes.',
      'Applied K-Means clustering to segment customers into behaviorally distinct groups for targeted risk profiling.',
      'Built and evaluated CatBoost and XGBoost classification models, comparing accuracy, precision, recall, and AUC-ROC.',
      'Deployed an interactive Streamlit application for real-time loan appraisal by loan officers.',
    ],
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/BCNguyen115/Multi-Agents',
        type: 'github',
      },
    ],
    featured: false,
    category: 'Machine Learning',
    icon: 'BrainCircuit',
  },
  {
    id: 'ai-computer-vision-safety',
    title: 'AI-Powered Computer Vision for Industrial Safety',
    role: 'AI Engineer',
    timeframe: 'Q2 2024 – Q4 2024',
    summary:
      'Real-time smoke and fire detection system using YOLOv8 deployed on edge devices (NVIDIA Jetson) for industrial safety monitoring, achieving 99% accuracy with sub-second response times.',
    businessProblem:
      'Industrial facilities relied on delayed human observation and basic sensor networks that often missed early-stage hazards, leading to safety risks and potential damage.',
    solutionApproach:
      'Trained and fine-tuned a YOLOv8 object detection model on custom annotated datasets of 15,000+ smoke and fire scenarios. Deployed on NVIDIA Jetson edge devices with TensorRT optimization and an IoT alert system.',
    technologies: [
      'Python',
      'YOLOv8',
      'Computer Vision',
      'Edge AI',
      'IoT',
      'NVIDIA Jetson',
      'OpenCV',
      'TensorRT',
    ],
    impact:
      'Achieved 99% detection accuracy for smoke and fire events with real-time alerting, reducing average hazard detection time to under 2 seconds.',
    keyContributions: [
      'Curated and annotated custom datasets with 15,000+ images of smoke and fire scenarios across industrial settings.',
      'Trained and fine-tuned YOLOv8 models achieving 99% detection accuracy on validation sets.',
      'Optimized model inference with TensorRT for sub-second detection on NVIDIA Jetson edge devices.',
      'Built an IoT alert pipeline that triggers real-time notifications to safety teams via SMS and monitoring dashboards.',
    ],
    links: [],
    featured: false,
    category: 'Computer Vision',
    icon: 'Eye',
  },
  {
    id: 'customer-analytics-dashboard',
    title: 'Customer Analytics & Retention Intelligence',
    role: 'Data Analyst / BI Developer',
    timeframe: 'Q2 2023 – Q3 2023',
    summary:
      'An executive-facing Power BI dashboard providing real-time visibility into customer acquisition, cohort retention, churn risk, and lifetime value across key business segments.',
    businessProblem:
      'Leadership teams lacked a consolidated, real-time view of customer health metrics, leading to reactive decision-making and missed early warning signals for churn risk.',
    solutionApproach:
      'Designed and built a layered Power BI solution with semantic data modeling, custom DAX measures (cohort retention, LTV, churn probability), and automated Power Query ETL pipelines.',
    technologies: ['Power BI', 'DAX', 'Power Query', 'SQL', 'Excel', 'Data Modeling'],
    impact:
      'Provided leadership with a single source of truth for customer performance, enabling faster identification of retention risks and data-backed campaign targeting.',
    keyContributions: [
      'Designed the semantic data model and established relationships across CRM, transactional, and marketing data sources.',
      'Built custom DAX measures for retention rate, churn probability, and cohort-based LTV analysis.',
      'Created automated Power Query pipelines to refresh and cleanse data without manual intervention.',
      'Designed an executive dashboard layout with KPI cards, trend lines, and segment drill-throughs.',
    ],
    links: [],
    featured: false,
    category: 'Business Intelligence',
    icon: 'BarChart3',
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'Data Engineer Intern',
    company: 'FPT Software',
    period: 'Apr 2026 – Aug 2026',
    location: 'Quy Nhon, Vietnam',
    type: 'Internship',
    summary:
      'Architected and maintained enterprise ELT pipelines on Snowflake and designed end-to-end revenue forecasting models combining Facebook Prophet and Bayesian Structural Time Series (STS).',
    achievements: [
      'Architected and maintained enterprise ELT pipelines on Snowflake, writing optimized stored procedures, dynamic views, and automated validation scripts to process high-volume financial datasets.',
      'Integrated Snowflake Data Sharing and Apache Iceberg table formats, executing historical data loads and establishing secure data access layers for cross-functional analytics.',
      'Designed and trained an end-to-end enterprise revenue forecasting pipeline leveraging Facebook Prophet and Bayesian Structural Time Series (STS) to model trend changes, holiday effects, and seasonality.',
      'Performed rolling-origin time-series cross-validation and hyperparameter tuning, reducing forecasting error (MAPE by ~18%) and automating inference output back into Snowflake data marts for Power BI executive reporting.',
    ],
    technologies: [
      'Snowflake',
      'Facebook Prophet',
      'Bayesian Structural Time Series (STS)',
      'Python',
      'SQL',
      'Power BI',
      'Apache Iceberg',
    ],
    leadership:
      'Partnered with cross-functional analytics squads to standardize enterprise ELT workflows and automated data governance on Snowflake.',
  },
  {
    title: 'Full-Stack Developer / Data Engineer Intern',
    company: 'Concentrix Viet Nam',
    period: 'Oct 2025 – Dec 2025',
    location: 'Ho Chi Minh City, Vietnam',
    type: 'Internship',
    summary:
      'Engineered an automated document ETL platform integrating OCR and LLMs for unstructured document parsing, paired with high-throughput FastAPI REST services and React.js frontend.',
    achievements: [
      'Engineered an automated document ETL platform integrating OCR and LLMs to extract, parse, and structure vendor purchase orders and serial numbers into MySQL.',
      'Built a responsive UI using React.js and developed high-throughput RESTful microservices with FastAPI, containerizing the entire service via Docker.',
      'Streamlined unstructured document ingestion workflows, drastically eliminating manual data entry time and ensuring high data consistency across high-volume vendor records.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React.js',
      'Docker',
      'MySQL',
      'OCR',
      'LLMs',
      'REST APIs',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science (Hons) in Computing',
    institution: 'University of Greenwich',
    period: '2021 – 2025',
    location: 'Ho Chi Minh City, Vietnam',
    coursework: [
      'Database Systems',
      'Algorithms & Data Structures',
      'Software Engineering',
      'Enterprise Web Development',
      'Statistics & Probability',
      'Machine Learning',
    ],
    highlights: [
      'Classification: Upper Second Class Honours (2:1)',
      'Graduation: Sep 2025',
      'Core focus on enterprise software architecture, database management systems, and applied AI workflows',
    ],
  },
];

export const certifications: Certification[] = [
  // --- MindX Technology School ---
  {
    id: 'mindx-bi-analyst',
    title: 'Data Analytics Track — Business Intelligence Analyst',
    provider: 'MindX Technology School',
    issuer: 'MindX Technology School',
    date: '2024',
    issueDate: '2024',
    category: 'Business Intelligence',
    tagColor: 'amber',
    icon: 'Award',
  },
  {
    id: 'mindx-data-analyst',
    title: 'Data Analytics Track — Data Analyst',
    provider: 'MindX Technology School',
    issuer: 'MindX Technology School',
    date: '2023',
    issueDate: '2023',
    category: 'Data Analytics',
    tagColor: 'cyan',
    icon: 'Award',
  },

  // --- Dataiku Academy ---
  {
    id: 'dataiku-genai',
    title: 'Generative AI Practitioner',
    provider: 'Dataiku Academy',
    issuer: 'Dataiku Academy',
    date: '2024',
    issueDate: '2024',
    category: 'Generative AI',
    tagColor: 'purple',
    icon: 'Award',
  },
  {
    id: 'dataiku-mlops',
    title: 'MLOps & Machine Learning Practitioner',
    provider: 'Dataiku Academy',
    issuer: 'Dataiku Academy',
    date: '2024',
    issueDate: '2024',
    category: 'MLOps / ML',
    tagColor: 'emerald',
    icon: 'Award',
  },
  {
    id: 'dataiku-developer',
    title: 'Certified Developer',
    provider: 'Dataiku Academy',
    issuer: 'Dataiku Academy',
    date: '2024',
    issueDate: '2024',
    category: 'Data Engineering',
    tagColor: 'blue',
    icon: 'Award',
  },
  {
    id: 'dataiku-designer',
    title: 'Core & Advanced Designer',
    provider: 'Dataiku Academy',
    issuer: 'Dataiku Academy',
    date: '2024',
    issueDate: '2024',
    category: 'Data Platform',
    tagColor: 'indigo',
    icon: 'Award',
  },
];

export const certificates = certifications;

export const highlights: HighlightItem[] = [
  {
    title: 'Enterprise Multi-Agent Systems',
    description:
      'Architected autonomous state machines on LangGraph with PEV self-correcting loops, zero-hallucination schema auditing, and DuckDB WASM in-browser execution.',
    icon: 'BrainCircuit',
    metric: 'LangGraph, PEV Loop, ~0% Hallucination',
  },
  {
    title: '3-Tier Hybrid RAG & Circuit Breaker',
    description:
      'Built advanced retrieval combining HyDE, pgvector HNSW hybrid search, and TEI Cross-Encoder reranking (+45% accuracy) with an 800ms circuit breaker fallback.',
    icon: 'Layers',
    metric: 'HyDE, pgvector, TEI Reranker',
  },
  {
    title: 'Enterprise Data Engineering on Snowflake',
    description:
      'Architected enterprise ELT pipelines on Snowflake with stored procedures, Apache Iceberg tables, Data Sharing, and AWS cloud data services.',
    icon: 'Database',
    metric: 'Snowflake, AWS Glue/S3, Iceberg',
  },
  {
    title: 'Revenue Time Series Forecasting',
    description:
      'Trained enterprise revenue forecasting pipelines with Facebook Prophet and Bayesian STS using rolling-origin cross-validation, reducing MAPE error by ~18%.',
    icon: 'TrendingUp',
    metric: 'Prophet, Bayesian STS, MAPE -18%',
  },
  {
    title: 'Model Context Protocol (MCP) & AST Security',
    description:
      'Implemented MCP tool execution secured by sqlglot AST-level validators that block DML injections and automatically inject limit guardrails.',
    icon: 'Workflow',
    metric: 'MCP Tools, sqlglot AST Validator',
  },
  {
    title: 'Full-Stack Microservices & Observability',
    description:
      'Containerized 7 microservices via Docker Compose, Next.js 14, FastAPI, and instrumented end-to-end telemetry and tracing via self-hosted Langfuse V2.',
    icon: 'Cpu',
    metric: '7 Docker Services, Langfuse V2, 102 Tests',
  },
];

