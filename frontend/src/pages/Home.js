import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home({ products }) {
  return (
    <div className="home">
      {/* 🔹 HERO SECTION */}
      <section className="hero">
        <picture>
          <source
            srcSet="/images/banner-mobile.webp"
            media="(max-width: 768px)"
          />
          <img src="/banner.png" alt="Banner" className="hero-img" />
        </picture>
        <a href="#produtos">
          <button className="hero-btn"></button>
        </a>
      </section>

      {/* 🔹 PRODUTOS */}
      <section id="produtos" className="products">
        <h2>Produtos em Destaque</h2>
        <div className="product-grid">
          {products.map((produto) => (
            <div key={produto.id} className="product-card">
              <Link to={`/produto/${produto.id}`}>
                <img
                  src={`https://thisisbrazil-backend.onrender.com${produto.image}`}
                  alt={produto.title}
                  className="product-img"
                />
              </Link>

              <h3>{produto.title}</h3>

              {/* 🔥 Preço com comparação */}
              <div className="product-price">
                {produto.oldPrice && (
                  <span className="old-price">
                    R$ {(produto.oldPrice / 100).toFixed(2)}
                  </span>
                )}
                <span className="new-price">
                  R$ {(produto.price / 100).toFixed(2)}
                </span>
              </div>

              {/* 🔹 Botão de Comprar */}
              <Link to={`/produto/${produto.id}`}>
                <button>Comprar</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
