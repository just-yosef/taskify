export interface Offer {
  id: number;
  freelancerName: string;
  projectTitle: string;
  price: number;
  duration: number;
  specialization: string;
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
