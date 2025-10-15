export type ProjectInput = {
  title: string;
  description: string;
  budgetMin?: number;
  budgetMax?: number;
  duration?: string;
  category?: string;
  clientId: string;
  clientName: string;
  _id?:string
};