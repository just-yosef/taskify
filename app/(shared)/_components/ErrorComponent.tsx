import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  message?: string;
}

const ErrorComponent = ({
  message = "Some Error Happent",
}: ErrorMessageProps) => {
  return (
    <div className="flex gap-2 rounded-lg border border-red-200 bg-rose px-4 py-3 text-white min-h-20 font-semibold">
      <AlertCircle size={18} />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

export default ErrorComponent;
