// server.js
// MVP de backend para e-commerce básico com checkout externo
// Stack: Node.js + Express

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Servir imagens estáticas (opcional)
// Coloque seus arquivos em ./public/images e acesse por /images/<arquivo>
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// Catálogo estático inicial (pode migrar para DB depois)
// price em centavos para evitar problemas de ponto flutuante
const products = [
  {
    id: 'camiseta-brasil-01',
    title: 'Camiseta Brasil Patriota',
    description: 'Malha 100% algodão, estampa Brasil patriota.',
    price: 7990, // R$ 79,90
    image: '/images/camiseta-brasil-01.jpg', // troque pelo seu arquivo real ou URL externa
    checkoutUrl: 'https://exemplo-checkout.com/sku/camiseta-brasil-01'
  },
  {
    id: 'bone-verde-amarelo-01',
    title: 'Boné Verde e Amarelo',
    description: 'Boné ajustável com cores do Brasil.',
    price: 5990, // R$ 59,90
    image: '/images/bone-verde-amarelo-01.jpg',
    checkoutUrl: 'https://exemplo-checkout.com/sku/bone-verde-amarelo-01'
  },
  {
    id: 'adesivo-patriota-01',
    title: 'Adesivo Patriota',
    description: 'Adesivo vinílico resistente para carro/notebook.',
    price: 1990, // R$ 19,90
    image: '/images/adesivo-patriota-01.jpg',
    checkoutUrl: 'https://exemplo-checkout.com/sku/adesivo-patriota-01'
  }
];

// Healthcheck
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Lista de produtos (em reais no front: price / 100)
app.get('/api/products', (_req, res) => {
  res.json(products);
});

// (Opcional) Endpoint para redirecionar ao checkout externo por produto
app.get('/api/checkout/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product || !product.checkoutUrl) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }
  return res.redirect(302, product.checkoutUrl);
});

app.listen(PORT, () => {
  console.log(`✅ API rodando em http://localhost:${PORT}`);
});
