import React from 'react'
import {styled, Grid, Container, Typography, ListItemIcon} from '@mui/material';
import GitHubIcon from '../../assets/githubIcon';
import ReactIcon from '../../assets/reactIcon';
import NodeIcon from '../../assets/nodeIcon';
import JavaScriptIcon from '../../assets/javascriptIcon';
import MongoIcon from '../../assets/mongoIcon';
import PythonIcon from '../../assets/pythonIcon';
import CIcon from '../../assets/cIcon';
import SqlIcon from '../../assets/sqlIcon';
import ReactNativeIcon from '../../assets/reactNativeIcon';
import theme from '../../theme';
// import ReactIcon from "../../assets/reactIcon.svg";

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

  const Item = styled("div")(({theme}) =>({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '10%',
    height: 120,
    width : 120,
    textAlign:"center",
    alignContent:"center",
    border: `2px solid ${theme.palette.secondary.dark}`,
    alignItems:"center",
    justifyContent:"center",  
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark
  }
  }
  )
  )
  // const Item = ({}) =>{
  //   return(
  //     <div>
  //       <ReactIcon></ReactIcon>
  //     </div>
  //   )
  // }

  const items=[
    {
      text: "Github",
      icon: <GitHubIcon height={'7vh'} fill={theme.palette.primary.main}/>,
    }, 
    {
      text: "React",
      icon: <ReactIcon height={'7vh'} fill={theme.palette.primary.main}/>,
    }, 
    {
      text: "Node",
      icon: <NodeIcon height={'7vh'} fill={theme.palette.primary.main}/>,
    }, 
    {
      text: "Javascript",
      icon: <JavaScriptIcon height={'7vh'} fill={theme.palette.primary.main}/>,
    }, 
    {
      text: "MongoDb",
      icon: <MongoIcon height={'7vh'} fill={theme.palette.primary.main}/>,
    }, 
    {
      text: "React-Native",
      icon: <ReactNativeIcon height={'7vh'} fill={theme.palette.primary.main}/>,
    }, 
    {
      text: "C",
      icon: <CIcon height={'7vh'} fill={theme.palette.primary.main}/>,
    }, 
    {
      text: "Python",
      icon: <PythonIcon height={'7vh'} fill={theme.palette.primary.main}/>,
    }, 
    {
      text: "MySQL",
      icon: <SqlIcon height={'7vh'} fill={theme.palette.primary.main}/>,
    }, 
  ]

  
    return (
          <BackgroundContainer>
            <Container maxWidth="lg">
              <Grid container spacing={5}>
                    {items.map(item => (
                <Grid
                  item
                  key={item.text}
                  md={3}
                  xs={3}
                  spacing={2}
                >
                  <Item >
                    <ListItemIcon >{item.icon}</ListItemIcon>
                      <Typography color='primary'>
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
  
