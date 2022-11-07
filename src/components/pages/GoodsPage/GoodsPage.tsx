import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StateParamsWithGoods } from "../../../models/models";

import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import "./GoodsPage.scss";

const GoodsPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const product = useSelector(
    (state: StateParamsWithGoods) => state.goods.currentGoods
  );

  if (!product) {
    return null;
  }

  const { images } = product;
  const length = images.length;

  const onNextSlider = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const onPrevSlider = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  return (
    <div className="goods-page">
      <h1 className="goods-page__title">{product.title}</h1>
      <div className="goods-page__slider">
        <BsFillArrowLeftSquareFill
          className="goods-page__arr-left"
          onClick={onPrevSlider}
        />
        <BsFillArrowRightSquareFill
          className="goods-page__arr-rigth"
          onClick={onNextSlider}
        />
        {images.map((image, i) => {
          return (
            <div
              className={
                i === currentImage
                  ? "goods-page__slide active"
                  : "goods-page__slide"
              }
              key={i}
            >
              {i === currentImage && (
                <img
                  src={image}
                  alt={product.title}
                  className="goods-page__img"
                />
              )}
            </div>
          );
        })}
      </div>
      <p className="goods-page__description">{product.description}</p>
    </div>
  );
};

export default GoodsPage;
