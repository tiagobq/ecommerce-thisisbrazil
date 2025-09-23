import React from "react";
import { Link } from "react-router-dom";

function Home({ products }) {
  return (
    <div className="home">
      <section className="hero">
      <source srcSet="/images/banner-mobile.webp" media="(max-width: 768px)" />
        <img src="/banner.png" alt="Banner" className="hero-img" />
        <a href="#produtos">
          <button className="hero-btn">Compre Agora</button>
        </a>
      </section>

      <section id="produtos" className="products">
        <h2>Produtos em Destaque</h2>
        <div className="product-grid">
          {products.map((produto) => (
            <div key={produto.id} className="product-card">
              <img
                src={`http://localhost:4000${produto.image}`}
                alt={produto.title}
                className="product-img"
              />
              <h3>{produto.title}</h3>
              <p>{produto.description}</p>

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

              <a
                href={produto.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link to={`/produto/${produto.id}`}>
              <button>Comprar</button>
            </Link>

              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
