export type Product = {
  id: string;
  description?: string;
  technical_description?: string;
  price: string;
  active_promotion: boolean;
  price_promotion: string;
  type: "amount" | "weight";
  weight: string | null;
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
  image: {
    url: string;
  };
  id: string;
  name: string;
  weekly_sales: number;
};

export type Companie = {
  id: string;
  name: string;
  owner: string;
  rating: number;
  totalStars?: number;
  primary_phone: string;
  secundary_phone: string;
  image: {
    url: string;
  };
  adress: {
    id: string;
    description: string;
    street: string;
    cep: number;
    neighborhood: string;
    city: string;
    state: string;
  };
  stars?: {
    one: number;
    two: number;
    three: number;
    four: number;
    five: number;
  };
};

export type CompanieFromProduct = {
  id: string;
  name: string;
  owner: string;
  rating: number;
  totalStars?: number;
  primary_phone: string;
  secundary_phone: string;
  product: Product;
  image: {
    url: string;
  };
  adress: {
    id: string;
    description: string;
    street: string;
    cep: number;
    neighborhood: string;
    city: string;
    state: string;
  };
  stars?: {
    one: number;
    two: number;
    three: number;
    four: number;
    five: number;
  };
};

export type Category = {
  name: string;
  id: string;
  products: {
    id: string;
    name: string;
    image: {
      url: string;
    };
  }[];
};
