import { createStore } from "redux";
import RootReducer from "./reducer/rootReducer";


const store = createStore( RootReducer , {} );

export default store;
