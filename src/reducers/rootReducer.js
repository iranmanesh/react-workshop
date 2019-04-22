const initialState = {
    posts: [
    ],
}


const rootReducer = (state = initialState, action) => {
    console.log('action', action);
    if (action.type === 'ADD_POST') {
        return {
            ...state,
            posts: [...state.posts,{
                name: action.post.name, img: "/post1.jpg", caption: 'this is the best pic',
                likes: 3000,
            }]
        }
    }
    return state;
}

export default rootReducer;