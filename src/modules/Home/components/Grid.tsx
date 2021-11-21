import { useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { imagesStartLoadList } from "../actions/images";

const Grid = () => {
  const dispatch = useDispatch();
  const { images } = useSelector((state: RootStateOrAny) => state.images);
  console.log("Images", images);
  useEffect(() => {
    dispatch(imagesStartLoadList());
  }, [dispatch]);

  return (
    <div className="grid-gallery">
      {images.map((image: any) => {
        return (
          <div className="grid-gallery__item" key={image.id}>
            <img className="grid-gallery__image" src={image.url} alt="data" />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
