import { useState } from "react";
import { useSelector } from "react-redux";

import CartMenu from "../CartMenu/CartMenu";
import ItemsInCart from "../ItemsInCart/ItemsInCart";

import { BsCart3 } from "react-icons/bs";
import { Goods, StateParamsWithCart } from "../../models/models";

import "./CartBlock.scss";

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  const items = useSelector(
    (state: StateParamsWithCart) => state.cart.itemsInCart
  );
  const totalPrice = items.reduce(
    (acc: number, product: Goods) => (acc += product.price),
    0
  );

  return (
    <div className="cart">
      <ItemsInCart quantity={items.length} />
      <BsCart3
        className={
          isCartMenuVisible ? "cart__icon cart__icon-active" : "cart__icon"
        }
        tabIndex={1}
        size={25}
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {items.length > 0 ? (
        <span className="cart__total-price">{totalPrice}$</span>
      ) : null}
      {isCartMenuVisible && (
        <CartMenu
          items={items}
          totalPrice={totalPrice}
          onClick={() => console.log("cart")}
        />
      )}
    </div>
  );
};

export default CartBlock;
