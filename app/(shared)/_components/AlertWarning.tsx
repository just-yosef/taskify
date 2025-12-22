import React, { ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Terminal } from "lucide-react";
interface AlertMessageProps {
  title?: string;
  description: string;
  icon?: ReactNode;
}
export function AlertWarning({
  description,
  title = "Warning Message",
  icon = <AlertCircle />,
}: AlertMessageProps) {
  return (
    <Alert variant="destructive">
      {icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
