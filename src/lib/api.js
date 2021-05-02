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
    console.log(nameAnimal, type)
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
    console.log(response.data)
    return response.data;
}
export async function searchAnimalByType(type, token) {
    const response = await axios.post(
        `${BaseUrl}/animals`,
        "dsadas",
        getAuthConfig(token))
    console.log("all good")
    return response.data.animal
}
// USERS
export async function createNewProfile(obj) {
    const response = await axios.post(`${BaseUrl}/users/user`, obj).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.error(err.response.data);
    })
}

export async function getUsers(token) {
    const response = await axios.get(`${BaseUrl}/users`, getAuthConfig(token));
    console.log(response.data)
    return response.data.users;
}

export async function logIn(email, password) {
    const response = await axios.post(`${BaseUrl}/users/login`, { email, password })
    return response.data
}