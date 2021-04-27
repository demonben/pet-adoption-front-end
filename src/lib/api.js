import axios from "axios";

const BaseUrl = 'http://0.0.0.0:5000';


function getAuthConfig(token) {
    return {
        headers: {
            Authorization: 'Bearer ' + token,
        }
    }
}

export async function getAnimals(token) {
    const response = await axios.get(`${BaseUrl}/animals`, getAuthConfig(token));
    return response.data.animals;
}
export async function createAnimal(newAnimal, token) {
    const response = await axios.post(
        `${BaseUrl}/animals`,
        { newAnimal },
        getAuthConfig(token))
    return response.data.animal
}

export async function createNewProfile(obj) {
    const response = await axios.post(`${BaseUrl}/users/user`, obj).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.error(err.response.data);
    })
}
export async function logIn(email, password) {
    const response = await axios.post(`${BaseUrl}/users/login`, { email, password })
    return response.data
}





// export async function getAnimals() {
//     const response = await axios.get(`${BaseUrl}/animals`);
//     return response.data.animals;
// }

// export async function createAnimal(nameAnimal) {
//     const response = await axios.post(`${BaseUrl}/animals`, { nameAnimal })
// return response.data.animal
// }