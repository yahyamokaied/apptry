import { createStore,combineReducers } from 'redux';
import mealsReducer from './reducer';


const rootReducers = combineReducers({
meals : mealsReducer
});

const store = createStore(rootReducers);

store.subscribe(()  => store.getState());

export default store;

