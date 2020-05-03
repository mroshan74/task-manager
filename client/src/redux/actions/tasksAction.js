import axios from 'axios'

//----------------------set tasks to store from server

export const getTasks = (data) => {
    return { type: 'SET_TASKS', payload:data}
}

export const startGetTasks = () => {
    return(dispatch) => {
        axios.get('/tasks')
            .then((res) => {
                const tasks = res.data
                console.log('[PROMISE-get]',tasks)
                dispatch(getTasks(tasks))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

//----------------------add task detail to the server database

export const addTask = (data) => {
    return { type: 'ADD_TASK' , payload: data }
}

export const startAddTask = (data) => {
    return(dispatch) => {
        axios.post('/tasks',data)
            .then((res)=>{
                console.log('[PROMISE-addTask]', res.data)
                const task = res.data
                dispatch(addTask(task))
                alert('task successfully added')
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

//---------------------- delete task 

export const deleteTask = (id) => {
    return { type: 'DELETE_TASK', payload: id}
}

export const startDeleteTask = (id) => {
    return(dispatch) => {
        axios.delete(`tasks/${id}`)
            .then((res) => {
                console.log('[PROMISE-delete]',res.data)
                dispatch(deleteTask(id))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

//-------------------------update task

export const updateStatus = (id,data) => {
    return { type: 'UPDATE_TASK', payload: { id, data } }
}

export const startUpdateStatus = (id , status) => {
    return(dispatch) => {
        axios.put(`/tasks/${id}`,status)
            .then((res) => {
                console.log('[PROMISE-update]',res.data)
                const upData = res.data
                dispatch(updateStatus(id,upData))
                alert('status updated')
            })
            .catch((err) => {
                console.log(err)
            })
    }
}