import { Box, Typography } from '@mui/material'
import {  useSelector } from 'react-redux'

const paragraphs = [
    {
        lang: 'ESP',
        text: [
            'Soy Martin Ponce, y poseo un título de "Técnico Universitario en Sistemas Informáticos" de la UTN, donde adquirí una sólida base en varios aspectos de los sistemas de información, incluida la programación orientada a objetos, la gestión de bases de datos, los protocolos de red y la competencia en múltiples lenguajes de programación.',
            'Ampliando esta base académica, he completado con éxito el curso "Full Stack Open" ofrecido por la Universidad de Helsinki. Este prestigioso programa abarca de manera integral aspectos esenciales del desarrollo web moderno, reforzando mi compromiso de convertirme en un desarrollador full stack competente.',
            'A lo largo de mi recorrido educativo, he abordado las complejidades tanto del desarrollo front-end como del back-end. He trabajado en profundidad con tecnologías fundamentales como HTML, CSS, JavaScript y React. Mi experiencia incluye la creación de interfaces de usuario dinámicas e interactivas, utilizando la gestión de estados, Redux y React hooks para mejorar las experiencias de los usuarios.',
            'Además, he obtenido experiencia práctica en la creación y uso de APIs RESTful, asegurando una comunicación fluida entre los componentes front-end y back-end. Mi capacidad para diseñar APIs confiables e integrarlas armónicamente contribuye a la funcionalidad general de las aplicaciones web.',
        ],
    },{
      lang: 'ENG',
      text: [
          'I am Martin Ponce, and I hold a degree in "Technical University in Computer Systems" from UTN, where I gained a solid foundation in various aspects of information systems, including object-oriented programming, database management, network protocols, and proficiency in multiple programming languages.',
          'Expanding on this academic foundation, I have successfully completed the "Full Stack Open" course offered by the University of Helsinki. This prestigious program comprehensively covers essential aspects of modern web development, reinforcing my commitment to becoming a competent full-stack developer.',
          'Throughout my educational journey, I have tackled the complexities of both front-end and back-end development. I have delved deep into fundamental technologies such as HTML, CSS, JavaScript, and React. My experience includes creating dynamic and interactive user interfaces, using state management, Redux, and React hooks to enhance user experiences.',
          'Furthermore, I have gained practical experience in creating and using RESTful APIs, ensuring smooth communication between front-end and back-end components. My ability to design reliable APIs and seamlessly integrate them contributes to the overall functionality of web applications.',
      ],
  },
]

function Home() {
    const languaje = useSelector((state) => state.languaje)

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: '3.5rem',
                    paddingRight: '3.5rem',
                    paddingTop: '3rem',
                    paddingBottom: '3rem',
                }}
            >
                <Box sx={{ display: 'flex' }}>
                    <Typography variant="h2" fontSize="2.5rem" fontWeight="700">
                        {languaje === 'ESP' ? 'Acerca de mí' : 'About me'}
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
                        textAlign: 'justify',
                        paddingTop: '1rem',
                        textJustify: 'inter-word',
                        opacity: '0.95',
                    }}
                >
                    {paragraphs
                        .filter((element) => element.lang === languaje)[0].text.map((paragraph, i) => {return (<p key={i}>{paragraph}</p>)})}

                </Box>
            </Box>
        </Box>
    )
}

export default Home
