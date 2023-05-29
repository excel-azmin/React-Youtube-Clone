import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFead = () => {
  
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=
    ${searchTerm}`).then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search Result for : <span style={{ color: "#F31503" }}> {searchTerm} </span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFead;