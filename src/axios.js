import axios from 'axios';
// 1f07eb22c0783d70ef8020c41c703ac3

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;