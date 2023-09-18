const TranslationIcon = ({image}) => {
    return (
        <div>
            <img src={require(`../../assets/individual_signs/${image.id}.png`)} alt={`${image.id}`}></img>
        </div>
    );
};

export default TranslationIcon;