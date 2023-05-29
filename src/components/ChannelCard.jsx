import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = ({channelDetail, marginTop }) => {

  console.log("ChannelCard : ", channelDetail);

  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      width: {md: '320px', xs: '356px'},
      height: '326px',
      margin: 'auto',
      marginTop,
    }}>

    

   <Link to={`/channel/${channelDetail?.id?.channelId}`}>
    <CardContent sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', textAlign:'center', color:'#fff'}}>
      <CardMedia 
      image={channelDetail?.snippet?.thumbnails?.default?.url || demoProfilePicture}
      alt={channelDetail?.snippet?.title}
      sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: '1px solid #e3e3e3' }}
      />
    </CardContent>
    <Typography variant='h6' color='#fff' >
      {channelDetail?.snippet?.title}
      <CheckCircle sx={{ fontSize: 14, color: 'gray', ml:'5px' }} />
      </Typography>

      <Typography>
        { parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString() + ' subscribers'}
      </Typography>

      

   </Link>   
  </Box>
  )
}

export default ChannelCard