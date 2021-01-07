import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TODO_GET_ALL } from '../redux/todo-actions';

const TodoPage: React.FC<unknown> = () => {
    const todos = useSelector(({ todo }: any) => todo.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: TODO_GET_ALL });
    }, []);

    return (
        <div>
            {JSON.stringify(todos)}
        </div>
    );
};

export default TodoPage;
