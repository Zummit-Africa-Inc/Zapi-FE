import React from 'react'
import {  Box, Container, Grid, Typography} from '@mui/material'
import Link from '@mui/material/Link'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




//image
import Twitter from "../assets/images/Twitter.png"
import Linkedin from "../assets/images/Linkedin.png"
import Youtube from "../assets/images/Youtube.png"




const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('lg'));


  return (
    <>
    <footer>
      <Box px={{ xs:3, sm:10 }} py={{  xs:5, sm:10}} bgcolor='#081F4A' color='#FFEA00'>
        <Container maxWidth='lg'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Box ><Typography variant='h4' sx={{ fontWeight:700, fontSize:'18px', lineHeight:'30px', fontFamily:'Space Grotesk' }}>EXPLORE</Typography></Box>
              <Box>
                <Link href='/' underline="none" color='inherit'>
                  <Typography display="block" py={1} fontSize={16} fontWeight={300}>Our APIs</Typography>
                </Link>
              </Box>
              <Box>
                <Link href='/' underline="none" color='inherit'>
                <Typography display="block" py={1} fontSize={16} fontWeight={300} fontFamily='Space Grotesk'>ZAPI Tools</Typography>
                </Link>
              </Box>
              <Box>
                <Link href='/' underline="none" color='inherit'>
                <Typography display="block" py={1} fontSize={16} fontWeight={300} fontFamily='Space Grotesk'>Zummit Africa </Typography>
                </Link>
              </Box>
              <Box>
                <Link href='/' underline="none" color='inherit'>
                <Typography display="block" py={1} fontSize={16} fontWeight={300} fontFamily='Space Grotesk'>Zummit Africa Articles</Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box><Typography variant='h4' sx={{ fontWeight:700, fontSize:'18px', lineHeight:'30px', fontFamily:'Space Grotesk' }}>COMPANY</Typography></Box>
              <Box>
                <Link href='/' underline="none" color='inherit'>
                <Typography display="block" py={1} fontSize={16} fontWeight={300} fontFamily='Space Grotesk'>About</Typography>
                </Link>
              </Box>
              <Box>
                <Link href='/' underline="none" color='inherit'>
                <Typography display="block" py={1} fontSize={16} fontWeight={300} fontFamily='Space Grotesk'>Help</Typography>
                </Link>
              </Box>
              <Box>
                <Link href='/' underline="none" color='inherit'>
                <Typography display="block" py={1} fontSize={16} fontWeight={300} fontFamily='Space Grotesk'>Status</Typography>
                </Link>
              </Box>
              <Box>
                <Link href='/' underline="none" color='inherit'>
                <Typography display="block" py={1} fontSize={16} fontWeight={300} fontFamily='Space Grotesk'>Cookie Policy</Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box><Typography variant='h4' sx={{ fontWeight:700, fontSize:'18px', lineHeight:'30px',fontFamily:'Space Grotesk' }}>POPULAR APIs</Typography></Box>
              <Box>
                <Link href='/' underline="none" color='inherit'>
                <Typography display="block" py={1} fontSize={16} fontWeight={300} fontFamily='Space Grotesk'>Drowsiness Detection</Typography>
                </Link>
              </Box>
              <Box>
                <Link href='/' underline="none" color='inherit'>
                <Typography display="block" py={1} fontSize={16} fontWeight={300} fontFamily='Space Grotesk'>Emotion Detection</Typography>
                </Link>
              </Box>
              <Box>
                <Link href='/' underline="none" color='inherit'>
                <Typography display="block" py={1} fontSize={16} fontWeight={300} fontFamily='Space Grotesk'>Text Summarizer</Typography>
                </Link>
              </Box>
              <Box>
                <Link href='/' underline="none" color='inherit'>
                <Typography display="block" py={1} fontSize={16} fontWeight={300} fontFamily='Space Grotesk'>Chat Bots</Typography>
                </Link>
              </Box>  
              <Box>
                <Link href='/' underline="none" color='inherit'>
                <Typography display="block" py={1} fontSize={16} fontWeight={300} fontFamily='Space Grotesk'>Sentiment Analyzer</Typography>
                </Link>
              </Box>
            </Grid>
            <div style={{ border: '1px solid #FFEA00', width: '100%', marginTop:'2rem' }}></div>
            <Grid container mt={{ xs: '2rem', sm: 4, md: 6, lg: 4 }}>
              <Grid item xs={12} mt={{ xs: '1rem' }} lg={6} fontSize={14} fontWeight={900} lineHeight='30px' alignItems='center'>
                &copy; {new Date().getFullYear()}, ZAPI
              </Grid>
              <Grid item xs={12} lg={6} fontSize={10} display='flex' justifyContent={isMobile ? 'flex-end' : 'flex-start'} >
              <Link href="https://mobile.twitter.com/zummitafrica" underline="none" >
                <Box mt={4} mr={{ xs: '1rem', lg: '1rem' }} sx={{ backgroundColor:'#081F4A', width:'32px', height:'32px' }} display="inline-block">
                  <img src={Twitter} alt="Twitter" style={{ justifySelf: 'center', marginTop:'0.4rem', marginLeft:'0.4rem'}}/>
                </Box>
              </Link>
              <Link href="https://www.instagram.com/zummitafrica/" underline="none" color="#081F4A">
                <Box mt={4} mr={{ xs: '1rem', lg: '1rem' }} sx={{ backgroundColor:'#081F4A', width:'32px', height:'32px'}} display="inline-block">
                  <img src={Linkedin} alt="Linkedin" style={{ justifySelf: 'center', marginTop:'0.4rem', marginLeft:'0.4rem', color:'#FFEA00'}}/>
                </Box>
              </Link>
              <Link href="https://www.instagram.com/zummitafrica/" underline="none" color="#081F4A">
                <Box mt={4} mr={{ xs: '1rem', lg: '1rem' }} sx={{ backgroundColor:'#081F4A', width:'32px', height:'32px', justifyContent: 'center' }} display="inline-block">
                  <img src={Youtube} alt="Youtube" style={{ justifySelf: 'center', marginTop:'0.4rem', marginLeft:'0.2rem'}}/>
                </Box>
              </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
    </>
  )
  
}



export default Footer