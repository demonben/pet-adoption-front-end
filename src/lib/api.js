import axios from "axios";

const BaseUrl = 'http://0.0.0.0:5000';

function getAuthConfig(token) {
    return {
        headers: {
            Authorization: 'Bearer ' + token,
        }
    }
}
// ANIMALS 
export async function getAnimals(token) {
    const response = await axios.get(`${BaseUrl}/animals`, getAuthConfig(token));
    return response.data.animals;
}
export async function createAnimal(newAnimal, token) {
    const response = await axios.post(
        `${BaseUrl}/animals`,
        newAnimal,
        getAuthConfig(token))
    return response.data.animal
}
export async function changeAnimal(nameAnimal, type, id, token) {
    const response = await axios.put(`${BaseUrl}/animals/${id}`,
        { nameAnimal, type },
        getAuthConfig(token)
    )
    return response.data.animal
}
export async function deleteAnimal(id, token) {
    const response = await axios.delete(`${BaseUrl}/animals/${id}`, getAuthConfig(token))
    return response.data;

}
export async function getAnimalById(id, token) {
    const response = await axios.get(`${BaseUrl}/animals/${id}`, getAuthConfig(token));
    return response.data;
}
export async function searchAnimalByType(type, token) {
    const response = await axios.get(
        `${BaseUrl}/animals/type/${type}`,
        getAuthConfig(token))
    return response.data.animals
}
// didn't finish advance search
export async function searchAnimalAdvance(name, token){
    const response = await axios.get(
        `${BaseUrl}/animals/name/${name}`,
        getAuthConfig(token))
    return response.data.animals
}

export async function uploadPicture(id, token, formData) {
    const response = await axios.put(`${BaseUrl}/animals/${id}/picture_url`, formData, getAuthConfig(token))
    return response.data
}
// USERS
export async function createNewProfile(obj) {
    const response = await axios.post(`${BaseUrl}/users/user`, obj).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.error(err.response.data);
    })
}
export async function getUserById(id, token) {
    const response = await axios.get(`${BaseUrl}/users/${id}`, getAuthConfig(token));
    return response.data;
}
export async function getUsers(token) {
    const response = await axios.get(`${BaseUrl}/users`, getAuthConfig(token));
    return response.data.users;
}
export async function changeUser(userNewInfo, id, token) {
    const response = await axios.put(`${BaseUrl}/users/${id}`,
        userNewInfo,
        getAuthConfig(token)
    )
    return response.data.user
}

export async function logIn(email, password) {
    const response = await axios.post(`${BaseUrl}/users/login`, { email, password })
    return response.data
}
// owns pets

export async function takePet(id, token, status, ownerId) {
    console.log(ownerId)
    const response = await axios.post(`${BaseUrl}/animals/take_pet/${id}/${status}/${ownerId}`,
        'dsfd',
        getAuthConfig(token)
    )
    return response
}

export async function getOwnAnimals(token, userId) {
    const response = await axios.get(`${BaseUrl}/animals/my_pets/${userId}`, getAuthConfig(token))
    return response.data
}

export async function returnPet(petId) {
    const response = await axios.put(`${BaseUrl}/animals/return/${petId}`,
    )

    return response.data
}
