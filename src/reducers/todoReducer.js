import ACTION from "../actions/actionType"

const initialState = {
    data:[]
}
export default (state = initialState, action) => {
    const {type,payload}= action;
    let newState;
    switch (type) 
    {
    case ACTION.ADD_TODO:
        newState = state.data
        // console.log(newState)
        newState.push({id:Math.floor(Math.random()*100),todo: payload})
        return {...state}
    case ACTION.DEL_TODO:
        console.log(payload) 
         newState = state.data;
        newState = newState.filter(i=>i.todo!==payload)
        state.data= newState;
        return {...state}
    case ACTION.UPD_TODO:
        const updatedTodos = state.data.map(data=>{
            if(data.id===payload.id)
            {
                data.todo = payload.todo
                console.log(data.todo)
            }
        })
        return {...state}
    break;
    default:
        return state
    }
}
