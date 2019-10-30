import { createStore } from "redux";
import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from "../reducers/rootReducer";
import { fromBase64 } from "bytebuffer";

export const configureStore = () => {
    const store = createStore(rootReducer, devToolsEnhancer())

    return store;
}