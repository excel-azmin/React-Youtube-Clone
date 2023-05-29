import React from "react";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

// video : {id : videoId},

const VideoCard = ({ video: { snippet, id: videoId } }) => {
  console.log("VideoID", videoId.videoId, "snippet : ", snippet);

  return (
    <Card sx={{width: {md: '320px', sm:'358px', xs: '100%'}, boxShadow:'none', borderRadius: 0}}>
      <Link to={videoId.videoId ? `/video/${videoId.videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.default?.url}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px', md:'320px'} , height: 180 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "105px" }}>
        <Link to={videoId ? `/video/${videoId.videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color='#fff'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId  ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml:'5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
