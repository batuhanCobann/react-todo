
 
 export const deleteTodo = ({todoId}) => {
    const updateTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updateTodos)
  }
