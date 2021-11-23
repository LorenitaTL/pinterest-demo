import { db } from "../../../helpers/firebase";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { types } from "../types/types";
import { User } from "../reducers/usersReducer";

const usersCollection = collection(db, "users");

export const signIn = (user: User) => {
  return async (dispatch: any) => {
    const { name, password } = user;
    const q = query(
      usersCollection,
      where("name", "==", name),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      dispatch(userActive(user));
    });
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
