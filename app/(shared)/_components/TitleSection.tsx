import { Separator } from "@/components/ui/separator";

interface Props {
  text: string;
  translationKey?: string;
  hasSeparator?: boolean;
}
const TitleSection = ({ text, translationKey, hasSeparator }: Props) => {
  return (
    <>
      <h4 className="text-xl font-[rubicMedium] text-[var(--color-teal)] bg-teal- soft mb-3 mt-2 p-4 leading-[1]">
        {text}
      </h4>
      {hasSeparator && <Separator />}
    </>
  );
};

export default TitleSection;
