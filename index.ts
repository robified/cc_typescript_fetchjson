import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

// this is asynchronous, so this will receive a promise
axios.get(url).then(response => {
    console.log(response.data);
});
