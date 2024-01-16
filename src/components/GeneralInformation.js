import { Box, Typography, Button } from '@mui/material'
import { Contactos, RedSocial } from './Contactos'
import {  useSelector } from 'react-redux'
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
                backgroundColor: 'background.default',
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
                variant="h2"
                fontSize="1rem"
                fontWeight="500"
                paddingRight="1.25rem"
                paddingLeft="1.25rem"
                paddingTop="0.375"
                paddingBottom="0.375"
            >
                {languaje === 'ESP' ? 'Desarrollador Fullstack' :'Fullstack Developer' }
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
                    backgroundColor: 'primary.main',
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

            <Button onClick={(e) => {window.open(languaje === 'ESP' ? "https://docs.google.com/document/d/1IVdKT5g60sTChYOhn8xUpR3C6iywfwWh/edit?usp=drive_link&ouid=101327751041443045711&rtpof=true&sd=true" :"https://docs.google.com/document/d/16L653pEMthxPEdgU4EXn7rCfryTpdqiL/edit?usp=drive_link&ouid=101327751041443045711&rtpof=true&sd=true", "_blank");}}
                sx={{
                    marginTop: '1.5rem',
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                    borderRadius: '35px',
                    fontSize: '1.125rem',
                    backgroundColor:'secondary.main'
                    
                }}

                variant="contained"
                startIcon={<FileDownloadIcon sx={{color: 'secondary.contrastText'}}/>}
            >
                <Typography sx={{color:'secondary.contrastText'}}>
                    {languaje === 'ESP' ? 'Descargar CV' : 'Download CV'}
                </Typography>
                    
            </Button>
        </Box>
    )
}

export default GeneralInformation
