
const categoriesInitialState = [
        {"name":"react","path":"react"},
        {"name":"redux","path":"redux"},
        {"name":"udacity","path":"udacity"}
    ];

const categories = (state = categoriesInitialState, action) => {
    switch(action.type){

        default:
            return state;
    }
}

export default categories;