// import { useState } from "react";
import React from "react";
import "./css/App.css";
import "./css/main.css";
import data from "./data.json";

interface IBaseData {
    cards: ICards[];
    products: IProducts[];
}

interface ICards {
    id: string;
    headline: string;
    content: string;
}

interface IProducts {
    id: string;
    name: string;
    description: string;
    price: number;
}

function App() {
    const [isOpen, setIsOpen] = React.useState(false);

    const [responses] = React.useState<IBaseData>(data);
    const handleClick = () => {
        console.log("ke click");
        setIsOpen(!isOpen);
    };

    // React.useEffect(() => {
    //     console.log({ response });
    //     console.log(response.cards);
    //     console.log(response.products);
    //     console.log("masuk");
    // }, []);

    // const logo = require("./assets/img/baju.jpg");

    return (
        <>
            <div className="bg-nav-hero">
                <header>
                    <div className="navbar">
                        <div className="logo">
                            <a href="#">Awannabe Project</a>
                        </div>
                        <ul className="links">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                        {/* <a href="#" className="action-btn">
                            Get Started
                        </a> */}
                        <div className="outer">
                            <button>
                                <h5>Get Started</h5>
                            </button>
                            <span></span>
                            <span></span>
                        </div>

                        <div
                            className="toggle-btn"
                            onClick={() => {
                                handleClick();
                            }}
                        >
                            <i
                                className={`fa-solid ${
                                    isOpen ? "fa-xmark" : "fa-bars"
                                }`}
                            ></i>
                        </div>
                    </div>
                    <div className={`dropdown-menu ${isOpen ? "open" : " "}`}>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            {/* <a href="#" className="action-btn">
                                Get Started
                            </a> */}
                            <div className="outer-menu">
                                <button>
                                    <h5>Get Started</h5>
                                </button>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                    </div>
                </header>

                <main>
                    <section id="hero">
                        <h1>Welcome to Awannabe</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Reiciendis quos, quae est adipisci officia
                            necessitatibus.
                        </p>
                    </section>
                </main>
            </div>

            <div className="container">
                <div className="container-card">
                    {responses.cards.length > 0 ? (
                        responses.cards.map((card) => (
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <h2>{card.headline}</h2>
                                    <p>{card.content}</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <span>"cards is not existed yet"</span>
                    )}
                </div>
            </div>

            {/* <div className="grid">
                <div className="center">
                    <div className="outer">
                        <button>Read More</button>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div> */}

            <div className="container-produk">
                {responses.products.length > 0 ? (
                    responses.products.map((product) => (
                        <div className="produk">
                            <div className="card"></div>
                            <div className="img-produk">
                                <img src="./src/assets/img/baju.jpg" alt="" />
                            </div>
                            <div className="content">
                                <div className="details">
                                    <h2>{product.name}</h2>
                                    <span>{product.description}</span>
                                    <div className="data">
                                        <h3>Rp. {product.price}</h3>
                                    </div>
                                    <div className="dataBtn">
                                        <button>Read More!</button>
                                        <button>Buy Now!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <span>"cards is not existed yet"</span>
                )}
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
        </>
    );
}

export default App;
