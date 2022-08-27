import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user=> user.id!==action.payload.id)
        },
        populateUsers: (state, action) => {
            state.users = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, populateUsers } = usersSlice.actions

export default usersSlice.reducer