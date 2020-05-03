import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

function Task(props){
    const tasks = props.tasks.filter(task => task.title.toLowerCase().includes(props.filter.toLowerCase()))
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" disabled/></th>
                        <th>Title</th>
                        <th>Created On</th>
                        <th>Due Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{
                    tasks.map((task,i) =>{
                        return (
                          <tr key={i}>
                            <td>
                              <input type='checkbox' checked={task.completed} onChange={() =>{props.handleCheck(task._id,task.completed)}}/>
                            </td>
                            <td>{task.title}</td>
                            <td>{moment(task.createdAt).format('LL')}</td>
                            <td>{task.dueDate && moment(task.dueDate).format('LL')}</td>
                            <td>
                              <Link to='#' onClick={() => {props.handleRemove(task._id)}}>Remove</Link>
                            </td>
                          </tr>
                        )
                    })
                }</tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Task)
