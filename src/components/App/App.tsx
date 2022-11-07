import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopService from "../../service/ShopService";

import Header from "../Header/Header";
import { HomePage, GoodsPage, OrderPage } from "../pages";

import { Goods } from "./../../models/models";

import "./App.scss";

function App() {
  const [goods, setGoods] = useState<Goods[]>([]);
  const shopService = ShopService();

  useEffect(() => {
    shopService.getAllGoods().then((res) => setGoods(res));
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage goods={goods} />} />
            <Route path="goods/:title" element={<GoodsPage />} />
            <Route path="order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
