import React from 'react'
import {styled, Grid, Container, Typography, Box} from '@mui/material';
import Avatar from '../../../assets/avatar.jpeg';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from '../../../components/styledButton/styledButton';
import  AnimatedBackground  from '../../../components/AnimatedBackground/AnimatedBackground';


const PDF_FILE_URL = 'https://tenoriolucass.github.io/github-page/Currículo-0.pdf'

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

  const downloadCV = (url:string) =>{
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', "Currículo-0.pdf")
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();
  }
  const mailTo = () =>{
    const email = "mailto:tenrio.lucas03@gmail.com";
    window.location.href = email;

  }
  
    return (
        <>
          <BackgroundContainer>
            <Container maxWidth="lg">
              <Grid container spacing={2} alignItems={"center"}>
                <Grid item xs={12} md={4}>
                  <Box position='relative'>
                    <Box position='absolute' width={"100%"} top={100} >
                      <AnimatedBackground/>
                    </Box>
                    <Box position='relative' width={"100%"} >
                      <StyledImg src={Avatar}/>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography color='primary.contrastText' variant='h2' textAlign='center'>Lucas Tenório</Typography>
                  <Typography color='primary.contrastText' variant='h6' textAlign='center' pb={2}>Olá! Sou Engenheiro de Software, no fim da graduação em Ciência da Computação pela Universidade de São Paulo, em busca de aprendizado e
com ótimas habilidades de comunicação e trabalho em equipe.</Typography>
                  <Grid container display="flex" justifyContent="center" spacing={3}>
                    <Grid item xs={12} md={4} display="flex">
                      <StyledButton onClick={()=> downloadCV(PDF_FILE_URL)}>
                        <DownloadIcon/>
                          <Typography>
                            Download CV
                          </Typography>
                      </StyledButton>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" >
                      <StyledButton onClick={()=> mailTo()}>
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
  
