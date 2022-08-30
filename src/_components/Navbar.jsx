import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid  ">
            <Link to="/" className="navbar-brand text-light">
                Note App
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                        <NavLink to="/" className="nav-link text-light" aria-current="page">
                            Главная
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink to="/about" className="nav-link text-light">
                            Информация
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
