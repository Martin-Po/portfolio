import { Box, Grid, Typography, Chip, Alert } from '@mui/material'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'


const technologies = [
    {
        id: 1,
        type: 'programming language',
        name: 'JavaScript',
        description: [
            {
                lang: 'ESP',
                description: 'JavaScript',
            },
            {
                lang: 'ENG',
                description: 'JavaScript',
            },
        ],
    },
    {
        id: 2,
        type: 'framework/library',
        name: 'Express.js',
        description: [
            {
                lang: 'ESP',
                description: 'Express.js',
            },
            {
                lang: 'ENG',
                description: 'Express.js',
            },
        ],
    },
    {
        id: 3,
        type: 'testing tool',
        name: 'Cypress.io',
        description: [
            {
                lang: 'ESP',
                description: 'Cypress.io',
            },
            {
                lang: 'ENG',
                description: 'Cypress.io',
            },
        ],
    },
    {
        id: 4,
        type: 'database',
        name: 'Transact-SQL (T-SQL)',
        description: [
            {
                lang: 'ESP',
                description: 'Transact-SQL (T-SQL)',
            },
            {
                lang: 'ENG',
                description: 'Transact-SQL (T-SQL)',
            },
        ],
    },
    {
        id: 6,
        type: 'API tool',
        name: 'Postman API',
        description: [
            {
                lang: 'ESP',
                description: 'API de Postman',
            },
            {
                lang: 'ENG',
                description: 'Postman API',
            },
        ],
    },
    {
        id: 7,
        type: 'programming language',
        name: 'C#',
        description: [
            {
                lang: 'ESP',
                description: 'C#',
            },
            {
                lang: 'ENG',
                description: 'C#',
            },
        ],
    },
    {
        id: 8,
        type: 'protocol',
        name: 'REST API',
        description: [
            {
                lang: 'ESP',
                description: 'API REST',
            },
            {
                lang: 'ENG',
                description: 'REST API',
            },
        ],
    },
    {
        id: 9,
        type: 'runtime environment',
        name: 'Node.js',
        description: [
            {
                lang: 'ESP',
                description: 'Node.js',
            },
            {
                lang: 'ENG',
                description: 'Node.js',
            },
        ],
    },
    {
        id: 10,
        type: 'software',
        name: 'Microsoft Excel',
        description: [
            {
                lang: 'ESP',
                description: 'Microsoft Excel',
            },
            {
                lang: 'ENG',
                description: 'Microsoft Excel',
            },
        ],
    },
    {
        id: 11,
        type: 'database',
        name: 'PostgreSQL',
        description: [
            {
                lang: 'ESP',
                description: 'PostgreSQL',
            },
            {
                lang: 'ENG',
                description: 'PostgreSQL',
            },
        ],
    },
    {
        id: 12,
        type: 'ODM',
        name: 'Mongoose',
        description: [
            {
                lang: 'ESP',
                description: 'Mongoose',
            },
            {
                lang: 'ENG',
                description: 'Mongoose',
            },
        ],
    },
    {
        id: 13,
        type: 'database',
        name: 'MongoDB',
        description: [
            {
                lang: 'ESP',
                description: 'MongoDB',
            },
            {
                lang: 'ENG',
                description: 'MongoDB',
            },
        ],
    },
    {
        id: 14,
        type: 'framework/library',
        name: 'React.js',
        description: [
            {
                lang: 'ESP',
                description: 'React.js',
            },
            {
                lang: 'ENG',
                description: 'React.js',
            },
        ],
    },
    {
        id: 15,
        type: 'testing tool',
        name: 'Jest',
        description: [
            {
                lang: 'ESP',
                description: 'Jest',
            },
            {
                lang: 'ENG',
                description: 'Jest',
            },
        ],
    },
    {
        id: 16,
        type: 'programming language',
        name: 'VBScript',
        description: [
            {
                lang: 'ESP',
                description: 'VBScript',
            },
            {
                lang: 'ENG',
                description: 'VBScript',
            },
        ],
    },
    {
        id: 17,
        type: 'database',
        name: 'Microsoft Access',
        description: [
            {
                lang: 'ESP',
                description: 'Microsoft Access',
            },
            {
                lang: 'ENG',
                description: 'Microsoft Access',
            },
        ],
    },
    {
        id: 19,
        type: 'state management',
        name: 'Redux',
        description: [
            {
                lang: 'ESP',
                description: 'Redux',
            },
            {
                lang: 'ENG',
                description: 'Redux',
            },
        ],
    },{
        id: 20,
        type: 'promises manager',
        name: 'Axios',
        description: [
            {
                lang: 'ESP',
                description: 'Axios',
            },
            {
                lang: 'ENG',
                description: 'Axios',
            },
        ],
    },{
        id: 21,
        type: 'protocol',
        name: 'External API',
        description: [
            {
                lang: 'ESP',
                description: 'Integracion API externa',
            },
            {
                lang: 'ENG',
                description: 'External API integration',
            },
        ],
    },
    {
        id: 22,
        type: 'protocol',
        name: 'Custom hooks',
        description: [
            {
                lang: 'ESP',
                description: 'Custom hooks',
            },
            {
                lang: 'ENG',
                description: 'Custom hooks',
            },
        ],
    },
    {
        id: 23,
        type: 'graphic library',
        name: 'Material UI',
        description: [
            {
                lang: 'ESP',
                description: 'Material UI',
            },
            {
                lang: 'ENG',
                description: 'Material UI',
            },
        ],
    },
    {
        id: 24,
        type: 'protocol',
        name: 'JWT',
        description: [
            {
                lang: 'ESP',
                description: 'JSON Web Token',
            },
            {
                lang: 'ENG',
                description: 'JSON Web Token',
            },
        ],
    },
]

const Proyects = [
    {
        id: 1,
        description: [
            {
                lang: 'ESP',
                description: 'Landing Page',
            },
            {
                lang: 'ENG',
                description: 'Landing Page',
            },
        ],
        URL: 'https://landing-page-demo4.fly.dev/',
        img: process.env.PUBLIC_URL + '/images/landing_page.png',
        technologies: ['JavaScript', 'React.js', 'Redux', 'Custom hooks', 'Material UI', 'Node.js', 'Express.js'],
    }, {
        id: 2,
        description: [
            {
                lang: 'ESP',
                description: 'Countries App',
            },
            {
                lang: 'ENG',
                description: 'Countries App',
            },
        ],
        URL: 'https://countries-app-kf5p.onrender.com/',
        img: process.env.PUBLIC_URL + '/images/countries-app.png',
        technologies: ['JavaScript', 'React.js', 'Redux', 'Axios', 'External API', 'Material UI'],
    }, {
        id: 3,
        description: [
            {
                lang: 'ESP',
                description: 'Weather App',
            },
            {
                lang: 'ENG',
                description: 'Weather App',
            },
        ],
        URL: 'https://weather-app-tko0.onrender.com/',
        img: process.env.PUBLIC_URL + '/images/weather-app.png',
        technologies: ['JavaScript', 'React.js', 'Redux', 'Axios', 'External API', 'Material UI'],
    },
    {
        id: 4,
        description: [
            {
                lang: 'ESP',
                description: 'Todo-list App',
            },
            {
                lang: 'ENG',
                description: 'Todo-list App',
            },
        ],
        URL: 'https://todo-list-app-080t.onrender.com/',
        img: process.env.PUBLIC_URL + '/images/todo-list-app.png',
        technologies: ['JavaScript', 'REST API', 'React.js', 'Redux', 'Axios', 'External API', 'Material UI', 'Express.js', 'Postman API', 'MongoDB', 'Mongoose', 'Node.js', 'JWT'],
    }
]

function Works() {
    const languaje = useSelector((state) => state.languaje)
    const [hovered, setHovered] = useState([])

 

    const handleMouseEnter = (tech) => {
        setHovered(tech)
    }

    const handleMouseLeave = () => {
        setHovered([])
    }

    return (
        <Box>
            <Helmet>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="google-site-verification" content="fNBbPJ2a7b3nVvqsGHzQb85BUT6c-7Q8R5idXOV5v5A" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

            <title>Martin Ponce - Proyectos</title>
            <meta name="description" content="Colección de mis proyectos de desarrollo web, cada uno con enlaces a demostraciones en vivo y al código fuente en GitHub." />
            <link rel="canonical" href="/portfolio/Works" />
            
            <meta property="og:title" content="Martin Ponce - Proyectos"/>
        <meta property="og:description" content="Colección de mis proyectos de desarrollo web, cada uno con enlaces a demostraciones en vivo y al código fuente en GitHub."/>
        <meta property="og:url" content="https://martin-po.github.io/portfolio/Works" />
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
                    Portfolio
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
             <Alert severity='info' sx={{marginBottom:'0.5rem', marginLeft: '1.5rem', marginRight:'1.5rem'}}>
            {languaje === 'ESP' ? 'Posa el cursor sobre el proyecto para ver qué tecnologías se utilizaron' : 'Hover the cursor over the project to see what technologies where used'}
                    </Alert>
            <Grid container>
                {Proyects.map((proyect) => {
                    return (
                        <Grid item key={proyect.id} xs={6} md={4} sx={{ paddingLeft: '0px' }}>
                            <Box
                             onMouseEnter={(onclick) =>
                                handleMouseEnter(proyect.technologies)
                            }
                            onMouseLeave={handleMouseLeave}
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
                                    paddingBottom: '1rem',
                                }}
                            >
                                <img
                                   
                                    src={proyect.img}
                                    alt={proyect.description}
                                />
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: '.875rem',
                                        opacity: '0.85',
                                        marginTop: '0.5rem',
                                    }}
                                >
                                    <a
                                        href={proyect.URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {
                                            proyect.description.filter(
                                                (text) => text.lang === languaje
                                            )[0].description
                                        }
                                    </a>
                                </Typography>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: '1.15rem',
                            fontWeight: '600',
                            marginBottom: '0.75rem',
                            marginLeft: '1.25rem',
                        }}
                    >
                        {languaje === 'ESP'
                            ? 'Tecnologías y herramientas que manejo'
                            : 'Tools and technologies I handle'}
                    </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginLeft: '1.25rem',
                    rowGap: '0.75rem',
                    columnGap: '0.75rem',
                }}
            >
                {technologies.map((element) => {
                    return (
                        <Chip
                            key={element.id}
                            label={
                                element.description.filter(
                                    (text) => text.lang === languaje
                                )[0].description
                            }
                            sx={{
                                backgroundColor:
                                    hovered.includes(element.name) &&
                                    'secondary.main',
                            }}
                        />
                    )
                })}
            </Box>
        </Box>
    )
}

export default Works
