// import { useState } from "react";
import React from "react";
import "./css/App.css";
import "./css/main.css";

function App() {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        console.log("ke click");
        setIsOpen(!isOpen);
    };

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
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <h2>Card Satu</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Quasi ipsum aliquid
                                perferendis illo nostrum possimus exercitationem
                                tempore beatae laudantium dolorem!
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <h2>Card Dua</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Quasi ipsum aliquid
                                perferendis illo nostrum possimus exercitationem
                                tempore beatae laudantium dolorem!
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <h2>Card Tiga</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Quasi ipsum aliquid
                                perferendis illo nostrum possimus exercitationem
                                tempore beatae laudantium dolorem!
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="center">
                    <div className="outer">
                        <button>Read More</button>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="container-produk">
                <div className="produk">
                    <div className="card"></div>
                    <div className="img-produk">
                        <img src="./src/assets/img/baju.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>Baju Bolong</h2>
                            <span>Merk Macan Tutul</span>
                            <div className="data">
                                <h3>Rp. 15.000,00,-</h3>
                            </div>
                            <div className="dataBtn">
                                <button>Read More!</button>
                                <button>Buy Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="produk">
                    <div className="card"></div>
                    <div className="img-produk">
                        <img src="./src/assets/img/baju.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>Baju Bolong</h2>
                            <span>Merk Macan Tutul</span>
                            <div className="data">
                                <h3>Rp. 15.000,00,-</h3>
                            </div>
                            <div className="dataBtn">
                                <button>Read More!</button>
                                <button>Buy Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="produk">
                    <div className="card"></div>
                    <div className="img-produk">
                        <img src="./src/assets/img/baju.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>Baju Bolong</h2>
                            <span>Merk Macan Tutul</span>
                            <div className="data">
                                <h3>Rp. 15.000,00,-</h3>
                            </div>
                            <div className="dataBtn">
                                <button>Read More!</button>
                                <button>Buy Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="produk">
                    <div className="card"></div>
                    <div className="img-produk">
                        <img src="./src/assets/img/baju.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>Baju Bolong</h2>
                            <span>Merk Macan Tutul</span>
                            <div className="data">
                                <h3>Rp. 15.000,00,-</h3>
                            </div>
                            <div className="dataBtn">
                                <button>Read More!</button>
                                <button>Buy Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="produk">
                    <div className="card"></div>
                    <div className="img-produk">
                        <img src="./src/assets/img/baju.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>Baju Bolong</h2>
                            <span>Merk Macan Tutul</span>
                            <div className="data">
                                <h3>Rp. 15.000,00,-</h3>
                            </div>
                            <div className="dataBtn">
                                <button>Read More!</button>
                                <button>Buy Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
