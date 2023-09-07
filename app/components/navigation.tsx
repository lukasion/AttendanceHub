'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {blueGrey, grey} from '@mui/material/colors';
import {TextField} from "@mui/material";
import {styled} from '@mui/system';

const pages = ['O aplikacji', 'Załóż profil obiektu', 'Zarejestruj się', 'Zaloguj się'];
const coloredPages = ['Zarejestruj się', 'Zaloguj się']

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navigation() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const isColored = (page) => {
        return coloredPages.includes(page)
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const WhiteBorderTextField = styled(TextField)`
      & label.Mui-focused,
      & label {
        color: black;
        background: white;
        padding: 0px 10px;
        border-radius: 5px;
      }

      & input {
        background-color: white;
        border-width: 3px;
        border-color: #1976d2;
        border-radius: 0;
      }

      & fieldset {
        border-width: 0;
        border-radius: 0;
        border: 0 !important;
      }
    `;

    return (
        <AppBar position="static" sx={{minHeight: 300}} elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <AdbIcon sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        }, mr: 1
                    }}/>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Signifer.pl
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <AdbIcon sx={{
                        display: {
                            xs: 'flex',
                            md: 'none'
                        }, mr: 1
                    }}/>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{
                        flexGrow: 1,
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        gap: 2,
                        justifyContent: 'flex-end'
                    }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                variant={isColored(page) ? 'contained' : 'text'}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    ...(isColored(page) && {
                                        backgroundColor: 'white',
                                        color: grey[900],
                                        '&:hover': {
                                            backgroundColor: blueGrey[50]
                                        }
                                    })
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>

                <Typography variant="h1" sx={{fontSize: 48, fontWeight: 'bold', mt: 16}}>
                    Odnajdź miejsce na rozwój swojej pasji
                </Typography>

                <Typography variant="h3" sx={{fontSize: 24, mt: 4, mb: 4}}>
                    Szukaj obiektów do zapisu internetowego.
                </Typography>

                <Box display="flex" sx={{
                    boxShadow: 3,
                    marginBottom: '-30px',
                    border: '4px solid #1976d2',
                    backgroundColor: '#1976d2',
                    mt: 8,
                    gap: '4px'
                }}>
                    <WhiteBorderTextField label="Miejscowość" sx={{flex: 1}}/>

                    <WhiteBorderTextField label="Nazwa obiektu" sx={{flex: 1}}/>

                    <Button variant="contained" sx={{
                        minHeight: '56px',
                        fontWeight: 'bold',
                        boxShadow: 'none',
                        borderRadius: 0
                    }}>
                        Szukaj
                    </Button>
                </Box>
            </Container>
        </AppBar>
    );
}

export default Navigation;