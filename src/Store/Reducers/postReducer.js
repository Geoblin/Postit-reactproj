const initState = {
    posts: [
        { id: 1, title: 'post one', content: 'thisis post one' },
        { id: 2, title: 'post two', content: 'thisis post two' },
        { id: 3, title: 'post three', content: 'thisis post three' },
        { id: 4, title: 'post four', content: 'thisis post four' },
    ],
};


const postReducer = (state = initState) => {
    return state
};

export default postReducer;