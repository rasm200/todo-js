import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        //this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos ));

    }
    cargarLocalStorage(){

        if(localStorage.getItem('todo')){
            this.todos = JSON.parse( localStorage.getItem('todo') );
        }
        else
        {
            this.todos = [];
        }

        //this.todos = this.todos.map ( obj => Todo.fromJson( obj ));
        /**La línea seguiente hace lo misma que la anterior, cuando la referencia es un objeto de la colección no hace falta mencionarlos en los criterios */
        this.todos = this.todos.map( Todo.fromJson );

    }
}