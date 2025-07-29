import styles from "./Todo.module.css"
import React from "react"

function TodoFilter ({setFilter}:any) {
    const [active, setActive] = React.useState('all')
    const handleClick = (type:string) => {
        setFilter(type)
        setActive(type)
    }
    return (
        <div className={styles.filterBar}>
            <button className={active==='all'?styles.filterBtn+' '+styles.active:styles.filterBtn} onClick={() => handleClick('all')}>全部</button>
            <button className={active==='active'?styles.filterBtn+' '+styles.active:styles.filterBtn} onClick={() => handleClick('active')}>未完成</button>
            <button className={active==='completed'?styles.filterBtn+' '+styles.active:styles.filterBtn} onClick={() => handleClick('completed')}>已完成</button>
        </div>
    )
}

export default TodoFilter