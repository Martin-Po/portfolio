import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2'
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Helmet } from 'react-helmet-async'


const Items = [
    {
        id: 1,
        tipo: 'Education',
        date: '2023 - 2023',
        title: [
            { lang: 'ESP', description: 'Fullstack Open Course' },
            { lang: 'ENG', description: 'Fullstack Open Course' },
        ],
        description: [
            {
                lang: 'ESP',
                description: 'Universidad de Helsinki, Helsinki, FL',
            },
            {
                lang: 'ENG',
                description: 'University of Helsinki, Helsinki, FL',
            },
        ],
        url: '',
    },
    {
        id: 2,
        tipo: 'Education',
        date: '2017-2018',
        title: [
            {
                lang: 'ESP',
                description:
                    'Tecnicatura Universitaria en Sistemas Informáticos',
            },
            {
                lang: 'ENG',
                description: 'University Technical Degree in Computer Systems',
            },
        ],
        description: [
            {
                lang: 'ESP',
                description: 'Universidad Técnica Nacional, Buenos Aires, Arg',
            },
            {
                lang: 'ENG',
                description:
                    'National Technological University, Buenos Aires, Arg',
            },
        ],
        url: '',
    },
    {
        id: 3,
        tipo: 'Education',
        date: '2016-2017',
        title: [
            {
                lang: 'ESP',
                description: 'Tecnicatura Universitaria en Programación',
            },
            {
                lang: 'ENG',
                description: 'University Technical Degree programing',
            },
        ],
        description: [
            {
                lang: 'ESP',
                description: 'Universidad Técnica Nacional, Pacheco, Arg',
            },
            {
                lang: 'ENG',
                description: 'National Technological University, Pacheco, Arg',
            },
        ],
        url: '',
    },
    {
        id: 4,
        tipo: 'Education',
        date: '2010',
        title: [
            { lang: 'ESP', description: 'Secundario Bilingüe' },
            { lang: 'ENG', description: 'Bilingual Bachelor' },
        ],
        description: [
            {
                lang: 'ESP',
                description: 'Del Viso Day School, Buenos Aires, Argentina',
            },
            {
                lang: 'ENG',
                description: 'Del Viso Day School, Buenos Aires, Argentina',
            },
        ],
        url: '',
    },
    {
        id: 5,
        tipo: 'Experience',
        date: '2019 - 2023',
        title: [
            { lang: 'ESP', description: 'Analista Programador Ssr' },
            { lang: 'ENG', description: 'Analyst Programmer Ssr' },
        ],
        description: [
            { lang: 'ESP', description: 'LoopSys' },
            { lang: 'ENG', description: 'LoopSys' },
        ],
        url: '',
    },
    {
        id: 6,
        tipo: 'Experience',
        date: '2017 - 2019',
        title: [
            { lang: 'ESP', description: 'Área de Cómputos de datos' },
            { lang: 'ENG', description: 'Data computing department' },
        ],
        description: [
            {
                lang: 'ESP',
                description: 'Cooperativa Telefónica de Tortuguitas',
            },
            {
                lang: 'ENG',
                description: 'Cooperativa Telefónica de Tortuguitas',
            },
        ],
        url: '',
    },
]

function Resume() {
    const languaje = useSelector((state) => state.languaje)

    return (
        <Box>
               <Helmet>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="google-site-verification" content="fNBbPJ2a7b3nVvqsGHzQb85BUT6c-7Q8R5idXOV5v5A" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

            <title>Martin Ponce - Formación</title>
            <meta name="description" content="Detalle de mi recorrido académico." />
            <link rel="canonical" href="/portfolio/Resume" />
            
            <meta property="og:title" content="Martin Ponce - Formación"/>
        <meta property="og:description" content="Detalle de mi recorrido académico."/>
        <meta property="og:url" content="https://martin-po.github.io/portfolio/Resume" />
        <meta property="og:image" content="https://martin-po.github.io/portfolio/static/media/foto_cv.55b773319a5f6d83adfe.png" />
        <meta property="og:type" content="website" /> 
            </Helmet>
            <Box
                sx={{
                    display: 'flex',
                    paddingLeft: '3.5rem',
                    paddingRight: '3.5rem',
                    paddingTop: '3rem',
                    paddingBottom: '3rem',
                }}
            >
                <Typography variant="h2" fontSize="2.5rem" fontWeight="700">
                    {languaje === 'ESP' ? 'Curriculum' : 'Resume'}
                </Typography>
                <Box
                    sx={{
                        width: '12rem',
                        height: '0.125rem',
                        borderRadius: '0.375rem',
                        backgroundColor: 'secondary.main',
                        left: '2rem',
                        top: '1.5rem',
                        position: 'relative',
                        display: { xs: 'none', md: 'block' },
                    }}
                />
            </Box>
            <Grid container>
                <Grid xs={12} md={6} sx={{ paddingLeft: '0px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'left',
                            marginLeft: '1.25rem',
                            marginBottom: '0.75rem',
                        }}
                    >
                        <SchoolIcon sx={{color:'secondary.main'}}/>
                        <Typography variant="h3" sx={{fontSize:'1.625rem', marginLeft:'0.5rem'}}>{languaje === 'ESP'? 'EDUCACIÓN' : 'EDUCATION'}</Typography>
                    </Box>
                    {Items.filter((item) => item.tipo === 'Education').map(
                        (element) => {
                            return (
                                <Box key={element.id}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        backgroundColor: 'primary.main',
                                        marginLeft: '1.25rem',
                                        marginRight: {
                                            xs: '1.25rem',
                                            md: '0.625rem',
                                        },
                                        marginBottom: '1.5rem',
                                        borderRadius: '0.5rem',
                                        paddingLeft: '1.25rem',
                                        paddingRight: '0.75rem',
                                        paddingTop: '1rem',
                                        paddingBottom: '1rem'
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: '.875rem',
                                            opacity: '0.85',
                                        }}
                                    >
                                        {element.date}
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: '1.15rem',
                                            fontWeight: '600',
                                            marginTop: '0.5rem',
                                        }}
                                    >
                                        {
                                            element.title.filter(
                                                (text) => text.lang === languaje
                                            )[0].description
                                        }
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: '0.85rem',
                                            marginTop: '0.5rem',
                                        }}
                                    >
                                        {
                                            element.description.filter(
                                                (text) => text.lang === languaje
                                            )[0].description
                                        }
                                    </Typography>
                                </Box>
                            )
                        }
                    )}
                </Grid>
                <Grid xs={12} md={6} sx={{ paddingLeft: '0px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'left',
                            marginLeft: {
                                xs: '0.625rem',
                                md: '1.25rem',
                            },
                            marginBottom: '0.75rem',
                        }}
                    >
                        <BusinessCenterIcon sx={{color:'secondary.main'}}/>
                        <Typography variant="h3" sx={{fontSize:'1.625rem', marginLeft:'0.5rem'}}>{languaje === 'ESP' ? 'EXPERIENCIA' : 'EXPERIENCE'}</Typography>
                        
                    </Box>
                    {Items.filter((item) => item.tipo === 'Experience').map(
                        (element) => {
                            return (
                                <Box
                                key={element.id}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        backgroundColor: 'primary.main',
                                        marginRight: '1.25rem',
                                        marginLeft: {
                                            xs: '0.625rem',
                                            md: '1.25rem',
                                        },
                                        marginBottom: '1.5rem',
                                        borderRadius: '0.5rem',
                                        paddingLeft: '1.25rem',
                                        paddingRight: '0.75rem',
                                        paddingTop: '1rem',
                                        paddingBottom: '1rem'
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: '.875rem',
                                            opacity: '0.85',
                                        }}
                                    >
                                        {element.date}
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: '1.15rem',
                                            fontWeight: '600',
                                            marginTop: '0.5rem',
                                        }}
                                    >
                                        {
                                            element.title.filter(
                                                (text) => text.lang === languaje
                                            )[0].description
                                        }
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: '0.85rem',
                                            marginTop: '0.5rem',
                                        }}
                                    >
                                        {
                                            element.description.filter(
                                                (text) => text.lang === languaje
                                            )[0].description
                                        }
                                    </Typography>
                                </Box>
                            )
                        }
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Resume
