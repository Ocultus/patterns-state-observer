import {observer} from "mobx-react-lite";

export const ToDoList = observer(({store}) => {
    const onNewTodo = () => {
        store.add(prompt('Введите новую задачу'), '');
    }

    return (<div>
        {store.report}
        <ul>
            {store.todos.map((todo, idx) => <ToDoView todo={todo} key={idx}/>)}
        </ul>
        <button onClick={onNewTodo}>
            Добавить задачу
        </button>
        <small>(кликните два раза, чтобы изменить задачу)</small>
    </div>)
})

const ToDoView = observer(({todo}) => {
    const onToggleCompleted = () => todo.finished = !todo.finished
    const rename = () => todo.task = prompt('Task name', todo.task) || todo.task
    return (<li onDoubleClick={rename}>
            <input type='checkbox' checked={todo.finished} onChange={onToggleCompleted}/>
            {todo.task}
        </li>
    );
})