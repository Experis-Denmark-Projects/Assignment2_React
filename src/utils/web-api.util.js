const apiUrl = 'https://bright-scrawny-glue.glitch.me/';
const apiKey = '1LWB0bJhVjsuppBbRUKuzZyH0ZogZwbCRO2J1zIJZCekoEppNpMKClEEwRb2OABW';

export const getUser = (userId, callback) => {
    fetch(`${apiUrl}/translations/${userId}`)
    .then(response => response.json())
    .then(result => {
        callback(result);
    })
    .catch(error => console.log(`error:${error}`));
}

