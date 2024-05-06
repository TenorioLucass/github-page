import React from 'react'
import {styled, Grid, Container, Typography} from '@mui/material';


export default function Skills() {

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

  const Item = styled("button")(({theme}) =>({
    backgroundColor: 'transparent',
    borderRadius: '10%',
    height: "40vh",
    width: "30vh",
    textAlign:"center",
    justifyContent: "space-evenly",
    alignContent:"space-evenly",
    border: `2px solid ${theme.palette.secondary.dark}`,
    gap: 2,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  
  }
  )
  )

  const StyledImg = styled("img")(({theme}) =>({
    backgroundColor: 'white',
    borderRadius: '50%',
    height: '40%',
    border: `3px solid ${theme.palette.secondary.dark}`
  }))

  const items=[
    {
      title: "Squad-app",
      text: "Aplicação mobile de rede social",
      image: require("../../assets/squad.png"),
      link: "https://www.sqdsocial.com/",
    }, 
    {
      title: "CPQs abertas",
      text: "Site de divulação científica",
      image: require("../../assets/usp.png"),
      link: "http://ec2-3-92-183-142.compute-1.amazonaws.com/",
    }, 
    {
      title: "Portifolio",
      text: "Este site, criado em Abril de 2024 e sempre sendo aprimorado",
      image: require("../../assets/avatar.jpeg"),
      link: "https://github.com/TenorioLucass/github-page",
    }, 
    // {
    //   title: "Casa Offline",
    //   text: "Projeto social voltado a integração de pessoas",
    //   image: require("../../assets/squad.png"),
    //   link: "https://www.sqdsocial.com/",
    // }, 

  ]
  
    return (
          <BackgroundContainer>
            <Container maxWidth="lg">
              <Grid container spacing={15}>
                    {items.map(item => (
                <Grid
                  item
                  key={item.title}
                  md={3}
                  xs={3}
                  spacing={2}
                >
                  <Typography textAlign="center" color='secondary'>
                      {item.title}
                    </Typography>
                  <Item onClick={()=>{console.log("modal")}}>
                    <StyledImg src={item.image}/>
                    {/* <Typography color='secondary'>
                      {item.title}
                    </Typography> */}
                    <Typography color='secondary'>
                      {item.text}
                    </Typography>
                  </Item>
                </Grid>
  ))}
              </Grid>
            </Container>
          </BackgroundContainer>
      );
  }
  
