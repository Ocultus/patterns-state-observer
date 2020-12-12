const {computed, observable, makeObservable} = require("mobx");

class ToDoStore {
    todos = [];

    constructor() {
        makeObservable(this, {
            todos: observable,
            finishedToDo: computed,

        })
    }

    get finishedToDo() {
        return this.todos.filter(todo => todo.finished === true)
    }

    get report() {
        if (this.todos.length === 0) {
            return ""
        }
        const nextTodo = this.todos.find(todo => todo.finished === false);
        return `${nextTodo ? "Следующая задача: " + nextTodo.task : "Пока нет задач"}`
    }

    add(task) {
        this.todos.push({
            task: task,
            finished: false
        });
    }

}

export const toDoStore = new ToDoStore()

