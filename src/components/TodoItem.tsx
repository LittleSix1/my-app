import styles from "./Todo.module.css"

function TodoItem ({todo,toggleTodo,deleteTodo}:any) {
    return (
        <li className={styles.todoItem + (todo.completed ? ' ' + styles.completed : '')}>
            <span className={styles.todoText}>{todo.text}</span>
            <div className={styles.todoActions}>
                <button className={styles.toggleBtn} onClick={() => toggleTodo(todo.id)}>
                    {todo.completed ? '恢复' : '完成'}
                </button>
                <button className={styles.deleteBtn} onClick={() => deleteTodo(todo.id)}>
                    删除
                </button>
            </div>
        </li>
    )
}

export default TodoItem