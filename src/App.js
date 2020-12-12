import './App.css';
import {toDoStore} from "./ToDoStore";
import {ToDoList} from "./ToDoList";

function App() {
    return (
        <div class='wrapper'>
            <h1>Список дел</h1>
            <body>
            <ToDoList store={toDoStore}/>
            </body>
        </div>
    )
}

export default App;
