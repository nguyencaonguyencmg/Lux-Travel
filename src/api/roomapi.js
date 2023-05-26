import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchRoom = () => axios.get(`${URL}/room`);