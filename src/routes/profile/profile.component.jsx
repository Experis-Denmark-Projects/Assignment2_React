import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import TranslationBox from "../../components/translation-box/translation-box.component";
import { putUser } from "../../utils/web-api.util";
import { useNavigate } from "react-router-dom";
import './profile.css';

const Profile = () => {
    /* Destructuring user & setUser from UserContext.*/
    const { user, setUser } = useContext(UserContext);
    // Initializing navigate variable.
    const navigate = useNavigate();

    // If the user is null this component should just return.
    if(!user){
        return;
    }   

    /* The icons array is a nested array where each element represents a single word.
    *  A word is an array of obejcts where each object represents a single letter.
    *  This word object has two key value pairs one being an id and another being a key.
    *  The id is simply the character of a letter and the key is a unique value 
    *  combining the letter and and increasing idCounter. 
    *  This way the key can be used by elements to ensure they do not have the same key (html id). 
    */
    let icons = [];
    let idCounter = 0;
    // Spreading the translations array from the user object.
    const translations = [...user.translations];

    /* This nested for loop iterates through the first 10 words in the translations array
     * and appends an array of objects with id & key value pairs, to the icons array.
     * Thus, the icons array ends up containing arrays of objects. 
    */
    for(let i = 0; i < translations.length; i++){
        if(i === 10) break;
        let temp =  [];
        for(let k =0; k < translations[i].length; k++){
            temp.push({id: translations[i].charAt(k), key: `${translations[i].charAt(k)}${idCounter++}`},);
        }   
        icons.push(temp);
    }   

    /* This function is invoked when clicking the Clear Translations button.
     * The function clears the stored translations by putting an empty array of translations for the signed in user
     * Then the user context is set to the updated user object retreived from the web-api which has no translations.
    */
    const onClearTranslations = () =>{
        putUser(user.id, [], (updatedUser) => {
            setUser(updatedUser);
        });
    } 

    /* This onLogout function puts an empty array of translations for the user signed in
     * Then it sets the user context to null and navigates back to the landing page.
    */
    const onLogout = () => {
        putUser(user.id, [], (updatedUser) => {
            setUser(null);
            navigate(`/`);
        });
    }

    return(
       <Fragment>
            {/* When the icons array has more than 1 element it should render the TranslationBox component 
                and pass the icons array as an argument. Additionally, the Clear Translations button is also
                only rendered when the icons array has 1 or more elements.
             */}
            {(icons.length > 0 &&<TranslationBox props={{icons: icons}}/>)}
            <div className="buttonDiv">
                <button className="backBtn" onClick={() => navigate(`/translation/${user.id}`)}>Back</button> 
                <div className="dangerBtns">
                    {icons.length> 0 && <button className="clearBtn" onClick={onClearTranslations}>Clear Translations</button>}
                    <button className="logOutBtn" onClick={onLogout}>Logout</button>
                </div>
            </div>
       </Fragment>
    );
};

export default Profile;