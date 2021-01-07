import { TODO_GET_ALL, TODO_GET_ALL_ERROR, TODO_GET_ALL_SUCCESS } from './todo-actions';

const initialState = {
    todos: [],
    error: null,
    loading: false,
};

const todoReducer = (state: any = initialState, action: any): any => {
    switch(action.type) {

        case TODO_GET_ALL:
            return { ...state, loading: true }

        case TODO_GET_ALL_ERROR:
            return { ...state, loading: false, error: action.payload }

        case TODO_GET_ALL_SUCCESS:
            return { ...state, loading: false, todos: action.payload, error: null }

        default:
            return state;
    }
}

export default todoReducer;
