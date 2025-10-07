export interface ApplicationCardData {
  icon: 'Users' | 'Dna' | 'FileText' | 'ScanFace';
  title: string;
  description: string;
  details: string;
  image: string;
}

export interface LinkData {
    name: string;
    url: string;
    type: 'paper' | 'video' | 'course';
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface ComparisonData {
  algorithm: 'PCA' | 't-SNE' | 'UMAP';
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  points: { x: number; y: number; cluster: number }[];
}

export interface LimitationData {
  title: string;
  description: string;
  type: 'limitation' | 'tip';
}