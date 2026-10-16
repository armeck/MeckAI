export type TradeCategory = 
  | 'Agriculture' 
  | 'Automotive' 
  | 'Retail & Service' 
  | 'Outdoors & Heavy' 
  | 'Pitmaster & Culinary';

export interface PromptComparison {
  userPrompt: string;
  coastalAiResponse: string;
  meckAiResponse: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  tradeCategory: TradeCategory;
  companyOrAffiliation: string;
  location: string;
  useCase: string;
  quote: string;
  metric: string;
  imageUrl: string;
  hardwareTier: string;
  comparison?: PromptComparison;
}
