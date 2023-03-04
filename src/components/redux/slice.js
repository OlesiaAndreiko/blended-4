const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.items = [...state.items, action.payload]
        },
        deleteTodo(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const { addTodo, deleteTodo } = todosSlice.actions;
export const todoReducer = todosSlice.reducer; 