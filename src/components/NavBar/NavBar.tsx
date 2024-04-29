import { AppBar, Toolbar, styled, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {

    const StyledToolbar = styled(Toolbar)(({theme}) => ({
        discplay: "flex",
        justifyContent: 'space-evenly'
    }))

    const StyledToolbarButton = styled(Toolbar)(({theme}) => ({
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        },
        width: "66vh",
        justifyContent: "center",
    }))
  return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <Link to="/About" style={{textDecoration:"none"}}>
                        <StyledToolbarButton>
                            <Typography color='primary.contrastText' >About</Typography>
                        </StyledToolbarButton>
                    </Link>
                    <Link to="/Skills" style={{textDecoration:"none"}}>
                        <StyledToolbarButton>
                            <Typography color='primary.contrastText' >Skills</Typography>
                        </StyledToolbarButton>
                    </Link>
                    <Link to="/Projects" style={{textDecoration:"none"}}>
                        <StyledToolbarButton>
                            <Typography color='primary.contrastText'>Projects</Typography>
                        </StyledToolbarButton>
                    </Link>
                </StyledToolbar>
            </AppBar>
        </>
    );
  }
  
  