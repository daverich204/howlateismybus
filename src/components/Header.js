import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from "@emotion/styled";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar variant={"dense"}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        How Late Is My Bus?
                    </Typography>
                    {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
        </Box>
    );
}