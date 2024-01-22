import { Box, Grid, Typography, TextField, Button, Alert } from '@mui/material'
import { useSelector } from 'react-redux'
import SendIcon from '@mui/icons-material/Send'
import loginService from '../services/login'
import messagesService from '../services/messages'

import { useField } from '../hooks/useField'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'


function Contact() {
    const languaje = useSelector((state) => state.languaje)
    const name = useField('text')
    const mail = useField('text')
    const content = useField('text')

    const [notification, setnotification] = useState()

    const checkMessage = () => {
        if (
            name.inputProps.value === '' ||
            mail.inputProps.value === '' ||
            content.inputProps.value === ''
        ) {
            setnotification(
                languaje === 'ESP'
                    ? {
                          type: 'error',
                          content: 'Faltan completar campos obligatorios',
                      }
                    : { type: 'error', content: 'Required fields are missing' }
            )
            return false
        }
        if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                mail.inputProps.value
            )
        ) {
            setnotification(
                languaje === 'ESP'
                    ? {
                          type: 'error',
                          content: 'El mail ingresado no es valido',
                      }
                    : { type: 'error', content: 'Provided email is not valid' }
            )
            return false
        }

        return true
    }

    const sendMessage = async () => {
        if (checkMessage()) {

            try {
                const user = await loginService.login({
                    username: 'usuario4',
                    password: 'prueba',
                })
                messagesService.setToken(user.token)
                const sentData = {
                    name: name.inputProps.value,
                    mail: mail.inputProps.value,
                    content: content.inputProps.value,
                }
                const newMessage = await messagesService.create(sentData)
                setnotification(
                    languaje === 'ESP'
                        ? {
                              type: 'success',
                              content: 'Su mensaje ha sido enviado con éxito',
                          }
                        : {
                              type: 'succes',
                              content: 'You message has been sent succesfully',
                          }
                )
            } catch (exception) {
                setnotification(
                    languaje === 'ESP'
                        ? {
                              type: 'error',
                              content:
                                  'Hubo un error al querar enviar su mensaje',
                          }
                        : {
                              type: 'error',
                              content:
                                  'There was an unespected error while sending your message',
                          }
                )
            }
        }

        setTimeout(() => setnotification(), 5000)
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

            <title>Martin Ponce - Contácteme</title>
            <meta name="description" content="Póngase en contacto conmigo." />
            <link rel="canonical" href="/portfolio/Contact" />
            
            <meta property="og:title" content="Martin Ponce - Contácteme"/>
        <meta property="og:description" content="Póngase en contacto conmigo."/>
        <meta property="og:url" content="https://martin-po.github.io/portfolio/Contact" />
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
                    {languaje === 'ESP' ? 'Contacto' : 'Contact'}
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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'primary.main',
                    marginLeft: '1.25rem',
                    marginRight: '1.25rem',
                    marginBottom: '1.5rem',
                    borderRadius: '0.5rem',
                    paddingLeft: '1.25rem',
                    paddingRight: '0.75rem',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '1.15rem',
                        fontWeight: '600',
                        marginBottom: '0.75rem',
                    }}
                >
                    {languaje === 'ESP'
                        ? 'Pongase en contacto conmigo'
                        : 'Get in contact with me'}
                </Typography>
                {notification && (
                    <Alert
                        severity={notification.type}
                        sx={{ marginBottom: '0.5rem' }}
                    >
                        {notification.content}
                    </Alert>
                )}
                <Grid container>
                    <Grid item xs={12} md={6} sx={{ paddingLeft: '0px' }}>
                        <TextField
                            required
                            {...name.inputProps}
                            sx={{
                                marginBottom: '1.5rem',
                                paddingRight: {
                                    xs: '0',
                                    md: '1.25rem',
                                },
                            }}
                            fullWidth
                            placeholder="Name"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            marginBottom: '1.5rem',
                            paddingLeft: {
                                xs: '0',
                                md: '1.25remm',
                            },
                        }}
                    >
                        <TextField
                            required
                            {...mail.inputProps}
                            fullWidth
                            placeholder="Email"
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ paddingLeft: '0px' }}>
                        <TextField
                            {...content.inputProps}
                            required
                            multiline
                            fullWidth
                            rows={8}
                            placeholder="Message"
                        />
                    </Grid>
                </Grid>
                <Button
                    onClick={sendMessage}
                    sx={{
                        marginTop: '1.5rem',
                        paddingTop: '0.75rem',
                        paddingBottom: '0.75rem',
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                        borderRadius: '35px',
                        fontSize: '1.125rem',
                        backgroundColor: 'secondary.main',
                    }}
                    variant="contained"
                    endIcon={
                        <SendIcon sx={{ color: 'secondary.contrastText' }} />
                    }
                >
                    <Typography sx={{ color: 'secondary.contrastText' }}>
                        {languaje === 'ESP' ? 'Enviar mensaje' : 'Send Message'}
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}

export default Contact
