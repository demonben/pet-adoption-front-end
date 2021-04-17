import axios from "axios";

const BaseUrl = 'http://0.0.0.0:5000';

export async function getAnimals() {
    const response = await axios.get(`${BaseUrl}/animals`);
    return response.data.animals;
}

export async function createAnimal(nameAnimal) {
    const response = await axios.post(`${BaseUrl}/animals`, { nameAnimal })
return response.data.animal
}