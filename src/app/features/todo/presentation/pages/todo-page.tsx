import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TODO_GET_ALL } from '../redux/todo-actions';
import { Container, Box, SimpleGrid, Text } from '@rockr/rock-ui';
import { ITodo } from '../../domain/entities/todo';

const TodoPage: React.FC<unknown> = () => {
    const todos: ITodo[] = useSelector(({ todo }: any) => todo.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: TODO_GET_ALL });
    }, []);

    return (
        <Container maxW='100%' pt={10}>
            <SimpleGrid columns={4} spacing={10}>
                {todos.map((todo) => (
                    <Box p={4} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Text>{todo.title}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default TodoPage;
