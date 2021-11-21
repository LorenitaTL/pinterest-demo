import { combineReducers } from 'redux';
import { imagesReducer } from '../modules/Home/reducers/imagesReducer';

export const rootReducer = combineReducers({
    images: imagesReducer
});