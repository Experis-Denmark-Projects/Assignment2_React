import { Fragment } from "react";
import TranslationIcon from "../translation-icon/translation-icon.component";
import { TranslationIconContainer } from "../translation-icon/translation-icon.styles";
import { TranslationBoxContainer } from "./translation-box.styles";

/* This component represents the box containing all the translations.
 * The component also receives a props object which expects a nested array of the icons to display.
 * In the icons array each element is an array of words where each element in the words array is an object
 * which has a unique id and a key property. 
 * The key property is passed to components and html elements as key attribut ensuring each element has a unique key (html id). 
*/
const TranslationBox = ({props}) => {
    // Destructuring the icons property from the props object & initializing the idCounter.
    const { icons } = props;
    let idCounter = 0;
    return(
        <TranslationBoxContainer>
                {
                    /* This component only renders when icons contains at least 1 element. */
                    icons.length > 0 && 
                    icons.map(word => 
                        <TranslationIconContainer key={`${idCounter}`}>
                            {
                                /* image is the object containing the id and key property. 
                                 * This will only render the div element if it is not undefined and not equal to null.
                                 * Then the TranslationIcon component recives the key property and the image object 
                                 * and will determine how to render the icons.
                                */
                                word.map((image) => 
                                    image !== undefined && image !== null &&
                                    <div key={`${idCounter}`}>
                                        <TranslationIcon key={`${image.id}${idCounter++}`} image={image}/>
                                        <p>{image.id}</p>
                                    </div>
                                )
                            }
                        </TranslationIconContainer>   
                    )
                }
                
            </TranslationBoxContainer>
    );
}

export default TranslationBox;