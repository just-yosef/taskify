interface Props {
    text: string
}
const TitleSection = ({ text }: Props) => {
    return (
        <h4 className="!pb-0 text-xl font-[rubicMedium] text-blue my-4 leading-[1]">
            {text}
        </h4>
    )
}

export default TitleSection
