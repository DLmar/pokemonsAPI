import axios from "axios";

export const axiosInstance =  axios.create({
   baseURL: 'https://pokeapi.co/api/v2',
   params: {
      limit : '12'
   }
});

export const axiosInstanceClear = axios.create({
   baseURL:''
})


