/*
 * action types
 */

export const ADD_ACTION = 'ADD_ACTION'
export const REMOVE_ACTION = 'REMOVE_ACTION'


/*
 * action creators
 */

let nextTodoId = 0
export const addAction = title =>  {
  return{
  type: 'ADD_ACTION',
  id: nextTodoId++,
  title: title
}
}

export const removeAction = id => {
  return{
    type: REMOVE_ACTION,
    id: id
  }
}

 