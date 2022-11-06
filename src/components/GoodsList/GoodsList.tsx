import GoodsItem from "../GoodsItem/GoodsItem";

import { GoodsPropsArr } from "../../models/models";

import "./GoodsList.scss";

const GoodsList = ({ goods }: GoodsPropsArr) => {
  const item = goods.map((product) => (
    <GoodsItem key={product.id} goods={product} />
  ));

  return <ul className="goods-list">{item}</ul>;
};

export default GoodsList;
