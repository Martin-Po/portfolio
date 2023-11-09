import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import { Paper } from '@mui/material'
import AppBar from './components/AppBar'
import MenuBar from './components/MenuBar'
import CssBaseline from '@mui/material/CssBaseline'
import GeneralInformation from './components/GeneralInformation'
import Background from './images/Background.png';
import Home from './components/Home'
import Resume from './components/Resume'
import Works from './components/Works'
import Contact from './components/Contact'
import { useSelector } from 'react-redux'


const App = () => {

    const activeElement = useSelector((state) => state.activeElement)


    const iconComponents = {
        Home,
        Resume,
        Works,
        Contact,
    }

    const SelectedElement = iconComponents[activeElement]

    return (
        <div style={{ backgroundImage: `url(${Background})`,  backgroundRepeat:"no-repeat" , backgroundSize: "cover"}} >
            <CssBaseline />
            <AppBar />
            <Grid
                container
                spacing={{ xs: 0, md: 4 }}
                sx={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '1280px',
                    marginTop: '220px',
                    
                    '@media (max-width:1300px)': {
                        width: '992px',
                    },
                    '@media (max-width:1024px)': {
                        width: '100%',
                    },  
                }}
            >
                <Grid xs={12} md={4} sx={{ paddingLeft: '0px' }}>
                    <GeneralInformation/>
                </Grid>
                <Grid xs={12} md={8} sx={{ paddingRight: '0px' }}>
                    <MenuBar/>
                    <Paper sx={{minHeight: '100vh', borderRadius: '20px'}}>
                    <SelectedElement/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default App
