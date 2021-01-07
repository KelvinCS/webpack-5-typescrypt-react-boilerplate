import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { watchGetAllTodos } from './features/todo/presentation/redux/todo-saga';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './features/todo/presentation/redux/todo-reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        todo: todoReducer
    }),
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(watchGetAllTodos);

export const App = (): React.ReactElement => (
    <Provider store={store}>

    </Provider>
);
