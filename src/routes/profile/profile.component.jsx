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

    //let idCounter = 0;
    for(let i = 0; i < translations.length; i++){
        if(i === 10) break;
        let temp =  [];
        for(let k =0; k < translations[i].length; k++){
            temp.push({id: translations[i].charAt(k)});
            //console.log(`i: ${temp[3].id}`);
        }   
        icons.push(temp);

        //console.log(`icons: ${icons}`);
    }   

    for(let i = 0; i < icons.length; i++){
        console.log(icons[i]);
    }
    
    /*
    [
        [{id: 'a'}, {id: 'b'}, {id: 'c'}], // word 1
        [{id: 'a'}, {id: 'b'}, {id: 'c'}], // word 2
        [{id: 'e'}, {id: 'f'}, {id: 'g'}], // word 3
    ]
    
    */
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
                                    <div>
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