import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreFooter from "./components/PreFooter";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";


import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import RastrearPedido from "./pages/RastrearPedido";
import AvisoLegal from "./pages/AvisoLegal";
import PerguntasFrequentes from "./pages/PerguntasFrequentes";
import PoliticasdaEmpresa from "./pages/PoliticasdaEmpresa";
import TrocasDevolucoes from "./pages/TrocasDevolucoes";
import ScrollToTop from "./components/ScrollToTop";
import ProductPage from "./pages/ProductPage";


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
        <Link to="/">
          <img src="/logo.jpeg" alt="Logo This is Brazil" className="logo-img" />
          </Link>
          <h1 className="logo">This is Brazil</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/sobre">Sobre nós</Link></li>
            <li><Link to="/rastrearpedido">Rastrear pedido</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            
          </ul>
        </nav>
      </header>

      {/* 🔄 Rotas */}

      <ScrollToTop /> 
      
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/produtos" element={<Produtos products={products} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/rastrearpedido" element={<RastrearPedido />} />

        <Route path="/avisolegal" element={<AvisoLegal />} />
        <Route path="/perguntasfrequentes" element={<PerguntasFrequentes />} />
        <Route path="/politicasdaempresa" element={<PoliticasdaEmpresa />} />
        <Route path="/trocasdevolucoes" element={<TrocasDevolucoes />} />
        <Route path="/rastrearpedido" element={<RastrearPedido />} />
        <Route path="/inicio" element={<Home products={products} />} />
        <Route path="/produto/:id" element={<ProductPage />} />


      </Routes>
      
      {/* Renderiza o PreFooter somente na Home */}
      {location.pathname === "/" && <PreFooter />}

      <Footer />

    </>
  );
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const pixelId = "355576679022572"; 
    ReactPixel.init(pixelId);
    ReactPixel.pageView(); 
    
    fetch("https://thisisbrazil-backend.onrender.com/api/products")

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
