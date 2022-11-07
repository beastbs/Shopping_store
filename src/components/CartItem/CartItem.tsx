import { CartItemProps } from "../../models/models";

import "./CartItem.scss";

const CartItem = ({ title, price, index }: CartItemProps) => {
  return (
    <div className="cart-item">
      <span>{`${index + 1}.${title}`}</span>
      <div className="cart-item__price">
        <span>{price}$</span>
      </div>
    </div>
  );
};

export default CartItem;
