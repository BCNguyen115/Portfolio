import { enterpriseMultiAgentCaseStudy } from '@/lib/case-study-data';
import { CaseStudyPageClient } from './CaseStudyPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Multi-Agent System — Case Study | Bui Cao Nguyen',
  description:
    'Deep-dive case study: Autonomous PEV Swarm & Hybrid RAG system with 4-layer architecture, zero hallucination rate, and 102+ test cases. LangGraph, pgvector, DuckDB WASM.',
  openGraph: {
    title: 'Enterprise Multi-Agent System — Case Study',
    description:
      'Production-grade Multi-Agent system with PEV self-correction loop, 3-tier RAG pipeline, and autonomous data analyst swarm.',
  },
};

export default function CaseStudyPage() {
  return <CaseStudyPageClient data={enterpriseMultiAgentCaseStudy} />;
}
