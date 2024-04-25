import { AppBar, MenuItem, Toolbar, styled } from '@mui/material';
import React from 'react'


export default function NavBar() {

    const StyledToolbar = styled(Toolbar)(({theme}) => ({
        discplay: "flex",
        justifyContent: 'space-evenly'
    }))
  return (
        <>
            <AppBar position="absolute" >
                <StyledToolbar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Project</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    );
  }
  
  