import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'




function Resume() {
    const languaje = useSelector((state) => state.languaje)
 

    return (
        <Box>
        <Box sx = {{paddingLeft:'3.5rem', paddingRight:'3.5rem', paddingTop:'3rem', paddingBottom:'3rem'}}>
        <Typography variant='h2' fontSize='2.5rem' fontWeight='700'> {languaje === 'ESP' ? 'Curriculum' : 'Resume'
                   } </Typography>
        </Box>
    </Box>
    )
}

export default Resume