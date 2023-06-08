import React from "react";

export default function Welcoming() {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        console.log("ke click");
        setIsOpen(!isOpen);
    };

    return (
        <section className="bg-nav-hero">
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
        </section>
    );
}
