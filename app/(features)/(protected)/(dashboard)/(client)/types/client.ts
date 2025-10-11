export interface Offer {
  id: number;
  freelancerName: string;
  projectTitle: string;
  price: number;
  duration: number;
}

export interface OfferItemProps {
  offer: Offer;
  onAccept?: (id: number) => void;
  onReject?: (id: number) => void;
  showActions?: boolean;
}

export interface Message {
  id: string;
  senderName: string;
  content: string;
  time: string;
  isRead?: boolean;
}

export interface MessageItemProps {
  message: Message;
  onReply?: (id: string) => void;
}
export interface Project {
  id: number;
  title: string;
  status: string;
  variant?: string;
  author: string;
  remaining: string;
}

export interface ProjectItemProps {
  project: Project;
  onView?: (id: number) => void;
  showButton?: boolean;
}
