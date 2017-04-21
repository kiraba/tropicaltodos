import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../App.css'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input className="sexy_field" placeholder="Add a to do..."ref={node => {
          input = node
        }} /><br/>
        <button className="button" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo