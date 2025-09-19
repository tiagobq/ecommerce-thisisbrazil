import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreFooter from "./components/PreFooter";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function Layout({ products }) {
  const location = useLocation();

  return (
    <>
      {/* 🔝 TopBar */}
      <div className="topbar">
        <p>Frete grátis para todo o Brasil 🚛</p>
      </div>

      {/* 🔝 Header */}
      <header className="header">
        <div className="logo-area">
          <img src="/logo.jpeg" alt="Logo This is Brazil" className="logo-img" />
          <h1 className="logo">This is Brazil</h1>
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

      {/* 🔄 Rotas */}
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/produtos" element={<Produtos products={products} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      {/* Renderiza o PreFooter somente na Home */}
      {location.pathname === "/" && <PreFooter />}

      <Footer />

      {/* 🔻 Copyright */}
      <div className="copyright">
        <p>
          Copyright Loja This is Brazil - 2025. Todos os direitos reservados |
          <a href="https://www.tiktok.com/@this_is_braz" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/tiktok.png" alt="TikTok" className="icon" />
          </a>
          |
          <a href="/blog" className="blog-link">Blog</a>
        </p>
      </div>
    </>
  );
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <Router>
      <Layout products={products} />
    </Router>
  );
}

export default App;
