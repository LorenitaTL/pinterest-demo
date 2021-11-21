import { combineReducers } from "redux";
import { imagesReducer } from "../modules/Home/reducers/imagesReducer";
import { authReducer } from "../modules/Auth/reducers/usersReducer";

export const rootReducer = combineReducers({
  images: imagesReducer,
  auth: authReducer,
});
