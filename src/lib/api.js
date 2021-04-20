import axios from "axios";

const BaseUrl = 'http://0.0.0.0:5000';

// export async function getAnimals() {
//     const response = await axios.get(`${BaseUrl}/animals`);
//     return response.data.animals;
// }

// export async function createAnimal(nameAnimal) {
//     const response = await axios.post(`${BaseUrl}/animals`, { nameAnimal })
// return response.data.animal
// }

export async function getAnimals() {
    const response = await axios.get(`${BaseUrl}/animals/product`);
    return response.data.animals;
}
export async function createAnimal(nameAnimal) {
    console.log(nameAnimal)
    const response = await axios.post(`${BaseUrl}/animals/product`, { nameAnimal })
    return response.data.animal
}

export async function createNewProfile(userSignup) {
    console.log(userSignup)
    const response = await axios.post(`${BaseUrl}/animals/user`, { userSignup })
    console.log(userSignup)
    return response.data.userSignup
}