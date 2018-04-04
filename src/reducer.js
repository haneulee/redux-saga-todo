export function reducer(state = {todoList: []}, action) {
    switch (action.type) {
        case "ADD_TODO":
            return Object.assign({}, state, {
                todoList: state.todoList.concat({
                    id: action.id,
                    text: action.text,
                    completed: false
                })
            });
        case "REMOVE_TODO":
            const todoList = state.todoList.filter(todoList => todoList.id !== +action.id);
            return {todoList};
        default:
            return state;
    }

}