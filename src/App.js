import { Box } from "@mui/material";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFead } from './components'

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
      <Navbar />
      <Routes>
        <Route  path="/" exact element={<Feed />}/>
        <Route  path="/video/:id" element={<VideoDetail />}/>
        <Route  path="/channel/:id" element={<ChannelDetail />}/>
        <Route  path="/search/:searchTerm" element={<SearchFead />}/>
      </Routes>
    </Box>
  </BrowserRouter>
); 


export default App;
