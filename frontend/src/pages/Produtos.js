import React from "react";

function Produtos({ products }) {
  return (
    <main>
      <h2>Todos os Produtos</h2>
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
  );
}

export default Produtos;
