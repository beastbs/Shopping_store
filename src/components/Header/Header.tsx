import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import CartBlock from "../CartBlock/CartBlock";
import ShopService from "../../service/ShopService";

import { Goods } from "./../../models/models";

import "./Header.scss";

const Header = () => {
  const [goods, setGoods] = useState<Goods[] | null>(null);
  const shopService = ShopService();

  useEffect(() => {
    shopService.getAllGoods().then((res) => setGoods(res));
  }, []);
  console.log(goods);

  return (
    <div className="header">
      <div className="header__wrap">
        <Link to="/" className="header__title">
          Shopping Store
        </Link>
      </div>
      <div className="wrap header__cart-btn-wrap">
        <CartBlock />
      </div>
    </div>
  );
};

export default Header;
