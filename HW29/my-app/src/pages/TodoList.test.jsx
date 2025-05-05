import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import userEvent from '@testing-library/user-event'
import { vi, test } from 'vitest';
import TodoList from './TodoList';

vi.mock('../components/Theme', () => ({
    useTheme: vi.fn().mockReturnValue({ theme: 'light' }),
}));


describe('TodoList Component', () => {
    test('renders the ToDoList heading', () => {
        render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );

        const heading = screen.getByRole('heading', { name: /ToDoList/i });
        expect(heading).toBeInTheDocument();
    });
    test('enter in input as letters as numbers', async () => {

        render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );
        const input = screen.getByPlaceholderText('Enter task');
        await userEvent.type(input, 'Make a page 123');

        expect(input.value).toBe('Make a page 123');

    });
    test('error after empty input', () => {

        render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        )


        expect(screen.queryByTestId('error-message')).toBeNull();

        const button = screen.getByText(/Add/i);
        fireEvent.click(button);
        const errorMessage = screen.getByTestId('error-message');
        expect(errorMessage).toHaveTextContent('This field can not be empty')
    });
    
    test('submitting text creates new element with entered text', async () => {
        render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        )
        const input = screen.getByPlaceholderText('Enter task');
        const button = screen.getByText(/Add/i);
        await userEvent.type(input, 'Some to do');
        fireEvent.click(button);

        const newItem = screen.getByText('Some to do');
        expect(newItem).toBeInTheDocument();
    });
    test('should clear error onBlur if field is not empty',()=>{
        render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        )
        const input = screen.getByPlaceholderText('Enter task');
        fireEvent.change(input,{target:{value:''}});

        fireEvent.blur(input);

        const errorMessage = screen.queryByText('This field can not be empty');
        expect(errorMessage).toBeNull()


    })
});
