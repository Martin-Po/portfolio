import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import AdbIcon from '@mui/icons-material/Adb'

import { useDispatch, useSelector } from 'react-redux'

import {changeActiveElement} from '../reducers/menuelementReducer'
import {changeLanguaje} from '../reducers/languajeReducer'

const pages = [
    {
        id: 1,
        description:'Home',
        text: [
            { lang: 'ESP', description: 'Inicio' },
            { lang: 'ENG', description: 'Home' },
        ],
    },
    {
        id: 2,
        description:'Resume',
        text: [
            { lang: 'ESP', description: 'Resumen' },
            { lang: 'ENG', description: 'Resume' },
        ],
    },
    {
        id: 3,
        description:'Works',
        text: [
            { lang: 'ESP', description: 'Trabajos' },
            { lang: 'ENG', description: 'Works' },
        ],
    },
    {
        id: 4,
        description:'Contact',
        text: [
            { lang: 'ESP', description: 'Contacto' },
            { lang: 'ENG', description: 'Contact' },
        ],
    },
]

function ResponsiveAppBar() {
    const languaje = useSelector(state => state.languaje)
    const activeElement = useSelector((state) => state.activeElement)
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    
    
    
    const dispatch = useDispatch()
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    
    const handleCloseNavMenu = (page) => {
        console.log(page)
        dispatch(changeActiveElement(page.description));   
        setAnchorElNav(null)
    }
    

    const handleLanguageChange = () => {
        // Dispatch the action
        dispatch(changeLanguaje('ENG'));
      }

    return (
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
            <Container 
                maxWidth={false}
                sx={{
                    width: '1300px',
                    '@media (max-width:1300px)': {
                        width: '880px',
                    },
                    '@media (max-width:900px)': {
                        width: '100%',
                    },
                }}
            >
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: 'flex', mr: 1, color: 'black'}} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',                            
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexGrow: 1,
                            justifyContent: 'flex-end',
                        }}
                    >
                         <IconButton
                            size="small"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleLanguageChange} 
                            color="black"
                        >
                            {languaje}
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleLanguageChange} 
                            color="black"
                        >
                            <DarkModeIcon />
                        </IconButton>

                        <Box
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                justifyContent: 'flex-end'
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
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
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                    sx= {{width: '100vw',}}
                                        key={page.id}
                                        onClick={() => handleCloseNavMenu(page)} 
                                    >                                       
                                                {page.text.filter(
                                        (text) => text.lang === languaje
                                    )[0].description}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar
