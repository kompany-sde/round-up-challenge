import axios from 'axios';
import { BANKAPI } from 'config';

// An axios instance used by the server to connect to the starling api
// all requests to the starling api utilise this instance
const bankClient = axios.create({
  baseURL: BANKAPI.BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default bankClient;
