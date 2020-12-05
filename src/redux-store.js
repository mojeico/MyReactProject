import {combineReducers, createStore} from "redux";
import dialogReducer from "./redux/dialog-reducer";



let reducers = combineReducers({
    dialog : dialogReducer
});

let store = createStore(reducers);



export default store;
