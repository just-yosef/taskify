import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  message?: string;
  description?: string;
}

const ErrorComponent = ({
  message = "Some Error Happent",
  description,
}: ErrorMessageProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-red-200 bg-rose px-4 py-3 sm:max-w-[300px] text-white min-h-20  my-3">
      <div className="flex gap-2  font-semibold">
        <AlertCircle size={18} />
        <span className="text-sm font-medium">{message}</span>
      </div>
      {description ? <p className="text-sm"> {description} </p> : null}
    </div>
  );
};

export default ErrorComponent;
