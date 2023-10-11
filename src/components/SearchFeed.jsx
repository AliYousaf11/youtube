import {useState, useEffect} from 'react'
import {Box,Typography} from "@mui/material"
import Videos from './Videos'
import fetchapi from "../utils/fetchapi"
import { useParams } from 'react-router-dom';

function SearchFeed() {
  const [videos,setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(()=>{
    fetchapi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{setVideos(data.items)})
  },[searchTerm]);

  return (
    <Box p={2} sx={{overflow:"auto", height:"90vh", flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
          Search for Result: <span style={{color:"#F31503"}}>{searchTerm}</span>video's
        </Typography>

        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed;