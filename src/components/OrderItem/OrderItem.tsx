import { useDispatch } from "react-redux";

import { ProductPropsObj } from "../../models/models";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./OrderItem.scss";

const OrderItem = ({ product }: ProductPropsObj) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(product.id));
  };

  return (
    <div className="order-item">
      <div className="order-item__cover">
        <img
          className="order-item__img"
          src={product.images[0]}
          alt={product.title}
        />
        <div className="order-item__title">
          <span>{product.title}</span>
        </div>
      </div>
      <div className="order-item__price">
        <span>{product.price}$</span>
        <AiOutlineCloseCircle
          size={25}
          className="order-item__delete-icon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default OrderItem;
