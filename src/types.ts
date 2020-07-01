export type Product = {
  id: string;
  description?: string;
  name?: string;
  technical_description?: string;
  price: string;
  active_promotion: boolean;
  price_promotion: string;
  type: "amount" | "weight";
  weight?: number | null;
  image?: null | {
    url: string;
  };
  productDefault?: {
    image: {
      url: string;
    };
    id: string;
    name: string;
  };
  company?: {
    id: string;
    name: string;
  };
};

export type ResumeProductCompanie = {
  image: {
    url: string;
  };
  id: string;
  name: string;
};

export type TopProduct = {
  image?: null | {
    url: string;
  };
  id: string;
  name?: string;
  weekly_sales?: number;
};

export interface Companie {
  id: string;
  title: string;
  phone: string;
  image: {
    url: string;
  };
  address: string;
  rating: number;
  totalStars: number;
  stars: {
    one: number;
    two: number;
    three: number;
    four: number;
    five: number;
  };
}

export type CompanieFromProduct = {
  id: string;
  title: string;
  image: {
    url: string;
  };
  rating: number;
  product: {
    id: string;
    title: string;
    price: number;
    image: {
      url: string;
    };
    typeString: string;
    weight?: number;
  };
};

export type CartProduct = {
  id: string;
  title: string;
  price: number;
  image: {
    url: string;
  };
  typeString: string;
  weight?: number;
};

export type ItemResultType = {
  id: string;
  image: { url: string };
  title: string;
};

export type SlideType = {
  id: string;
  image: { url: string };
  title: string;
  subtitle: string;
};

export type GridType = {
  id: string;
  image: { url: string };
  title: string;
  subtitle: string;
  lineThrough: string;
};

export type Category = {
  title: string;
  id: string;
  products: SlideType[];
};
