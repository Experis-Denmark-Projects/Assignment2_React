/* This component represents each hand icon being displayed based on the a letter in the translation text.
*  The component receives an image object and uses its id proprty to determine which image to load. 
*/
const TranslationIcon = ({image}) => {
    return (
            <img src={require(`../../assets/individual_signs/${image.id}.png`)} alt={`${image.id}`}></img>
    );
};

export default TranslationIcon;