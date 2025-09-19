import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <Router>
      <div className="App">

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

        {/* 🔻 Pre-footer */}
        <section className="pre-footer">
          <div className="pre-footer-item">
            <img src="/icons/entrega.png" alt="Entrega" />
            <h4>Diversas formas de entrega</h4>
            <p>Entregamos em todo o país</p>
          </div>

          <div className="pre-footer-item">
            <img src="/icons/pagamento.png" alt="Pagamento" />
            <h4>Pague como quiser</h4>
            <p>Cartões de crédito ou à vista. Até 4x sem juros ou 5% de desconto no PIX.</p>
          </div>

          <div className="pre-footer-item">
            <img src="/icons/seguranca.png" alt="Segurança" />
            <h4>Compre com segurança</h4>
            <p>Seus dados sempre protegidos</p>
          </div>
        </section>

        {/* 🇧🇷 Faixas Brasil */}
        <div className="faixas-brasil">
          <div className="faixa verde"></div>
          <div className="faixa amarela"></div>
        </div>

        {/* 🔻 Footer */}
        <footer className="footer">
          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/produtos">Produtos</Link></li>
              <li><Link to="/sobre">Sobre nós</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Formas de Pagamento</h4>
            <img src="/formasdepagamento.webp" alt="Formas de Pagamento" className="footer-payments" />
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <p>📞 WhatsApp: (48) 99628-1131</p>
            <p>✉️ Email: contato@thisisbrasil.com</p>
            <p>📍 Criciúma - SC</p>
          </div>
        </footer>

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
      </div>
    </Router>
  );
}

export default App;
