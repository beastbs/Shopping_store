import { useEffect, useState } from "react";

import { Provider } from "react-redux";
import { store } from "../../redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopService from "../../service/ShopService";

import Header from "../Header/Header";
import { HomePage } from "../pages";

import { Goods } from "./../../models/models";

import "./App.scss";

function App() {
  const [goods, setGoods] = useState<Goods[]>([]);
  const shopService = ShopService();
  // console.log(goods);

  useEffect(() => {
    shopService.getAllGoods().then((res) => setGoods(res));
    // eslint-disable-next-line
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage goods={goods} />} />
          </Routes>
        </div>
        ;
      </Router>
    </Provider>
  );
}

export default App;
