import TranslationIcon from "../translation-icon/translation-icon.component";
import { TranslationIconContainer } from "../translation-icon/translation-icon.styles";
import { TranslationBoxContainer } from "./translation-box.styles";

const TranslationBox = ({props}) => {
    const { icons } = props;
    return(
        <div>
            <TranslationBoxContainer>
                {
                    <TranslationIconContainer>
                        {
                            icons.map((image) => 
                                image && <TranslationIcon key={image.key} image={image}/>
                            )
                        }
                    </TranslationIconContainer>
                }
            </TranslationBoxContainer>
        </div>
    );
}

export default TranslationBox;