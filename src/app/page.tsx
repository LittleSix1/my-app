
"use client"
import AddTodo from "@/components/AddTodo";
import TodoFilter from "@/components/TodoFilter";
import TodoList from "@/components/TodoList";
import { Todo } from "@/types"
import { useState } from "react";
import styles from "./page.module.css"

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState('all')

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const toggleTodo = (id: number) => {
    const newTodos = todos.map(todo => {
      if (todo.id == id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodos)
  }

  const getFilteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed)
      case 'active':
        return todos.filter(todo => !todo.completed)
      default:
        return todos;
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>Todo List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        <TodoFilter setFilter={setFilter} />
      </div>
    </div>
  );



}
