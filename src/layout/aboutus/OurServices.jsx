import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import {Person2 , HomeMaxOutlined , PaidRounded} from "@mui/icons-material"

const OurServices = () => {
  return (
    <Box sx={{ marginTop: '2rem' }}>
      <Typography variant="h5" sx={{ marginBottom: '1rem', color: 'rgb(4, 145, 152)' }}>خدمات ما</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' ,transition:".3s ease","&:hover":{transform:"translateY(-10px)"}}}>
            <Person2 color="#ff9800" />
            <Typography variant="h6" sx={{ marginTop: '1rem', marginBottom: '0.5rem' }}>اورژانس</Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>اورژانس پزشکی ۲۴ ساعته</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center',transition:".3s ease","&:hover":{transform:"translateY(-10px)"} }}>
            <HomeMaxOutlined />
            <Typography variant="h6" sx={{ marginTop: '1rem', marginBottom: '0.5rem' }}>مشاوره پزشکی</Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>ارائه مشاوره در زمینه‌های مختلف پزشکی</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center',transition:".3s ease","&:hover":{transform:"translateY(-10px)"} }}>
            <PaidRounded  color="rgb(4, 145, 152)" />
            <Typography variant="h6" sx={{ marginTop: '1rem', marginBottom: '0.5rem' }}>پزشکی تخصصی</Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>ارائه خدمات پزشکی تخصصی به بیماران</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurServices;