import Grid from '@mui/material/Unstable_Grid2'
import { Paper } from '@mui/material'
import AppBar from './components/AppBar'
import BottomNavigation from './components/BottomNavigation'
import MenuBar from './components/MenuBar'
import CssBaseline from '@mui/material/CssBaseline'
import GeneralInformation from './components/GeneralInformation'
import Background from './images/Background.png'
import BackgroundDark from './images/Background_dark.png'
import Home from './components/Home'
import Resume from './components/Resume'
import Works from './components/Works'
import Contact from './components/Contact'
import { useSelector } from 'react-redux'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet-async'
import { Routes, Route, Link, useMatch, Navigate } from 'react-router-dom'

const App = () => {
    const activeElement = useSelector((state) => state.activeElement)
    const activeTheme = useSelector((state) => state.activeTheme)

    const iconComponents = {
        Home,
        Resume,
        Works,
        Contact,
    }

    const SelectedElement = iconComponents[activeElement]

    return (
        <div
            style={{
                backgroundImage: `url(${
                    activeTheme === 'light' ? Background : BackgroundDark
                })`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Helmet>
            <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="google-site-verification" content="fNBbPJ2a7b3nVvqsGHzQb85BUT6c-7Q8R5idXOV5v5A" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <title>Martin Ponce - Desarrollador web full stack</title>
    <meta name="description" content="Soy Martin Ponce, un desarrollador web full stack con experiencia en HTML, CSS, JavaScript, React y APIs RESTful. Te invito a conocer mi portfolio y mis proyectos" />
    <link rel="canonical" href="/portfolio/" />
    
    <meta property="og:title" content="Martin Ponce - Desarrollador web full stack"/>
<meta property="og:description" content="Soy Martin Ponce, un desarrollador web full stack con experiencia en HTML, CSS, JavaScript, React y APIs RESTful. Te invito a conocer mi portfolio y mis proyectos"/>
<meta property="og:url" content="https://martin-po.github.io/portfolio/" />
<meta property="og:image" content="https://martin-po.github.io/portfolio/static/media/foto_cv.55b773319a5f6d83adfe.png" />
<meta property="og:type" content="website" /> 
            </Helmet>
            <CssBaseline />
            <AppBar />
            <Grid
                container
                spacing={{ xs: 0, md: 4 }}
                sx={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '1280px',
                    marginTop: '220px',

                    '@media (max-width:1300px)': {
                        width: '992px',
                    },
                    '@media (max-width:1024px)': {
                        width: '100%',
                    },
                }}
            >
                <Grid xs={12} md={4} sx={{ paddingLeft: '0px' }}>
                    <GeneralInformation />
                </Grid>
                <Grid xs={12} md={8} sx={{ paddingRight: '0px' }}>
                    <MenuBar />
                    <Paper
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginTop: '20px',
                            minHeight: '100vh',
                            borderRadius: '20px',
                            backgroundColor: 'background.default',
                        }}
                    >
                        <Routes>
                            <Route path="Portfolio/Home" element={<Home />} />
                            <Route path="Portfolio/Works" element={<Works />} />
                            <Route path="Portfolio/Resume" element={<Resume />} />
                            <Route path="Portfolio/Contact" element={<Contact />} />
                            <Route
                                path="Portfolio/Works/*"
                                element={<Navigate to="Portfolio/Works" />}
                            />
                            <Route
                                path="Portfolio/Resume/*"
                                element={<Navigate to="Portfolio/Resume" />}
                            />
                            <Route
                                path="Portfolio/Contact/*"
                                element={<Navigate to="Portfolio/Contact" />}
                            />
                            <Route path="*" element={<Navigate to="Portfolio/Home" />} />
                        </Routes>

                        <Footer />
                    </Paper>
                </Grid>
            </Grid>
            <BottomNavigation />
        </div>
    )
}

export default App
