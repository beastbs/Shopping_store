import { useSelector } from "react-redux";
import OrderItem from "../../OrderItem/OrderItem";
import { Goods, StateParamsWithCart } from "../../../models/models";
import "./OrderPage.scss";

const OrderPage = () => {
  const items = useSelector(
    (store: StateParamsWithCart) => store.cart.itemsInCart
  );

  const totalPrice = items.reduce(
    (acc: number, product: Goods) => (acc += product.price),
    0
  );

  if (items.length < 1) {
    return <h1>Your cart is empty</h1>;
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((product: Goods) => (
          <OrderItem key={product.id} product={product} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <div className="order-page__total-price-title"> Total price:</div>
          <div className="order-page__total-price-amount">{totalPrice}$</div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
