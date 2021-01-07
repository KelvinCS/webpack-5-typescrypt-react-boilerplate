import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import todoReducer from './features/todo/presentation/redux/todo-reducer';

const store = createStore(combineReducers({
    todo: todoReducer
}));

export const App = (): React.ReactElement => (
    <Provider store={store}>

    </Provider>
);
