import { BsCart3 } from "react-icons/bs";

import "./CartBlock.scss";

const CartBlock = () => {
  return (
    <div className="cart">
      <BsCart3 className="cart__icon" tabIndex={1} size={25} />
      <span className="cart__total-price">2213 грн.</span>
    </div>
  );
};

export default CartBlock;
