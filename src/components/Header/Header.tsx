import { Link } from "react-router-dom";

import SearchPanel from "../SearchPanel/SearchPanel";
import CartBlock from "../CartBlock/CartBlock";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrap">
        <Link to="/" className="header__title">
          Shopping Store
        </Link>
      </div>
      <div className="header__search">
        <SearchPanel />
      </div>
      <div className="header__cart-btn-wrap">
        <CartBlock />
      </div>
    </div>
  );
};

export default Header;
