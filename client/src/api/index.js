import axios from "axios";
//Api -> Index
const url = 'http://localhost:5000/posts';

export const fetchPosts = () =>{
    return axios.get(url);
}

export const createPost = (newPost) => axios.post(url , newPost)
export const updatePost = (id , updatedPost) => axios.patch(`${url}/${id}` , updatedPost)