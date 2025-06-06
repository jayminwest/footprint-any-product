/**
 * Shared component interface definitions
 */

export interface StreamingTextProps {
  url?: string; // This is the WebSocket URL, not the product URL
  isStreaming: boolean;
  productUrl?: string; // Changed from brand, category, description
  onStreamingComplete?: () => void;
}

export interface ProductInputData {
  url: string;
}

export interface PageAnalysisData {
  brand?: string;
  category?: string;
  shortDescription?: string;
  longDescription?: string;
  productImageUrls?: string[];
}

export interface ProductInputProps {
  onSubmit: (input: ProductInputData) => void;
  isLoading?: boolean;
}

export interface AgentMessage {
  type: string;
  content: string;
  // Tool call specific fields
  toolName?: string;
  toolArgs?: Record<string, any>;
  toolId?: string;
  // Observation specific fields
  toolCallId?: string;
}

export interface AgentData {
  messages: Array<AgentMessage>;
  summary: string;
  carbon: number | null;
  isCompleted: boolean;
}

export interface FootprintAnalysisProps {
  url?: string; // This is the WebSocket URL, not the product URL
  isStreaming: boolean;
  productUrl?: string; // Changed from brand, category, description
  onStreamingComplete?: () => void;
}

export interface AgentSectionProps {
  title?: string;
  icon?: string;
  agentKey: string;
  summary?: string;
  content: React.ReactNode;
  isCompleted?: boolean;
  carbon?: number;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
}
