import {useState, useEffect} from 'react'
import {Box , Stack, Typography} from "@mui/material"
import Sidebar from './Sidebar'
import Videos from './Videos'
import fetchapi from "../utils/fetchapi"


function Feed() {
  const [category,setCategory] = useState("New");
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    fetchapi(`search?part=snippet&q=${category}`)
    .then((res)=>{setVideos(res.items)})
    .catch((error)=>{ console.log(`${error}`)})
  },[category])

  return (
    <Stack sx={{flexDirection:{sx: 'column', md: 'row'} }}>
      <Box sx={{ height: {sx:'auto', md:'93vh'}, borderRight:'1px solid #3d3d3d', px: {sx:0, md:2 }}}>

        <Sidebar category = {category} setCategory = {setCategory}/>

        <Typography className='copyright' variant="body2" sx={{mt:'1.5', color:"#fff"}}>
          CopyRight 2023 Ali Media
        </Typography>
      </Box>

      <Box p={2} sx={{overflow:"auto", height:"90vh", flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>{category}
          <span style={{color:"#F31503"}}>video's</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed