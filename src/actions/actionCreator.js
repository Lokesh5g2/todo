import ACTION from './actionType'

export const addTodo = (payload) =>({
    type: ACTION.ADD_TODO,
    payload:payload
})
export const delTodo = (todo) =>({
    type:ACTION.DEL_TODO,
    payload:todo
})
export const updTodo   = (id,todo) => ({
    type: ACTION.UPD_TODO,
    payload : {todo,id}
})