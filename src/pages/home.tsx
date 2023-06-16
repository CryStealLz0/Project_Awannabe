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
            <Judul judulData={responses.judul} />

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

            <div className="coba">
                <div className="outer-menu">
                    <button>
                        <h5>Get Started</h5>
                    </button>
                    <span></span>
                    <span></span>
                    <div className="kotak-card-satu">
                        <div className="card">
                            <h2>hola 1</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Libero, modi.
                            </p>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="kotak-card-dua">
                        <div className="card">
                            <h2>hola 2</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Libero, modi.
                            </p>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="kotak-card-tiga">
                        <div className="card">
                            <h2>hola 3</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Libero, modi.
                            </p>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="kotak-card-empat">
                        <div className="card">
                            <h2>hola 4</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Libero, modi.
                            </p>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="kotak-card-lima">
                        <div className="card">
                            <h2>hola 3</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Libero, modi.
                            </p>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="kotak-card-enam">
                        <div className="card">
                            <h2>hola 3</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Libero, modi.
                            </p>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
