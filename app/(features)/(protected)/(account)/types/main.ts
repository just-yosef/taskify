export interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  images: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  date: string;
  clientName: string;
  rating: number;
}
