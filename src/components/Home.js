import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    const languaje = useSelector((state) => state.languaje)

    return (
        <Box>
            <Box
                sx={{
                    display:'flex',
                    paddingLeft: '3.5rem',
                    paddingRight: '3.5rem',
                    paddingTop: '3rem',
                    paddingBottom: '3rem',
                }}
            >
                <Typography variant="h2" fontSize="2.5rem" fontWeight="700">
                    {' '}
                    {languaje === 'ESP' ? 'Acerca de mí' : 'About me'}{' '}
                </Typography>
                <Box sx={{width:'12rem', height:'0.125rem', borderRadius:'0.375rem', background:'black', left:'2rem', position:'relative', display: { xs: 'none', md: 'block' },  }}></Box>
            </Box>
        </Box>
    )
}


export default Home
