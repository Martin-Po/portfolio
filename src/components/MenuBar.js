import { Box, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import DescriptionIcon from '@mui/icons-material/Description'
import WorkIcon from '@mui/icons-material/Work'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import { useDispatch, useSelector } from 'react-redux'

import {changeActiveElement} from '../reducers/menuelementReducer'

const iconComponents = {
    HomeIcon,
    DescriptionIcon,
    WorkIcon,
    PermContactCalendarIcon,

    // Map other icon names to their respective components
}

const ObjMenuOptions = [
    {
        id: 1,
        icon: 'HomeIcon',
        description:'Home',
        text: [
            { lang: 'ESP', description: 'Inicio' },
            { lang: 'ENG', description: 'Home' },
        ],
    },
    {
        id: 2,
        icon: 'DescriptionIcon',
        description:'Resume',
        text: [
            { lang: 'ESP', description: 'Resumen' },
            { lang: 'ENG', description: 'Resume' },
        ],
    },
    {
        id: 3,
        icon: 'WorkIcon',
        description:'Works',
        text: [
            { lang: 'ESP', description: 'Trabajos' },
            { lang: 'ENG', description: 'Works' },
        ],
    },
    {
        id: 4,
        icon: 'PermContactCalendarIcon',
        description:'Contact',
        text: [
            { lang: 'ESP', description: 'Contacto' },
            { lang: 'ENG', description: 'Contact' },
        ],
    },
]

function MenuBar() {
    const languaje = useSelector((state) => state.languaje)
    const activeElement = useSelector((state) => state.activeElement)

    const dispatch = useDispatch()

    const handleActiveElementChange = (selection) => {
        // Dispatch the action
        dispatch(changeActiveElement(selection));   
      }

    return (
        <Box
            sx={{
                display: 'flex',
                width: '525px',
                padding: '30px',
                marginLeft: 'auto',
                marginBottom: '2.5rem',
                backgroundColor: 'background.default',
                borderRadius: '20px',
                '@media (max-width:1024px)': {
                    display: 'none',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    justifyContent: 'space-around',
                    width: '525px',
                    height: '80px',
                    gridTemplateColumns: 'repeat(1, 5fr)', // Switch to 2 columns on tablets
                }}
            >
                {ObjMenuOptions.map((opcion) => {
                    const IconComponent = iconComponents[opcion.icon]
                    return (
                        <Box
                            key={opcion.id}
                            onClick={() => handleActiveElementChange(opcion.description)} 
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '80px',
                                height: '80px',
                                marginLeft: '10px',
                                marginRight: '10px',
                                backgroundColor: activeElement !== opcion.description ? 'primary.main': 'secondary.main',
                                color: activeElement === opcion.description && 'white',
                                borderRadius: '0.5rem',
                                transition: '0.3s', // Add a smooth transition effect
                                '&:hover': {
                                    cursor:'pointer',
                                    backgroundColor:'secondary.main',
                                    color: 'white',
                                },
                            }}
                        >
                            {IconComponent && <IconComponent key={opcion.id} />}
                            <Typography>
                                {
                                    opcion.text.filter(
                                        (text) => text.lang === languaje
                                    )[0].description
                                }
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default MenuBar
