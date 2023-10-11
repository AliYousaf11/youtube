import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import VideoDetails from "./components/VideoDetails"
import ChannelDetails from "./components/ChannelDetails"
import SearchFeed from "./components/SearchFeed"


function App()  {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed/>}></Route>
          <Route path="/video/:id" element={<VideoDetails/>}></Route>
          <Route path="/channel/:id" element={<ChannelDetails/>}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed/>}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
