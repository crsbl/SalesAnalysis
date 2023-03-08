import { combineReducers } from 'redux'
 import showProducts from './showProducts/index'
 import modalAlert from './modalAlert/index'
export default combineReducers({
    showProducts,
    modalAlert,
})