


import { Todo } from "@/types"
import TodoItem from "./TodoItem";
import styles from "./Todo.module.css"

interface TodoListProps {
    todos:Array<Todo>;
    toggleTodo: (id:number) => void;
    deleteTodo: (id:number) => void;
}

function TodoList ({todos,toggleTodo,deleteTodo}:TodoListProps) {
    return (
        <ul className={styles.todoList}>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo = {todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            ))}
        </ul>
    )
}

export default TodoList