import './styles.css';

/*Cuando no se menciona el nombre del archivo y solo se hace colocando el nombre de la carpeta, javascript buscará un aerchivo llamado index.js, por defecto */
import {Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

//todoList.todos.forEach( todo => crearTodoHtml( todo ));
/* Esta linea es equivalente a la anterior, cuando se pasa por referencia un objeto de la colección, sin filtros y nada, se puede utilizar de la siguiente manera */
todoList.todos.forEach( crearTodoHtml );

const newTodo = new Todo('Aprender Javasccript');
newTodo.imprimirClase();
todoList.todos[2].imprimirClase();



console.log( 'todos', todoList.todos );

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

// export const todoList = new TodoList();

//const tarea    = new Todo('Aprender JavaScript !!!');

//todoList.nuevoTodo( tarea );

//tarea.completado = false;

//console.log(todoList);

//crearTodoHtml( tarea );

