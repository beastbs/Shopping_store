import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";
import { setCurrentGoods } from "../../redux/goods/reducer";

import Button from "../Button/Button";
import { GoodsPropsObj, StateParamsWithCart, Goods } from "../../models/models";

import "./GoodsItem.scss";

const GoodsItem = ({ goods }: GoodsPropsObj) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector(
    (state: StateParamsWithCart) => state.cart.itemsInCart
  );
  const isItemInCart = items.some((item: Goods) => item.id === goods.id);

  const onAddItemInCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (isItemInCart) {
      dispatch(deleteItemFromCart(goods.id));
    } else {
      dispatch(setItemInCart(goods));
    }
  };

  const handleClick = () => {
    dispatch(setCurrentGoods(goods));
    navigate(`/goods/${goods.title}`);
  };

  return (
    <li onClick={handleClick} className="goods-item" tabIndex={1}>
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
              type={isItemInCart ? "warning" : "primary"}
              size={"small"}
              onClick={onAddItemInCart}
            >
              {isItemInCart ? "Delete from cart" : "Add to cart"}
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GoodsItem;
