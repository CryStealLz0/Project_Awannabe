import React from "react";
import Welcoming from "../sections/home/welcoming";
import { IBaseData } from "../types";
import data from "../data.json";
import Categories from "../sections/home/categories";
import Products from "../sections/home/product";
import Judul from "../sections/home/judul";

export default function Home() {
    const [responses] = React.useState<IBaseData>(data);

    return (
        <div>
            <Welcoming />
            <Categories categoryData={responses.categories} />
            <Products productData={responses.products} />

            <Judul judulData={responses.judul}/>

           

            <div className="kotak">
                <div className="kotak-card">
                    <div className="card">
                        <button>Read More</button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
