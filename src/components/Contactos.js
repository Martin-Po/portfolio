import { Box, Paper, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import languajeReducer from '../reducers/languajeReducer'
import { useDispatch, useSelector } from 'react-redux'

const iconComponents = {
    GitHubIcon,
    LinkedInIcon,
    PhoneAndroidIcon,
    LocationOnIcon,
    EmailIcon,
    CalendarMonthIcon,
}

const iconColors = {
    GitHubIcon: 'inherit',
    LinkedInIcon: 'rgb(0 119 181)', // You can customize this color
    PhoneAndroidIcon: 'rgb(233 59 129)',
    LocationOnIcon: 'rgb(106 181 185)',
    EmailIcon: 'rgb(253 117 144)',
    CalendarMonthIcon: 'rgb(193 124 235)',
}

const Contactos = ({ contacto, last }) => {
    const languaje = useSelector((state) => state.languaje)
    const IconComponent = iconComponents[contacto.icon]
    console.log(contacto)
    console.log(last)

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                paddingTop: '0.625rem',
                paddingBottom: '0.625rem',
                borderBottomWidth: last ? '1px' : '0px',
                borderBottomStyle: 'solid',
                borderBottomColor: 'rgb(227 227 227)',
            }}
        >
            <Box
                sx={{
                    height: '2.5rem',
                    width: '2.5rem',
                    background: 'rgb(255, 255, 255)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: iconColors[contacto.icon],
                }}
            >
                {IconComponent && <IconComponent />}
            </Box>
            <Box>
                <Typography
                    paddingLeft="0.3rem"
                    variant="h4"
                    fontSize="0.75rem"
                    fontWeight="600"
                    fontFamily="Poppins,sans-serif"
                    color={'rgb(68 86 108)'}
                >
                    {
                        contacto.subtipo.filter(
                            (text) => text.lang === languaje
                        )[0].description
                    }
                </Typography>
                <Typography paddingLeft="0.3rem">
                    {contacto.description}
                </Typography>
            </Box>
        </Box>
    )
}

const RedSocial = ({ contacto }) => {
    const IconComponent = iconComponents[contacto.icon]

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0.5rem',
                height: '2.5rem',
                width: '2.5rem',
                background: 'rgb(243, 246, 246)',
            }}
        >
            <a
                style={{ display: 'flex', color: iconColors[contacto.icon] }}
                href={contacto.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {IconComponent && <IconComponent />}
            </a>
        </Box>
    )
}

export { Contactos, RedSocial }
