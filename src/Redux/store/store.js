import { createStore, applyMiddleware } from 'redux';
import reducer from "../Reducer/reducer"
import thunk from 'redux-thunk'; // Importa redux-thunk


const store = createStore(reducer, applyMiddleware(thunk));

export default store 