import { configureStore } from '@reduxjs/toolkit'

import languajeReducer from './reducers/languajeReducer'
import menuelementReducer from './reducers/menuelementReducer'
import themeReducer from './reducers/themeReducer'

const store = configureStore({
    reducer: {
        languaje: languajeReducer,
        activeElement: menuelementReducer,
        activeTheme: themeReducer
    },
})

export default store
