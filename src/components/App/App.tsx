import { useEffect, useState } from "react";

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
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage goods={goods} />} />
        </Routes>
      </div>
      ;
    </Router>
  );
}

export default App;
