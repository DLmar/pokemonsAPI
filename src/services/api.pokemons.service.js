import {axiosInstance, axiosInstanceClear} from "./api.service";

export const getPokemons = (limit,offset) => {
   return  axiosInstance.get('/pokemon',{
      params:{limit:limit ,offset}
   });
}

export const getPokemon = (url) =>{
   return axiosInstanceClear.get(url)
}
