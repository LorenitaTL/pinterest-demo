import { types } from "../types/types";

export type User = {
  name: string;
  email: string;
  password?: string;
};

const initialState = {
  user: {
    name: "",
    email: "",
  },
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.userActive:
      return {
        ...state,
        user: { name: action.payload.name, email: action.payload.email },
      };
    case types.removeUser:
      return {
        ...state,
        user: initialState.user,
      };
    default:
      return state;
  }
};
