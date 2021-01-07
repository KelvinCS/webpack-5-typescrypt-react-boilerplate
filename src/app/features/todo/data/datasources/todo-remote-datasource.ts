import { ITodo } from '../../domain/entities/todo';
import axios from 'axios';

const todoRemoteDatasource = {
    getAllTodos(): Promise<ITodo[]> {
        return axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(({ data }) => data)
    }
}

export default todoRemoteDatasource;
