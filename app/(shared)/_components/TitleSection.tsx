interface Props {
  text: string;
}
const TitleSection = ({ text }: Props) => {
  return (
    <h4 className="text-xl font-[rubicMedium] text-blue bg-sky-soft mb-3 mt-2 p-4 leading-[1]">
      ✨ {text} ✨
    </h4>
  );
};

export default TitleSection;
