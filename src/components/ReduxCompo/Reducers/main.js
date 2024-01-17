import {getProductsReducer} from "./ProductsReducer";
import {combineReducers} from "redux";
const rootReducers=combineReducers({
    getProductsData:getProductsReducer
})

export default rootReducers;
