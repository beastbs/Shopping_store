import { GoodsPropsObj } from "../../models/models";
import Button from "../Button/Button";

import "./GoodsItem.scss";

const GoodsItem = ({ goods }: GoodsPropsObj) => {
  return (
    <li className="goods-item" tabIndex={1}>
      <div className="goods-item__details">
        <h3 className="goods-item__title">{goods.title}</h3>
        <img
          className="goods-item__img"
          src={goods.images[0]}
          alt={goods.title}
        />
        <p className="goods-item__description">{goods.description}</p>
        <div className="goods-item__details-bottom">
          <div className="goods-item__price">Price: {goods.price}$</div>
          <div className="goods-item__buy">
            <Button
              type={"primary"}
              size={"small"}
              onClick={() => console.log("success")}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GoodsItem;
