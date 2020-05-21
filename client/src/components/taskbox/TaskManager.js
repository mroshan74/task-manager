import React from 'react'
import TaskTable from './TaskTable'
import AddTask from './AddTask'
import { startDeleteTask, startUpdateStatus } from '../../redux/actions/tasksAction'
import { connect } from 'react-redux'

class TaskManager extends React.Component {
    state = {
        search:''
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleRemove = (id) =>{
        const confirm = window.confirm('Are you sure ?')
        if(confirm){
            this.props.dispatch(startDeleteTask(id))
        }
    }
    handleCheck = (id,stat) => {
        const status = {completed : !stat}
        this.props.dispatch(startUpdateStatus(id,status))
    }
    render(){
    return (
      <div>
        <h2>TaskBox</h2>
        <input
          className='search'
          type='text'
          name='search'
          id='search'
          placeholder='search...'
          onChange={this.handleChange}
          value={this.state.search}
        />
        <TaskTable
          handleRemove={this.handleRemove}
          handleCheck={this.handleCheck}
          filter={this.state.search}
        />
        <AddTask />
      </div>
    )
    }
}
export default connect()(TaskManager)
