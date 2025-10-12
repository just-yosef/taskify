import { Button } from "@/components/ui/button";
import { EmptyStateResourceProps } from "../../(shared)/types";


const EmptyStateResource: React.FC<EmptyStateResourceProps> = ({
  icon = "📂",
  title,
  description,
  actionText = "Create New",
  onAction,
  showAction = true,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <span className="text-3xl">{icon}</span>
      </div>

      <h3 className="text-lg font-semibold text-gray-700 mb-1">{title}</h3>

      {description && (
        <p className="text-sm text-gray-500 mb-4 max-w-sm">{description}</p>
      )}

      {showAction && (
        <Button
          variant="peach"
          size="sm"
          onClick={onAction}
          className="transition-all"
        >
          {actionText} {title}
        </Button>
      )}
    </div>
  );
};

export default EmptyStateResource;
