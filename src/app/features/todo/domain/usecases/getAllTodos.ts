import { ITodo } from '../entities/todo';
import todoRepository from '../../data/repositories/todo-repository';

const getAllTodos = (): Promise<ITodo[]> => todoRepository.getAllTodos();

export default getAllTodos;
