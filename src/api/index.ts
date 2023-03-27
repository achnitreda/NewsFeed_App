import axios from 'axios';
import {API_KEY} from '@env';
const BASE_URL = 'https://newsapi.org/v2/';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {'X-Api-key': API_KEY},
});
