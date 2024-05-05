import { combineReducers } from "redux";
import apiSlice from "../features/api/apiSlice";
import testSlice from "../features/testing/testSlice";

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    test: testSlice
});

export default rootReducer;