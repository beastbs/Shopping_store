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
}
