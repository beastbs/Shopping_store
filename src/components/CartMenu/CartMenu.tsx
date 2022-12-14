import { useDispatch } from "react-redux";

import { clearAllItems } from "../../redux/cart/reducer";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import { CartMenuProps, Goods } from "../../models/models";

import "./CartMenu.scss";

const CartMenu = ({ items, totalPrice, onClick }: CartMenuProps) => {
  const dispatch = useDispatch();

  const totalItems = items.map((product: Goods, i: number) => (
    <CartItem
      key={product.id}
      title={product.title}
      price={product.price}
      id={product.id}
      index={i}
    />
  ));

  const onClearAllFromCart = () => {
    dispatch(clearAllItems([]));
  };

  return (
    <div className="cart-menu">
      <div className="cart-menu__goods-list">
        {items.length > 0 ? <div>{totalItems}</div> : "Cart is empty"}
      </div>
      {items.length > 0 ? (
        <div>
          <div className="cart-menu__arrange">
            <div className="cart-manu__total-price">
              <span>Total amount: </span>
              <span>{totalPrice}$</span>
            </div>
          </div>
          <div className="cart-menu__wrap-btns">
            <Button type="primary" size="medium" onClick={onClick}>
              To order
            </Button>
            <Button type="danger" size="medium" onClick={onClearAllFromCart}>
              Clear cart
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
