import { Fragment, useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { TranslationIconContainer } from "../../components/translation-icon/translation-icon.styles";
import TranslationIcon  from "../../components/translation-icon/translation-icon.component"

const Profile = () => {

    const { user } = useContext(UserContext);
    if(!user){
        return;
    }   

    let icons = [];
    const translations = [...user.translations];

    for(let i = 0; i < translations.length; i++){
        if(i === 10) break;
        let temp =  [];
        for(let k =0; k < translations[i].length; k++){
            temp.push({id: translations[i].charAt(k)});
        }   
        icons.push(temp);
    }   

    let idCounter = 0;
    return(
       <Fragment>
        {
            icons.length > 0 &&
            icons.map(word => 
                <Fragment key={`${idCounter}`}>
                    {
                        <TranslationIconContainer>
                            {
                                word.map((image) => 
                                    image !== undefined && image !== null && 
                                    <div key={idCounter}>
                                        <TranslationIcon key={`${image.id}${idCounter++}`} image={image}/>
                                        <p>{image.id}</p>
                                    </div>
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