import React from 'react'
import {styled, Grid, Container, Typography, Box} from '@mui/material';
import Avatar from '../../../assets/avatar.jpeg';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from '../../../components/styledButton/styledButton';
import  {AnimatedBackground}  from '../../../components/AnimatedBackground/AnimatedBackground';

export default function Hero() {

  const BackgroundContainer = styled("div")(({theme}) =>({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]:{

    },
    [theme.breakpoints.up('md')]:{

    },
  }))

  const StyledImg = styled("img")(({theme}) =>({
    borderRadius: '50%',
    width: '90%',
    border: `2px solid ${theme.palette.primary.contrastText}`
  }))
  
    return (
        <>
          <BackgroundContainer>
            <Container maxWidth="lg">
              <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                  <Box position='relative'>
                    <Box position='absolute' width={"100%"} top={100} >
                      <AnimatedBackground/>
                    </Box>
                    <Box position='relative' width={"100%"} >
                      <StyledImg src={Avatar}/>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography color='primary.contrastText' variant='h1' textAlign='center'>Lucas Tenório</Typography>
                  <Typography color='primary.contrastText' variant='h2' textAlign='center' pb={2}>I'm a Software Engineer</Typography>
                  <Grid container display="flex" justifyContent="center" spacing={3}>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                      <StyledButton onClick={()=> { console.log("oooooo")}}>
                        <DownloadIcon/>
                          <Typography>
                            Download CV
                          </Typography>
                      </StyledButton>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                      <StyledButton >
                        <EmailIcon/>
                        <Typography>
                          Contact me
                        </Typography>
                      </StyledButton>
                    </Grid>
                  </Grid>
                 
                </Grid>
              </Grid>
            </Container>
          </BackgroundContainer>
        </>
      );
  }
  
