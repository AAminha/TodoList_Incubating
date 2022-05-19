import {combineReducers} from 'redux';
import todo from './reducer';
import {TodoItem} from './types';

export type RootState = {
  todo: TodoItem;
}

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;