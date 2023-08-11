import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
// import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
import React from "react";

const getVisibleTodos = (todos, filter) => {
  console.log('getVisibleTodos todos filter', todos, filter)
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos?.map(todo =>{
          const { text, completed } = todo
          return (
            <li
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: completed ? 'line-through' : 'none'
              }}
            >{text}</li>
          )
        }
      )}
  </ul>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
