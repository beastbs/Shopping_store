interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Goods {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  key?: number;
}

export interface GoodsPropsArr {
  goods: Goods[];
}

export interface GoodsPropsObj {
  goods: Goods;
}
export interface ProductPropsObj {
  product: Goods;
}

export interface ButtonPropsPrimary {
  type: string;
  children: React.ReactNode;
  size: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface CartItemProps {
  id?: number;
  title: string;
  price: number;
  index: number;
}

export interface ActionParams {
  type: string;
  payload: Goods;
}

export interface StateParams {
  itemsInCart: Goods[];
}

export interface StateParamsWithCart {
  cart: StateParams;
}

interface StateWithCurrGoods {
  currentGoods: null | Goods;
}
export interface StateParamsWithGoods {
  goods: StateWithCurrGoods;
}

export interface CartMenuProps {
  items: Goods[];
  onClick: () => void;
  totalPrice: number;
}

export interface Quantity {
  quantity: number;
}
