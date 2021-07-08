import axios from 'axios';



const axiosInstance = axios.create ({
     baseURL: 'https://jsonplaceholder.typicode.com/'
})

const getUsers = () => axiosInstance('/users');
const getUserPosts = (id) => axiosInstance('/users/' + id + '/posts');
const getPosts = () => axiosInstance('/posts');
const getPost = (id) => axiosInstance('/posts/' + id);
const getPostComment = (id) => axiosInstance('/posts/' + id);
const getComments = () => axiosInstance('/comments');

export{getUsers, getUserPosts, getPost , getPosts, getPostComment, getComments}