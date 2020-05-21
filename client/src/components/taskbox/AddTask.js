import React, { Component } from 'react'
import { startAddTask } from '../../redux/actions/tasksAction'
import { connect } from 'react-redux'

class AddTask extends Component {
    state = {
        title: '',
        description: '',
        completed: false,
        dueDate: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleCheck = () => {
        this.setState(prevState => ({
            completed: !prevState.completed
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const {title,description,completed,dueDate} =this.state
        if(title === ''){
            alert(`title can't be empty`)
        }else{
            const formData = {
            title,
            description,
            completed,
            dueDate
            }
            console.log(formData)
            this.props.dispatch(startAddTask(formData))
            this.setState({
              title: '',
              description: '',
              completed: false,
              dueDate: '',
            })
        }
    }

    render() {
        return (
          <div className='task'>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                name='title'
                id='title'
                placeholder='title'
                value={this.state.title}
                onChange={this.handleChange}
              />
              <br />
              <br />

              <textarea
                name='description'
                id='description'
                cols='30'
                rows='10'
                placeholder='description'
                value={this.state.description}
                onChange={this.handleChange}
              />
              <br />
              <br />

              <input
                type='checkbox'
                name='completed'
                id='completed'
                value={this.state.completed}
                checked={this.state.completed}
                onChange={this.handleCheck}
              />
              <label htmlFor='completed'>completed</label>
              <br />
              <label htmlFor='dueDate'>Due Date</label>
              <input
                type='date'
                name='dueDate'
                id='dueDate'
                value={this.state.dueDate}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <input type='submit' value='Add Task' />
            </form>
          </div>
        )
    }
}

export default connect()(AddTask)
