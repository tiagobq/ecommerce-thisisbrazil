import React from "react";
import "./PreFooter.css";

function PreFooter() {
  return (
    <>
      {/* 🔻 Pre-footer */}
      <section className="pre-footer">
        <div className="pre-footer-item">
          <img src="/icons/entrega.png" alt="Entrega" />
          <h4>Diversas formas de entrega</h4>
          <p>Entregamos em todo o país</p>
        </div>

        <div className="pre-footer-item">
          <img src="/icons/pagamento.png" alt="Pagamento" />
          <h4>Pague como quiser</h4>
          <p>
            Cartões de crédito ou à vista. Até 12x sem juros ou 5% de desconto no PIX.
          </p>
        </div>

        <div className="pre-footer-item">
          <img src="/icons/seguranca.png" alt="Segurança" />
          <h4>Compre com segurança</h4>
          <p>Seus dados sempre protegidos</p>
        </div>
      </section>

      {/* 🇧🇷 Faixas Brasil */}
      <div className="faixas-brasil">
        <div className="faixa verde"></div>
        <div className="faixa amarela"></div>
      </div>
    </>
  );
}

export default PreFooter;
