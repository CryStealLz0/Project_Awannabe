export interface IBaseData {
    categories: ICategory[];
    products: IProducts[];
    judul: IJudul[];
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

export interface IJudul {
    id: string;
    judul: string;
    isi: string;
}

export interface ICategoryProps {
    categoryData: ICategory[];
}

export interface IProductsProps {
    productData: IProducts[];
}

export interface IJudulProps {
    judulData: IJudul[];
}

