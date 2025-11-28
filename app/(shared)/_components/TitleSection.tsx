interface Props {
  text: string;
  translationKey?: string;
}
const TitleSection = ({ text, translationKey }: Props) => {
  return (
    <h4 className="text-xl font-[rubicMedium] text-[var(--color-teal)] bg-teal- soft mb-3 mt-2 p-4 leading-[1]">
      {text}
    </h4>
  );
};

export default TitleSection;
