import { takeEvery, put, call } from 'redux-saga/effects';
import { TODO_GET_ALL, TODO_GET_ALL_SUCCESS } from './todo-actions';
import getAllTodos from '../../domain/usecases/getAllTodos';

export function* fetchAllTodos(): any {
    const todos = yield call(getAllTodos);

    yield put({ type: TODO_GET_ALL_SUCCESS, payload: todos });
}

export function* watchGetAllTodos(): any {
  yield takeEvery(TODO_GET_ALL, fetchAllTodos)
}
