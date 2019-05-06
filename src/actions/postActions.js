import axios from 'axios';

export const addPost = (post) => {
    return {
        type: "ADD_POST",
        post
    }
}


export const getData = () => {
    return function (dispatch) {
        return axios.get('https://jsonplaceholder.typicode.com/posts').then(data => {
            dispatch({
                type: "DATA_LOADED",
                data:data.data
            })
        });
    }
}