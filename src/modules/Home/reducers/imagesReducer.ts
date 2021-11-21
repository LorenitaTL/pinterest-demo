import { types } from "../types/types";

const initialState = {
  images: [],
};

export const imagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.imagesLoaded:
      return {
        ...state,
        images: [...action.payload],
      };

    default:
      return state;
  }
};
