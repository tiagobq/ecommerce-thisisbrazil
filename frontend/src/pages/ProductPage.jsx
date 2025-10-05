import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    fetch(`https://thisisbrazil-backend.onrender.com/api/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Produto não encontrado");
        return res.json();
      })
      .then(prod => {
        setProduct(prod);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleBuyNow = () => {
    // ✅ Corrigido: parênteses e lógica separada
    if (product.category === "camiseta" && !selectedSize) {
      alert("Por favor, selecione um tamanho antes de comprar.");
      return;
    }

    // ✅ Links de checkout — só funcionam para camisetas
    if (product.id === "1") {
      const checkoutLinks = {
        P: "https://thisisbrazil.pay.yampi.com.br/r/MJP0HKOESE",
        M: "https://thisisbrazil.pay.yampi.com.br/r/MLN2VWX3RF",
        G: "https://thisisbrazil.pay.yampi.com.br/r/U184TCNA6K",
        GG: "https://thisisbrazil.pay.yampi.com.br/r/LA4Q5GKP6J",
      };
      window.location.href = checkoutLinks[selectedSize];
    } else {
      // ✅ Para outros produtos, pode redirecionar diretamente
      window.location.href = product.checkoutUrl || "https://thisisbrazil.com.br";
    }
  };

  if (loading) return <div className="product-page">Carregando...</div>;
  if (!product) return <div className="product-page">Produto não encontrado</div>;

  return (
    <div className="product-page container">
      <div className="product-image-section">
        <img
          src={`https://thisisbrazil-backend.onrender.com${product.image}`}
          alt={product.title}
          className="product-main-img"
        />
      </div>

      <div className="product-details-section">
        <h1>{product.title}</h1>

        <div className="product-price">
          {product.oldPrice && (
            <span className="old-price">
              R$ {(product.oldPrice / 100).toFixed(2)}
            </span>
          )}
          <span className="new-price">
            R$ {(product.price / 100).toFixed(2)}
          </span>
        </div>

        {product.discount && (
          <p className="product-discount">{product.discount}% OFF</p>
        )}

        {/* ✅ Só mostra o seletor de tamanho se for categoria camiseta */}
        {product.id === "1" && (
          <div className="size-selector">
            <label>Selecione o tamanho:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">-- Escolha --</option>
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
            </select>
          </div>
        )}

        <button className="buy-btn" onClick={handleBuyNow}>
          Comprar Agora
        </button>

        <div className="product-description">
          <h2>Descrição</h2>
          <p>{product.description}</p>
        </div>

        <div className="product-shipping">
          <h2>Envio</h2>
          <p>Frete grátis para todo Brasil</p>
        </div>

        <div className="reviews-section">
          <h2>Avaliações dos clientes</h2>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((rev, index) => (
              <div key={index} className="review">
                <p><strong>{rev.nome}</strong></p>
                <p>{rev.texto}</p>
                <span>{"⭐".repeat(rev.estrelas)}</span>
              </div>
            ))
          ) : (
            <p>Este produto ainda não possui avaliações.</p>
          )}
        </div>

        <button className="see-more">Ver todas as avaliações</button>
      </div>
    </div>
  );
}

export default ProductPage;
