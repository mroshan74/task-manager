const initialStateTasks = []

const taskReducer = (state = initialStateTasks, action) => {
    switch(action.type){
        case 'SET_TASKS': {
            return state.concat(action.payload)
        }
        case 'ADD_TASK':{
            return state.concat(action.payload)
        }
        case 'DELETE_TASK': {
            return state.filter(task => task._id!==action.payload)
        }
        case 'UPDATE_TASK': {
            return state.map(task => {
                if(task._id===action.payload.id){
                    return Object.assign({},task,action.payload.data)
                }
                else{
                    return Object.assign({},task)
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default taskReducer