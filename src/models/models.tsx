interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Goods {
  id?: number;
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

export interface ButtonPropsPrimary {
  type: string;
  children?: React.ReactNode;
  size: string;
  onClick: () => void;
}
