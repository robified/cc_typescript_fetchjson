import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

// Interface is used to define the structure of an object
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// this is asynchronous, so this will receive a promise
axios.get(url).then(response => {
    // Reponse.data has properties of: id, title, completed
    // console.log(response.data);

    // apply Todo interface
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished: ${completed}
`);
};
