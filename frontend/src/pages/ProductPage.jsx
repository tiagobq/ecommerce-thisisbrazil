// src/pages/ProductPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${id}`)
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

  if (loading) {
    return <div className="product-page">Carregando...</div>;
  }
  if (!product) {
    return <div className="product-page">Produto não encontrado</div>;
  }

  return (
    <div className="product-page container">
      <div className="product-image-section">
        <img
          src={`http://localhost:4000${product.image}`}
          alt={product.title}
          className="product-main-img"
        />
        {/* Se quiser galeria, pode colocar miniaturas por baixo */}
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

        { product.discount && (
          <p className="product-discount">{product.discount}% OFF</p>
        )}

        <button className="buy-btn">Comprar Agora</button>

        <div className="product-description">
          <h2>Descrição</h2>
          <p>{product.description}</p>
        </div>

        <div className="product-shipping">
          <h2>Envio</h2>
          <p>Frete grátis para todo Brasil</p>
          {/* ou calculadora de frete, etc. */}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
