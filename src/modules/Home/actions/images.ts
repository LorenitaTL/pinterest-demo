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
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
              {
                id: randomInt,
                url: "https://source.unsplash.com/featured/500x400/?dog",
              },
        ]))
    }
}
