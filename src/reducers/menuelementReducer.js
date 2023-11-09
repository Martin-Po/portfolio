import { createSlice } from '@reduxjs/toolkit'

const activeElementSlice = createSlice({
    name: 'activeElement',
    initialState: 'Home',

    reducers: {
        setactiveElement(state, action) {
            return action.payload
        },
    },
})

const { setactiveElement } = activeElementSlice.actions

export const changeActiveElement = (selection) => {

    return async (dispatch) => {
        try {
            dispatch(setactiveElement(selection))
        } catch (error) {
            console.error('Error changing active element', error)
        }
    }

}

export default activeElementSlice.reducer
