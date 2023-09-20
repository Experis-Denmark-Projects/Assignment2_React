/* This file contains the methods used to interact with the web-api. */

/* api url & api key. The api-key is passed a header parameter.*/
const apiUrl = 'https://bright-scrawny-glue.glitch.me/';
const apiKey = '1LWB0bJhVjsuppBbRUKuzZyH0ZogZwbCRO2J1zIJZCekoEppNpMKClEEwRb2OABW';

/* This method gets a specific user based on the userId passed as an argument.
*  The callback parameter is invoked once result has been retrieved from the web-api 
*  and takes the result as an argument. 
*  Thus, the callback parameter can determine what should be done with the result.
*/ 
export const getUserById = (userId, callback) => {
    fetch(`${apiUrl}/translations/${userId}`)
    .then(response => response.json())
    .then(result => {
        callback(result);
    })
    .catch(error => {
        console.log(`The following error occured: ${error}`)
    });
}


/* This method posts the username to the web-api in order to store it in a database.
*  The callback parameter is invoked once the new user has been retreived from the web-api.
*  Thus, the callback method determines what should be done with the new user.
*/ 
export const postUserByName = (username, callback) => {
    fetch(`${apiUrl}/translations`, {
        method: 'POST',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            translations: []
        })
    })
    .then(response => {
        if(!response.ok) {
            
            throw new Error('Could not create user')
        }
        
        return response.json();
    })
    .then(newUser => {
        // Invoke the callback with the newUser object passed as an argument.
        callback(newUser);
    })
    .catch(error => {
        // Log error to the console.
        console.log(`The following error occured: ${error}`)
    })
}

/*  */
export const putUser = (userId, translations, callback) => {
    fetch(`${apiUrl}/translations/${userId}`,{
        method: 'PATCH',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            translations: translations
        })
    })
    .then(response => {
        if(!response.ok) {
            
            throw new Error('Could not create user')
        }
        
        return response.json();
    })
    .then(updatedUser => {
        callback(updatedUser);
    })
    .catch(error => {
        console.log(`The following error occured: ${error}`)
    });
} 

export const deleteUserById = (userId) => {
    fetch(`${apiUrl}/translations/${userId}`,{
        method: 'PATCH',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if(!response.ok) {
            
            throw new Error('Could not create user')
        }
        
        return response.json();
    })
    .then(updatedUser => {
        
    })
    .catch(error => {
        console.log(`The following error occured: ${error}`)
    });
}