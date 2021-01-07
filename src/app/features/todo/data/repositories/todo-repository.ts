import { ITodo } from '../../domain/entities/todo';
import todoRemoteDatasource from '../datasources/todo-remote-datasource';

const todoRepository = {
    getAllTodos(): Promise<ITodo[]> {
        return todoRemoteDatasource.getAllTodos();
    }
}

export default todoRepository;
