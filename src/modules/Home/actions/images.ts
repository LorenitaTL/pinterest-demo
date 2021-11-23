import { types } from "../types/types";
import { randomInt } from "crypto";

const imagesList = (images: Array<object>) => ({
  type: types.imagesLoaded,
  payload: images,
});

export const imagesStartLoadList = () =>{
    //TODO: Change type
    return async (dispatch:any) =>{
        //TODO: connect with imgur
        dispatch(imagesList([
            {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?cat",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?woman",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?people",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?men",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?car",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?pig",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?bike",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?ride",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?walk",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?mountain",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?sun",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?beach",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?night",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?moon",
              },
        ]))
    }
}
