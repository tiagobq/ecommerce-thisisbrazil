// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css'; // criado para estilos customizados

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1 className="logo">This is Brazil</h1>
        <div className="actions">
          {/* ícones de carrinho e conta */}
        </div>
      </header>

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

      <footer className="footer">
        <p>Este projeto é uma versão minimalista inspirada na DireitaStore.</p>
      </footer>
    </div>
  );
}

export default App;
