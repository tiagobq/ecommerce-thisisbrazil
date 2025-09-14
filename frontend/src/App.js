import React, { useEffect, useState } from 'react';
import './App.css'; // estilos customizados

function App() {
  const [products, setProducts] = useState([]);

  const categories = [
    { id: "inicio", name: "Início" },
    { id: "produtos", name: "Produtos" },
    { id: "sobre nos", name: "Sobre nós" },
    { id: "contato", name: "Contato" },
    // adicione mais se quiser
  ];
  


  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="App">
      {/* 🔝 TopBar */}
      <div className="topbar">
        <p>Frete grátis para todo o Brasil 🚛</p>
      </div>


      {/* Header */}
      <header className="header">
        <div className="logo-area">
          <img src="/logo.jpeg" alt="Logo This is Brazil" className="logo-img"></img>
        <h1 className="logo">This is Brazil</h1>
        
          {/* futuros ícones */}
        </div>
      </header>

      <nav className="categories-menu">
  {categories.map(cat => (
    <a key={cat.id} href={`#${cat.id}`} className="category-link">
      {cat.name}
    </a>
  ))}
</nav>

      {/* 🖼️ Hero Section */}
      <section className="hero">
        <img
          src="/banner.png" // coloque sua imagem aqui dentro de public/banner.jpg
          alt="Promoção camisetas Bolsonaro Livre"
          className="hero-img"
        />
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

  
      {/* Rodapé */}
      <footer className="footer">
        <ul>
          <li><a href="#!">Aviso Legal</a></li>
          <li><a href="#!">Fale Conosco</a></li>
          <li><a href="#!">Perguntas Frequentes</a></li>
          <li><a href="#!">Política de Devolução e Troca</a></li>
          <li><a href="#!">Política de Privacidade</a></li>
          <li><a href="#!">Política de Envio e Entrega</a></li>
          <li><a href="#!">Rastreamento do Pedido</a></li>
          <li><a href="#!">Sobre Nós</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
