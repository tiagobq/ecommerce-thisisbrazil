import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        {/* Coluna 1 - Navegação */}
        <div className="footer-col">
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/sobre">Sobre nós</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 2 - Pagamentos */}
        <div className="footer-col">
          <h4>Formas de Pagamento</h4>
          <img
            src="/formasdepagamento.webp"
            alt="Formas de Pagamento"
            className="footer-payments"
          />
        </div>

        {/* Coluna 3 - Contato */}
        <div className="footer-col">
          <h4>Contato</h4>
          <p>📞 WhatsApp: (48) 99628-1131</p>
          <p>✉️ Email: contato@thisisbrasil.com</p>
          <p>📍 Criciúma - SC</p>
        </div>
      </footer>

      {/* Copyright */}
      <div className="copyright">
        <p>
          Copyright Loja This is Brazil - 2025. Todos os direitos reservados |
          <a
            href="https://www.tiktok.com/@this_is_braz"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src="/tiktok.png" alt="TikTok" className="icon" />
          </a>
          |
          <a href="/blog" className="blog-link">Blog</a>
        </p>
      </div>
    </>
  );
}

export default Footer;
