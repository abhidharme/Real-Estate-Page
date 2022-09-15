import { legacy_createStore , combineReducers , compose , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";


const rootReducer = combineReducers({
    rentsHouses:reducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = legacy_createStore(rootReducer,
    composeEnhancer(applyMiddleware(thunk))
    )