import { useState } from "react"
import styles from "./Todo.module.css"

interface AddTodoProps {
    addTodo: (text:string) => void
}

function AddTodo ({addTodo}:AddTodoProps ) {
    const [text,setText] = useState('')
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if (text.trim()===''){
            return 
        }
        addTodo(text)
        setText('')
    }
    return (
        <form className={styles.addForm} onSubmit={handleSubmit}>
            <input 
                className={styles.addInput}
                type="text"
                placeholder="请输入待办事项..."
                value = {text}
                onChange={(e) => setText(e.target.value) } />
            <button className={styles.addBtn}>新建</button>
        </form>
    )
}

export default AddTodo