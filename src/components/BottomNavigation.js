import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import DescriptionIcon from '@mui/icons-material/Description'
import WorkIcon from '@mui/icons-material/Work'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'

import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveElement } from '../reducers/menuelementReducer'

const iconComponents = {
    HomeIcon,
    DescriptionIcon,
    WorkIcon,
    PermContactCalendarIcon,
}

const ObjMenuOptions = [
    {
        id: 1,
        icon: 'HomeIcon',
        description: 'Home',
        text: [
            { lang: 'ESP', description: 'Inicio' },
            { lang: 'ENG', description: 'Home' },
        ],
    },
    {
        id: 2,
        icon: 'DescriptionIcon',
        description: 'Resume',
        text: [
            { lang: 'ESP', description: 'Resumen' },
            { lang: 'ENG', description: 'Resume' },
        ],
    },
    {
        id: 3,
        icon: 'WorkIcon',
        description: 'Works',
        text: [
            { lang: 'ESP', description: 'Trabajos' },
            { lang: 'ENG', description: 'Works' },
        ],
    },
    {
        id: 4,
        icon: 'PermContactCalendarIcon',
        description: 'Contact',
        text: [
            { lang: 'ESP', description: 'Contacto' },
            { lang: 'ENG', description: 'Contact' },
        ],
    },
]

function LabelBottomNavigation() {
    const languaje = useSelector((state) => state.languaje)
    const activeElement = useSelector((state) => state.activeElement)

    const dispatch = useDispatch()

    const handleChange = (event, newValue) => {
        dispatch(changeActiveElement(newValue))
    }

    return (
        <Paper
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display:{ xs: 'flex', md: 'none' }, justifyContent: 'space-around' }}
            elevation={3}
        >
            <BottomNavigation
                sx={{ width: 500 }}
                value={activeElement}
                onChange={handleChange}
            >
                {ObjMenuOptions.map((opcion) => {
                    const IconComponent = iconComponents[opcion.icon]
                    return (
                        <BottomNavigationAction
                        key = {opcion.id}
                            label={
                                opcion.text.filter(
                                    (text) => text.lang === languaje
                                )[0].description
                            }
                            value={opcion.description}
                            icon={
                                IconComponent && (
                                    <IconComponent key={opcion.id} />
                                )
                            }
                        />
                    )
                })}
            </BottomNavigation>
        </Paper>
    )
}

export default LabelBottomNavigation
