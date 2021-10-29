// combine all the other states together
import { CombinedState, combineReducers } from "redux";
import userReducer from "./user/user.reducer";
export default combineReducers({
    user:userReducer
})