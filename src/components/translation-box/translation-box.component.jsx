import { Fragment } from "react";
import TranslationIcon from "../translation-icon/translation-icon.component";
import { TranslationIconContainer } from "../translation-icon/translation-icon.styles";
import { TranslationBoxContainer } from "./translation-box.styles";

const TranslationBox = ({props}) => {
    const { icons } = props;
    let idCounter = 0;

    return(
        <Fragment>
            <TranslationBoxContainer>
                {
                    
                    icons.length > 0 && 
                    icons.map(word => 
                        <TranslationIconContainer key={`${idCounter}`}>
                            {
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
        </Fragment>
            
    
    );
}

export default TranslationBox;

/* <TranslationIconContainer>
                        {
                            icons.map((image) => 
                                image && <TranslationIcon key={image.key} image={image}/>
                            )
                            
                        }
                    </TranslationIconContainer> */