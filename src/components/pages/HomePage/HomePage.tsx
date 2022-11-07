import GoodsList from "../../GoodsList/GoodsList";
import { GoodsPropsArr } from "../../../models/models";
import Loaded from "../../Loaded/Loaded";

import "./HomePage.scss";

const HomePage = ({ goods }: GoodsPropsArr) => {
  return (
    <div className="home">
      <div className="home__title">
        <h1>Home page</h1>
        <h2>All goods :</h2>
      </div>
      <GoodsList goods={goods} />
    </div>
  );
};

export default HomePage;
