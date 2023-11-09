import { configureStore } from '@reduxjs/toolkit'

import languajeReducer from './reducers/languajeReducer'
import menuelementReducer from './reducers/menuelementReducer'

const store = configureStore({
    reducer: {
        languaje: languajeReducer,
        activeElement: menuelementReducer,
    },
})

export default store
