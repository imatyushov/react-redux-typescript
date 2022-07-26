import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchTodos} from "../store/action-creators/todo";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const {page, error, loading, todos, limit} = useTypedSelector(state => state.todos)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идет загрузка списка дел...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div style={{fontSize: 30}}>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            <div style={{display: "flex"}}>
                {pages.map(p =>
                    <div
                        onClick={() => setTodoPage(p)}
                        style={{border:p === page ? '2px solid black' : '1px solid gray', padding: 10}}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList