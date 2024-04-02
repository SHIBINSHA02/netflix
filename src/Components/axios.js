import axios from "axios";
import {apiBaseUrl} from './constants/constants'

const instance = axios.create({
    baseURL: apiBaseUrl, // Base URL for all requests
    
  });
  
  export default instance;

