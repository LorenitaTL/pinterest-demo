import { types } from "../types/types";
import { User } from "../reducers/usersReducer";

export const signIn = (user: User) => {
  return async (dispatch: any) => {
    //TODO: get from firebase
    console.log(user);
    dispatch(userActive(user));
  };
};


export const signUp = (user: User) => {
  return async (dispatch: any) => {
    //TODO: register on firebase
    console.log(user);
    dispatch(userActive(user));
  };
};

const userActive = (user: User) => ({
  type: types.userActive,
  payload: user,
});
