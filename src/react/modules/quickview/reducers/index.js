import { combineReducers } from 'redux';
import { show } from './show';
import { product } from './product';

export default combineReducers({
    show,
    product
});