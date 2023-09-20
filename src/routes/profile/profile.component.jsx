import { Fragment, useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { TranslationIconContainer } from "../../components/translation-icon/translation-icon.styles";
import TranslationIcon  from "../../components/translation-icon/translation-icon.component"
import TranslationBox from "../../components/translation-box/translation-box.component";
import { putUser, deleteUserById } from "../../utils/web-api.util";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    if(!user){
        return;
    }   

    let icons = [];
    const translations = [...user.translations];

    let idCounter = 0;
    for(let i = 0; i < translations.length; i++){
        if(i === 10) break;
        let temp =  [];
        for(let k =0; k < translations[i].length; k++){
            temp.push({id: translations[i].charAt(k), key: `${translations[i].charAt(k)}${idCounter++}`},);
        }   
        icons.push(temp);
    }   

    const onClearTranslations = () =>{
        putUser(user.id, [], (updatedUser) => {
            setUser(updatedUser);
        });
    } 

    const onLogout = () => {
        putUser(user.id, [], (updatedUser) => {
            setUser(null);
            navigate(`/`);
        });
    }

    return(
       <Fragment>
    
            {(icons.length > 0 &&
            <TranslationBox props={{icons: icons}}/>)}
            <hr class="solid"></hr>
            {icons.length> 0 && <button onClick={onClearTranslations}>Clear Translations</button>}
            <button onClick={() => navigate(`/translation/${user.id}`)}>Back</button>
            <button onClick={onLogout   }>Logout</button>
       </Fragment>
    );
};

export default Profile;