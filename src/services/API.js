
// let getPosts = () => {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(value => value.json())
// };

// let getPost = (id) => {
//     return fetch('https://jsonplaceholder.typicode.com/posts' + id)
//         .then(value => value.json());
// };
//
// export{getPosts, getPost}

import axios from 'axios'

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

const getPosts = () => axiosInstance('posts');
const getPost = (id) => axiosInstance('posts/' + id);
export {getPosts, getPost};