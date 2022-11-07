import { Quantity } from "../../models/models";

import "./ItemsInCart.scss";

const ItemsInCart = ({ quantity = 0 }: Quantity) => {
  return quantity > 0 ? <div className="items-in">{quantity}</div> : null;
};

export default ItemsInCart;
