import { randomInt } from "crypto";
import React from "react";
import { useState } from "react";

const initialState = [
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
];

const Grid = () => {
  const [images, setImages] = useState(initialState);
  return (
    <div className="grid-gallery">
      {images.map((image) => {
        return (
          <div className="grid-gallery__item">
            <img className="grid-gallery__image" src={image.url} alt="data" />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
