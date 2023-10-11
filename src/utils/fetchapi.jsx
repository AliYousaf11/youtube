import axios from "axios"

const BaseUrl = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BaseUrl,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': "59243b0ce3msh6853ee11700e1d7p199582jsn08607ae7ef87",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

const fetchapi = async (url) => {
    const {data} = await axios.get(`${BaseUrl}/${url}`,options)
    
    return data;
}

export default fetchapi