// src/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="logo-area">
        <Link to="/">
          <img
            src="/logo.jpeg"
            alt="Logo This is Brazil"
            className="logo-img"
          />
        </Link>
        <h1 className="logo-text">
          <Link to="/">This is Brazil</Link>
        </h1>
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre nós</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
