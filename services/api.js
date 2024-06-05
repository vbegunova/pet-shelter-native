import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000/api/animals/';
axios.defaults.baseURL = 'https://backend-shelter.onrender.com/api/animals/';
const CATS_END_POINT = 'cats/';

export const fetchCats = async (limit, page = 1) => {
  const response = await axios.get(
    `${CATS_END_POINT}?page=${page}&limit=${limit}`
  );
  return response.data;
};

export const fetchOnePet = async petId => {
  const response = await axios.get(`${CATS_END_POINT}${petId}`);
  return response.data;
};
