const apiUrl = 'https://bright-scrawny-glue.glitch.me/';
const apiKey = '1LWB0bJhVjsuppBbRUKuzZyH0ZogZwbCRO2J1zIJZCekoEppNpMKClEEwRb2OABW';

export const getUserById = (userId, callback) => {
    fetch(`${apiUrl}/translations/${userId}`)
    .then(response => response.json())
    .then(result => {
        callback(result);
    })
    .catch(error => console.log(`error:${error}`));
}

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
