// server.js
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
    title: 'Camiseta Bolsonaro Livre',
    description: 'Malha 100% algodão, estampa Brasil Livre.',
    price: 7990, // R$ 79,90
    oldPrice: 9990,
    image: '/images/camiseta.jpeg', 
    checkoutUrl: 'https://exemplo-checkout.com/sku/camiseta-brasil-01'
  },
  {
    id: 'bone-verde-amarelo-01',
    title: 'Boné Bolsonaro',
    description: 'Boné Patriota Ajustável para Mulheres/Homens ',
    price: 5990, // R$ 59,90
    oldPrice: 8990,
    image: '/images/bone.PNG',
    checkoutUrl: 'https://exemplo-checkout.com/sku/bone-verde-amarelo-01'
  },
  {
    id: 'caneca-patriota-01',
    title: 'Caneca Bolsonaro Presidente Personalizado',
    description: 'Caneca Bolsonaro Presidente Personalizado',
    price: 5990, // R$ 59,90
    oldPrice: 7990,
    image: '/images/caneca.PNG',
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

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Produto não encontrado" });
  }
  res.json(product);
});


app.listen(PORT, () => {
  console.log(`✅ API rodando em http://localhost:${PORT}`);
});
