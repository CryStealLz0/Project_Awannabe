export interface IBaseData {
    categories: ICategory[];
    products: IProducts[];
}

export interface ICategory {
    id: string;
    headline: string;
    content: string;
}

export interface IProducts {
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface ICategoryProps {
    categoryData: ICategory[];
}

export interface IProductsProps {
    productData: IProducts[];
}
