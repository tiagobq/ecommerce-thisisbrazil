import React from "react";

function Home({ products }) {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <img src="/banner.png" alt="Promoção camisetas Bolsonaro Livre" className="hero-img" />
        <div className="hero-content">
          <button className="hero-btn">Compre Agora</button>
        </div>
      </section>

      {/* Produtos */}
      <main>
        <section className="product-grid">
          {products.map(p => (
            <div key={p.id} className="product-card">
              <img src={`http://localhost:4000${p.image}`} alt={p.title} />
              <h3>{p.title}</h3>
              <p>R$ {(p.price / 100).toFixed(2)}</p>
              <button>Comprar</button>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
