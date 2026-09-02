export interface CaseStudyBadge {
  label: string;
  category: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  description: string;
}

export interface ArchitectureLayer {
  id: string;
  layerNumber: string;
  name: string;
  color: 'blue' | 'purple' | 'emerald' | 'amber';
  tech: string[];
  highlights: string;
}

export interface KeyInnovation {
  title: string;
  description: string;
  icon: string;
}

export interface EngineeringChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface DockerService {
  name: string;
  tech: string;
  port: string;
  role: string;
}

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  role: string;
  timeframe?: string;
  status: string;
  badges: CaseStudyBadge[];
  metrics: CaseStudyMetric[];
  architectureLayers: ArchitectureLayer[];
  keyInnovations: KeyInnovation[];
  engineeringChallenges: EngineeringChallenge[];
  dockerServices: DockerService[];
}

export const enterpriseMultiAgentCaseStudy: CaseStudyData = {
  id: 'enterprise-multi-agent-system',
  title: 'Enterprise Multi-Agent System',
  subtitle: 'Autonomous PEV Swarm & Hybrid RAG',
  tagline:
    'Architected and deployed an enterprise-grade autonomous Multi-Agent system with a 4-layer architecture, featuring a self-correcting PEV Loop (Plan → Execute → Verify) on LangGraph StateGraph and an advanced 3-tier RAG pipeline (HyDE + Hybrid Search + TEI Cross-Encoder Reranker), reducing hallucination rates to ~0%.',
  role: 'AI Engineer & Full-Stack Engineer',
  timeframe: 'Jun 2026 – Aug 2026',
  status: 'Production Ready — MVP Enterprise (7 Docker Services, 102+ Test Cases)',
  badges: [
    { label: 'LangGraph StateGraph', category: 'AI' },
    { label: 'HyDE + Hybrid RAG', category: 'RAG' },
    { label: 'DuckDB WASM', category: 'Client-Compute' },
    { label: 'TEI Cross-Encoder', category: 'NLP' },
    { label: 'Model Context Protocol (MCP)', category: 'Tools' },
    { label: 'Langfuse V2 Observability', category: 'Tracing' },
    { label: '7 Docker Services', category: 'DevOps' },
  ],
  metrics: [
    {
      label: 'Hallucination Rate',
      value: '~0%',
      description:
        'Strict Schema Audit Verifier cross-checking 100% of DashboardSpec columns against actual DataFrame',
    },
    {
      label: 'Retrieval Accuracy',
      value: '+45%',
      description:
        'HyDE + Hybrid Search (Vector 0.7 + FTS 0.3 on pgvector HNSW) + TEI Cross-Encoder (bge-reranker-base)',
    },
    {
      label: 'Client-side Compute',
      value: '100%',
      description:
        'DuckDB WASM in-browser SQL — zero backend load for analytical queries',
    },
    {
      label: 'Tool Call Accuracy',
      value: '100%',
      description:
        'Offline Eval Pipeline (LLM-as-a-Judge) across 10 golden test cases',
    },
    {
      label: 'Composite Quality',
      value: '0.956',
      description: 'Exceeded Quality Gate >= 0.85 → RELEASE APPROVED',
    },
    {
      label: 'Reranker Latency',
      value: '≤ 800ms',
      description:
        'Circuit Breaker pattern: 3-strike failure counter, 60s cooldown, instant fallback',
    },
    {
      label: 'Test Coverage',
      value: '102 Tests',
      description:
        '53 enterprise + 49 hardening unit tests (Pytest) + 5 E2E specs (Playwright)',
    },
    {
      label: 'Docker Services',
      value: '7 Services',
      description:
        'Frontend, Backend, PostgreSQL pgvector, Redis, Langfuse Web, Worker, TEI Reranker',
    },
  ],
  architectureLayers: [
    {
      id: 'layer-1',
      layerNumber: 'Layer 1',
      name: 'Presentation & Client Compute',
      color: 'blue',
      tech: [
        'Next.js 14.2.3',
        'React 18',
        'TypeScript',
        'TailwindCSS 3.4',
        'Apache ECharts 6',
        'Tremor 3.18',
        'AG-Grid 31',
        'DuckDB WASM 1.28',
      ],
      highlights:
        'Next.js App Router, real-time PEV Stepper streaming via SSE, 12-column Executive Dashboard, and DuckDB WASM executing SQL directly in the browser.',
    },
    {
      id: 'layer-2',
      layerNumber: 'Layer 2',
      name: 'Harness, Memory & Control Core',
      color: 'purple',
      tech: [
        'LangGraph StateGraph',
        'FastAPI 0.111+',
        'Redis 5.0+ (Sliding Window)',
        'Mem0ai Long-term Memory',
        'Pydantic v2',
      ],
      highlights:
        'Autonomous PEV Loop (Plan → Execute → Verify, max_retries=2), Redis sliding window for 5-turn chat history, and Mem0ai long-term context extraction.',
    },
    {
      id: 'layer-3',
      layerNumber: 'Layer 3',
      name: 'Specialized Agent Swarm',
      color: 'emerald',
      tech: [
        'LiteLLM 1.40+',
        'OpenRouter (gpt-4o-mini)',
        'sqlglot 25+',
        'Tavily API',
        'Crawl4AI 0.4+',
        'Pandas 2.0',
      ],
      highlights:
        'Data Analyst Swarm with 5 Sub-Agents (EDA, Layout, Charts, Story, Audit), RAG Agent, Web Search Agent, and Database Agent via MCP with AST SQL Validator.',
    },
    {
      id: 'layer-4',
      layerNumber: 'Layer 4',
      name: 'Governance, Security & Monitoring',
      color: 'amber',
      tech: [
        'Langfuse V2 (Self-hosted)',
        'HuggingFace TEI cpu-1.2',
        'PostgreSQL 16 + pgvector',
        'Docker Compose',
      ],
      highlights:
        'LiteLLM Router, TEI Cross-Encoder Reranker, End-to-End Tracing (Token/Latency/Cost), HNSW Vector Index (1536-dim), Prompt Injection Scanner & PII Redaction.',
    },
  ],
  keyInnovations: [
    {
      title: 'PEV Self-Correction Loop',
      description:
        'LangGraph state machine with automated Plan → Execute → Verify cycle, max 2 retries, real-time SSE streaming, and Zero-Hallucination Schema Audit.',
      icon: 'RefreshCw',
    },
    {
      title: '3-Tier Advanced RAG Pipeline',
      description:
        'HyDE hypothetical document generation → Hybrid Search (Vector 0.7 + FTS 0.3 on pgvector HNSW) → TEI Cross-Encoder (BAAI/bge-reranker-base) filtering Top 5.',
      icon: 'Brain',
    },
    {
      title: 'Autonomous Data Analyst Swarm',
      description:
        '5 collaborating sub-agents: EDA Stats → Layout Architect (12-col) → Chart Spec Builder → Storyteller (Trend - Root Cause - Recommendation) → Quality Audit.',
      icon: 'BarChart3',
    },
    {
      title: 'In-Browser SQL via DuckDB WASM',
      description:
        'Executes CSV analytics directly in client browser via DuckDB WASM v1.28 — offloading 100% of analytical query compute from the backend.',
      icon: 'Database',
    },
    {
      title: 'Model Context Protocol (MCP) & AST Security',
      description:
        'Standardized tool integration via MCPClient with 5-layer sqlglot AST validator: blocks DML, prevents multi-statement execution, and auto-injects LIMIT 1000.',
      icon: 'ShieldAlert',
    },
    {
      title: 'Resilient Circuit Breaker Pattern',
      description:
        '3-strike failure counter and 800ms hard timeout for TEI Reranker with automatic fallback to Cosine Similarity on service disruption.',
      icon: 'Zap',
    },
  ],
  engineeringChallenges: [
    {
      title: 'Reranker Latency & Circuit Breaker',
      problem:
        '3-tier RAG pipeline introduced 2-3s latency and risk of system bottlenecks if the TEI Reranker container encountered failures.',
      solution:
        'Implemented stateful Circuit Breaker in reranker_client.py: 800ms hard timeout, auto-trip after 3 consecutive failures, 60s cooldown, and instant fallback to pgvector vector similarity.',
    },
    {
      title: 'Zero SQL Injection via AST Parsing',
      problem:
        'LLMs can generate harmful statements (DROP, TRUNCATE, UPDATE) or hide DML inside subqueries when exposed to prompt injection attacks.',
      solution:
        'Built a 5-layer AST validator using sqlglot: parses syntax trees, rejects 8 forbidden statement types, traverses nested subqueries, disallows semicolons, and enforces LIMIT 1000.',
    },
    {
      title: 'Eliminating Infinite Loops in LangGraph',
      problem:
        'If Verifier repeatedly rejects outputs and Executor retries indefinitely, the system risks token exhaustion and request timeouts.',
      solution:
        'Enforced hard limit max_retries=2 in AgentState; Verifier attaches structured feedback to state for targeted fixes with graceful degradation if threshold is reached.',
    },
  ],
  dockerServices: [
    {
      name: 'agent_frontend',
      tech: 'Next.js 14',
      port: '3001',
      role: 'Presentation Web UI',
    },
    {
      name: 'agent_backend',
      tech: 'FastAPI + LangGraph',
      port: '8000',
      role: 'Gateway & PEV Orchestrator',
    },
    {
      name: 'agent_postgres',
      tech: 'PostgreSQL 16 + pgvector',
      port: '5432',
      role: 'Vector Store (1536-dim HNSW)',
    },
    {
      name: 'agent_redis',
      tech: 'Redis Alpine',
      port: '6379',
      role: 'Sliding Window Short-term Memory',
    },
    {
      name: 'agent_langfuse_web',
      tech: 'Langfuse V2',
      port: '3005',
      role: 'Observability Web Dashboard',
    },
    {
      name: 'agent_langfuse_worker',
      tech: 'Langfuse Worker V2',
      port: 'N/A',
      role: 'Async Telemetry Queue',
    },
    {
      name: 'agent_reranker',
      tech: 'HuggingFace TEI',
      port: '8080',
      role: 'BAAI/bge-reranker-base Service',
    },
  ],
};
