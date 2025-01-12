export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    brand: string;
    likes?: number;
    comments?: number;
    category: string;
}



export interface Blog {
    id: number;
    title: string;
    body: string;
    userId: number;
}

// Define Seller interface
export interface Seller {
    id: string;
    title: string;
    src: string;
    verified: boolean;
    totalproduct: number;
}

export interface SellerDetails {
    id: string;
    name: string;
    location: string;
    description: string;
    product_count: number;
    products: { id: string; title: string; image: string }[];
}

export interface BlogPost {
    id: number;
    title: string;
    body: string;
    userId: number;
    date?: string;
  }
  

  export interface SellerData {
    name: string;
    email: string;
    phone: string;
    profileImage: string | null;
  }