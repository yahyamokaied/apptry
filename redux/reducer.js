import * as action from './actions';
import MEALS from '../data/MEALS';


const initalState = [
    {
        id: 0,
        title: 'initalState'
    }
];
const mealsReducer = (state = MEALS, action) => {
    switch (action.type) {
        case 'ADD_ACTION':
          return [
            ...state,
            {
              id: action.id,
              title: action.title,
            }
          ]
        case 'REMOVE_ACTION':
            return state.filter((allMeals, i) => i !== action.id);
        case 'RESET_ACTION':
            return state=MEALS;
        default:
          return state
      }
    }

export default mealsReducer;