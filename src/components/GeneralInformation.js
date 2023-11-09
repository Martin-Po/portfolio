import { Box, Paper, Typography, Button } from '@mui/material'
import { Contactos, RedSocial } from './Contactos'
import languajeReducer from '../reducers/languajeReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

const ObjContactos = [
    {
        id: 1,
        tipo: 'Red Social',
        subtipo: 'Linkedin',
        icon: 'LinkedInIcon',
        description: '',
        url: 'https://www.linkedin.com/in/martin-ponce-45a83191/',
    },
    {
        id: 2,
        tipo: 'Red Social',
        subtipo: 'github',
        icon: 'GitHubIcon',
        description: '',
        url: 'https://github.com/Martin-Po',
    },
    {
        id: 3,
        tipo: 'Contacto',
        subtipo: [
            { lang: 'ESP', description: 'Teléfono' },
            { lang: 'ENG', description: 'Phone' },
        ],
        icon: 'PhoneAndroidIcon',
        description: '011 15 32811262',
        url: '',
    },
    {
        id: 4,
        tipo: 'Contacto',
        subtipo: [
            { lang: 'ESP', description: 'Ubicacion' },
            { lang: 'ENG', description: 'Location' },
        ],
        icon: 'LocationOnIcon',
        description: 'Buenos Aires, Argentina',
        url: '',
    },
    {
        id: 5,
        tipo: 'Contacto',
        subtipo: [
            { lang: 'ESP', description: 'Email' },
            { lang: 'ENG', description: 'Email' },
        ],
        icon: 'EmailIcon',
        description: 'map_06@hotmail.com',
        url: '',
    },
    {
        id: 6,
        tipo: 'Contacto',
        subtipo: [
            { lang: 'ESP', description: 'Fecha de Nacimiento' },
            { lang: 'ENG', description: 'Birthday' },
        ],
        icon: 'CalendarMonthIcon',
        description: '06/07/1992',
        url: '',
    },
]

function GeneralInformation() {
    const languaje = useSelector((state) => state.languaje)
    const [contactos, setContactos] = useState()

    useEffect(() => {
        setContactos(ObjContactos)
    }, [])

    return (
        <Box
            sx={{
                background: 'white',
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
                minHeight: '100vh',
                borderRadius: '20px',
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',

                '@media (min-width:900px)': {
                    top: '11rem',
                    position: 'sticky',
                },
            }}
        >
            <Box>
                <img
                    style={{
                        marginTop: '-140px',
                        borderRadius: '20px',
                        width: '240px',
                        height: '240px',
                    }}
                    src={require('../images/foto_cv.png')}
                    alt="Martin Ponce"
                />
            </Box>
            <Typography
                variant="h1"
                fontSize="1.625rem"
                fontWeight="600"
                marginBottom="0.25rem"
                marginTop="1.5rem"
            >
                Martin Ponce
            </Typography>
            <Typography
                variant="h3"
                fontSize="1rem"
                fontWeight="500"
                paddingRight="1.25rem"
                paddingLeft="1.25rem"
                paddingTop="0.375"
                paddingBottom="0.375"
            >
                Fullstack Developer
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: '10px',
                    gap: '5px',
                }}
            >
                {contactos &&
                    contactos
                        .filter((contacto) => contacto.tipo === 'Red Social')
                        .map((contacto) => (
                            <RedSocial contacto={contacto} key={contacto.id} />
                        ))}
            </Box>
            <Box
                sx={{
                    width: '100%',
                    marginTop: '1.75rem',
                    padding: '1.75rem',
                    borderRadius: '1rem',
                    background: 'rgb(243, 246, 246)',
                }}
            >
                {contactos &&
                    contactos
                        .filter((contacto) => contacto.tipo !== 'Red Social')
                        .map((contacto, index, array) => (
                            <Contactos
                                contacto={contacto}
                                key={contacto.id}
                                last={array.length !== index + 1}
                            />
                        ))}
            </Box>

            <Button
                sx={{
                    marginTop: '1.5rem',
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                    borderRadius: '35px',
                    fontSize: '1.125rem',
                    
                }}

                variant="contained"
                startIcon={<FileDownloadIcon />}
            >
                {languaje === 'ESP' ? 'Descargar CV' : 'Download CV'}
            </Button>
        </Box>
    )
}

export default GeneralInformation
