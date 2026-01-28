export enum ToolType {
  PLAGIARISM = 'PLAGIARISM',
  AI_DETECTOR = 'AI_DETECTOR',
  BACKLINK = 'BACKLINK',
  META_GEN = 'META_GEN'
}

export interface ToolResult {
  success: boolean;
  data?: any;
  error?: string;
  sources?: Array<{
    title: string;
    url: string;
  }>;
}

export interface PlagiarismResponse {
  score: number; // 0 to 100 (100 being fully plagiarized)
  analysis: string;
  matches: Array<{
    text: string;
    source: string;
  }>;
}

export interface AiDetectorResponse {
  aiScore: number; // 0 to 100 (100 being AI)
  verdict: 'Human' | 'AI' | 'Mixed';
  reasoning: string;
  highlightedSections: string[];
}

export interface BacklinkOpportunity {
  siteName: string;
  url: string;
  relevance: string;
  authority: 'High' | 'Medium' | 'Low';
}

export interface MetaTagResponse {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
}
