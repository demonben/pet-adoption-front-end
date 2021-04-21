import axios from "axios";

const BaseUrl = 'http://0.0.0.0:5000';

export async function getAnimals() {
    const response = await axios.get(`${BaseUrl}/animals`);
    return response.data.animals;
}
export async function createAnimal(newAnimal) {
    const response = await axios.post(`${BaseUrl}/animals`, {newAnimal})
    return response.data.animal
}

export async function createNewProfile(obj) {
    const response = await axios.post(`${BaseUrl}/animals/user`, obj).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.error(err.response.data);
    })
}





// export async function getAnimals() {
//     const response = await axios.get(`${BaseUrl}/animals`);
//     return response.data.animals;
// }

// export async function createAnimal(nameAnimal) {
//     const response = await axios.post(`${BaseUrl}/animals`, { nameAnimal })
// return response.data.animal
// }