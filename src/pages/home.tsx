import React from "react";
import Welcoming from "../sections/home/welcoming";
import { IBaseData } from "../types";
import data from "../data.json";
import Categories from "../sections/home/categories";
import Products from "../sections/home/product";

export default function Home() {
    const [responses] = React.useState<IBaseData>(data);

    return (
        <div>
            <Welcoming />
            <Categories categoryData={responses.categories} />
            <Products productData={responses.products} />

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
                <div className="kotak-isi">
                    <div className="kotak-card-isi">
                        <div className="card-isi">
                            <div className="isi">
                                <h3>Judul</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ad dignissimos nisi cum
                                    assumenda fugit unde soluta error nesciunt
                                    natus impedit!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="kotak-card-isi">
                        <div className="card-isi">
                            <h3>Judul</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ad dignissimos nisi cum
                                assumenda fugit unde soluta error nesciunt natus
                                impedit!
                            </p>
                        </div>
                    </div>
                    <div className="kotak-card-isi">
                        <div className="card-isi">
                            <h3>Judul</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ad dignissimos nisi cum
                                assumenda fugit unde soluta error nesciunt natus
                                impedit!
                            </p>
                        </div>
                    </div>
                    <div className="kotak-card-isi">
                        <div className="card-isi">
                            <h3>Judul</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ad dignissimos nisi cum
                                assumenda fugit unde soluta error nesciunt natus
                                impedit!
                            </p>
                        </div>
                    </div>
                    <div className="kotak-card-isi">
                        <div className="card-isi">
                            <h3>Judul</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ad dignissimos nisi cum
                                assumenda fugit unde soluta error nesciunt natus
                                impedit!
                            </p>
                        </div>
                    </div>
                    <div className="kotak-card-isi">
                        <div className="card-isi">
                            <h3>Judul</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ad dignissimos nisi cum
                                assumenda fugit unde soluta error nesciunt natus
                                impedit!
                            </p>
                        </div>
                    </div>
                    <div className="kotak-card-isi">
                        <div className="card-isi">
                            <h3>Judul</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ad dignissimos nisi cum
                                assumenda fugit unde soluta error nesciunt natus
                                impedit!
                            </p>
                        </div>
                    </div>
                    <div className="kotak-card-isi">
                        <div className="card-isi">
                            <h3>Judul</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ad dignissimos nisi cum
                                assumenda fugit unde soluta error nesciunt natus
                                impedit!
                            </p>
                        </div>
                    </div>
                    <div className="kotak-card-isi">
                        <div className="card-isi">
                            <h3>Judul</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ad dignissimos nisi cum
                                assumenda fugit unde soluta error nesciunt natus
                                impedit!
                            </p>
                        </div>
                    </div>
                    <div className="kotak-card-isi">
                        <div className="card-isi">
                            <h3>Judul</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ad dignissimos nisi cum
                                assumenda fugit unde soluta error nesciunt natus
                                impedit!
                            </p>
                        </div>
                    </div>
                    <div className="kotak-card-isi">
                        <div className="card-isi">
                            <h3>Judul</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ad dignissimos nisi cum
                                assumenda fugit unde soluta error nesciunt natus
                                impedit!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

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
