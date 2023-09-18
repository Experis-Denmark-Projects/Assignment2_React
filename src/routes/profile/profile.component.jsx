import { Fragment, useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { TranslationIconContainer } from "../../components/translation-icon/translation-icon.styles";
import Translation from "../translation/translation.component";

const Profile = () => {

    const { user } = useContext(UserContext);
    if(!user){
        return;
    }   

    let icons = [];
    const translations = [...user.translations];
    
    for(let i = 0; i < translations.length; i++){
        icons.push({id: translations[i]});
    }

    let idCounter = 0;

    return(
       <Fragment>
        {
            translations.length > 0 &&
            translations.map(translation => 
                <Fragment>
                    {
                        <TranslationIconContainer>
                            {
                                icons.map((image) => 
                                    image && <Translation key={`${image.id}${idCounter++}`} image={image}/>
                                )
                            }
                        </TranslationIconContainer>
                    }
                </Fragment>
            )
        }
       </Fragment>
    );
};

export default Profile;