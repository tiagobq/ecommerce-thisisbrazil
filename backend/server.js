// server.js
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Servir imagens estáticas
app.use("/images", express.static(path.join(__dirname, "public", "images")));

// Catálogo estático
const products = [
  {
    id: "1",
    title: "Camiseta Bolsonaro Livre",
    description: "Uma das peças que não podem faltar no guarda-roupas de todo patriota. Confortável, estilosa e ideal para o dia a dia. A camiseta Bolsonaro Livre é feita com malha macia e durável (65% poliéster e 35% algodão). Marca: DHOO Fashion. Tamanhos: P, M, G e GG. Não amassa e combina com tudo!",
    price: 7990,
    oldPrice: 9990,
    category: "camiseta",
    image: "/images/camiseta.jpeg",
    reviews: [
      { nome: "Maria S.", texto: "Camiseta top, recomendo!", estrelas: 5 },
      { nome: "João P.", texto: "Tecido macio, gostei bastante.", estrelas: 4 },
      { nome: "Cassio A.", texto: "Muito orgulhoso, aprovada!.", estrelas: 4 },
      { nome: "Ana S.", texto: "é hora da vitória, estamos juntos capitão.", estrelas: 5 },
    ],
    checkoutLink: "https://thisisbrazil.pay.yampi.com.br/r/CCF796L541",
  },
  {
    id: "2",
    title: "Boné Bolsonaro",
    description: "Boné Patriota Ajustável para Mulheres/Homens",
    price: 5990,
    oldPrice: 8990,
    category: "bone",
    image: "/images/bone.PNG",
    reviews: [
      { nome: "Estela E.", texto: "Vestiu muito bem, recomendo", estrelas: 5 },
      { nome: "Israel S.", texto: "Fiquei muito chic, obrigado.", estrelas: 4 },
      { nome: "Maria O.", texto: "Tamanho muito bom.", estrelas: 4 },
    ],
    checkoutLinks: "https://thisisbrazil.pay.yampi.com.br/r/G8R6OM1IF0",
  },
  {
    id: "3",
    title: "Caneca Bolsonaro Presidente Personalizado",
    description: "Caneca Bolsonaro Presidente Personalizado",
    price: 5990,
    oldPrice: 7990,
    category: "caneca",
    image: "/images/caneca.PNG",
    reviews: [
      { nome: "Maria S.", texto: "Agora sou patriota mesmo.", estrelas: 5 },
      { nome: "João P.", texto: "Gostei do produto.", estrelas: 4 },
      { nome: "Cassio A.", texto: "Chegou muito rápido.", estrelas: 4 },
    ],
    checkoutLinks: "https://thisisbrazil.pay.yampi.com.br/r/60D218Z51E",
  },
];

// Healthcheck
app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Lista de produtos
app.get("/api/products", (_req, res) => {
  res.json(products);
});

// Detalhe de produto
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Produto não encontrado" });
  }
  res.json(product);
});

// Redirecionar checkout
app.get("/api/checkout/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product || !product.checkoutLink) {
    return res.status(404).json({ error: "Produto não encontrado" });
  }
  return res.redirect(302, product.checkoutLink);
});

// Servir o build do React
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Redirecionar qualquer rota desconhecida para o React
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});


app.listen(PORT, () => {
  console.log(`✅ API rodando na porta ${PORT}`);
});
