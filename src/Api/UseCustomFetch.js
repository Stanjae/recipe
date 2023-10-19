import { useQuery } from 'react-query'
import axios from 'axios'

const client = axios.create({
    baseURL: "https://api.edamam.com/api/recipes/v2?type=public&q=salad&app_id=1f3e4c6d&app_key=195506e87cd8e910d825517b5c6360ca" 
  });

export const CustomFetch =(query)=>{
    const { isLoading, error, data, status } = useQuery(['repoData',query], async()=>{
        const open = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=1f3e4c6d&app_key=195506e87cd8e910d825517b5c6360ca`);
        return open.data
    })
    return({ isLoading, error, data, status })
}

export const CustomFetchDetails =(id)=>{
    const { isLoading, error, data, status } = useQuery('repoDatadetails', async()=>{
        const open = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=1f3e4c6d&app_key=195506e87cd8e910d825517b5c6360ca`);
        return open.data
    })
    return({ isLoading, error, data, status })
}