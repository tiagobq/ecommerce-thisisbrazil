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

<div className="faixas-brasil">
  <div className="faixa verde"></div>
  <div className="faixa amarela"></div>
</div>

  
      <footer className="footer">
  {/* Coluna 1 - Navegação */}
  <div className="footer-col">
    <h4>Navegação</h4>
    <ul>
      <li><a href="#">Início</a></li>
      <li><a href="#">Produtos</a></li>
      <li><a href="#">Políticas da empresa</a></li>
      <li><a href="#">Aviso legal</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </div>

  {/* Coluna 2 - Pagamentos */}
  <div className="footer-col">
    <h4>Formas de Pagamento</h4>
    <img src="/formasdepagamento.webp" alt="Formas de Pagamento" className="footer-payments" />
  </div>

        {/* Coluna 3 - Contato */}
        <div className="footer-col">
          <h4>Contato</h4>
          <p>📞 WhatsApp: (48) 99628-1131</p>
          <p>✉️ Email: contato@thisisbrasil.com</p>
          <p>📍 Criciúma - SC</p>
        </div>
      </footer>

          <div className="copyright">
      <p>Copyright Loja This is Brazil - 2025. Todos os direitos reservados.</p>
    </div>


    </div>
  );
}

export default App;
