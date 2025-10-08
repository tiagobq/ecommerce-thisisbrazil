This is Brazil — E-commerce Patriota
Visão Geral

This is Brazil é um e-commerce voltado ao público patriota e conservador brasileiro, com foco em produtos como camisetas, bonés e canecas.
O projeto foi desenvolvido com Node.js + Express (backend) e React (frontend), integrando o checkout da Yampi, Pixel Meta e rastreamento UTM para campanhas de tráfego pago.

🚀 Funcionalidades Principais

🖥️ Frontend em React: interface leve, responsiva e moderna.

⚙️ Backend em Node.js + Express: API REST completa para produtos e checkout.

💳 Integração com Yampi: redirecionamento dinâmico para o checkout oficial de cada produto.

🧩 Gerenciamento de categorias: produtos organizados por tipo (camiseta, bone, caneca).

🧾 Exibição de avaliações reais: cada produto mostra comentários simulados com estrelas.

📦 Imagens otimizadas e servidas via Express.

📊 Rastreamento de campanhas: URLs com UTM e Pixel Meta configurados para conversões.

☁️ Deploy completo no Render (backend) e Vercel (frontend).

🧱 Estrutura do Projeto
this-is-brazil/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── /public/images/
│   │     ├── camiseta.jpeg
│   │     ├── bone.png
│   │     └── caneca.png
│   └── ...
│
├── frontend/
│   ├── src/
│   │     ├── pages/
│   │     │     └── ProductPage.jsx
│   │     ├── components/
│   │     ├── App.js
│   │     └── index.js
│   ├── public/
│   └── package.json
│
└── README.md

⚙️ Backend (Node.js + Express)
O backend foi desenvolvido em Express.js, hospedado no Render, com rotas para listar produtos e direcionar o checkout.
🔹 Principais rotas
GET /api/products

Retorna todos os produtos disponíveis.

GET /api/products/:id

Retorna o produto específico por id.

GET /api/checkout/:id

Redireciona automaticamente para o link de checkout da Yampi do produto.

GET /health

Verificação de status do servidor.

** Exemplo de Produto (em server.js)
{
  id: "1",
  title: "Camiseta Bolsonaro Livre",
  description: "Camiseta patriota com tecido confortável e durável.",
  price: 7990,
  oldPrice: 9990,
  category: "camiseta",
  image: "/images/camiseta.jpeg",
  reviews: [
    { nome: "Maria S.", texto: "Camiseta top, recomendo!", estrelas: 5 },
    { nome: "João P.", texto: "Tecido macio, gostei bastante.", estrelas: 4 }
  ],
  checkoutLink: "https://thisisbrazil.pay.yampi.com.br/r/CCF796L541"
}

Servindo Imagens
app.use("/images", express.static(path.join(__dirname, "public", "images")));

✅ As imagens são servidas diretamente do diretório /public/images, funcionando tanto localmente quanto no Render.

💻 Frontend (React)
Página principal

Lista os produtos via requisição fetch para a API.

Exibe imagem, preço, desconto e botão “Comprar Agora”.

Página de Produto (ProductPage.jsx)

Mostra informações detalhadas do produto.

Exibe seletor de tamanho apenas se category === "camiseta".

Redireciona automaticamente ao checkout correto.

Lógica de compra
if (product.category === "camiseta") {
  const checkoutLinks = {
    P: "https://thisisbrazil.pay.yampi.com.br/r/MJP0HKOESE",
    M: "https://thisisbrazil.pay.yampi.com.br/r/MLN2VWX3RF",
    G: "https://thisisbrazil.pay.yampi.com.br/r/U184TCNA6K",
    GG: "https://thisisbrazil.pay.yampi.com.br/r/LA4Q5GKP6J",
  };
  window.location.href = checkoutLinks[selectedSize];
} else {
  window.location.href = product.checkoutLink;
}

🧠 Lógica de Categorias
Categoria	Exemplo de Produto	Tamanhos?	Checkout
camiseta	Camiseta Bolsonaro Livre	✅ Sim (P, M, G, GG)	Link por tamanho
bone	Boné Bolsonaro	❌ Não	Checkout direto
caneca	Caneca Bolsonaro Presidente	❌ Não	Checkout direto
🔗 Integração com Yampi

Cada produto contém um campo checkoutLink, que leva diretamente para a página de pagamento da Yampi.
No caso das camisetas, há links diferentes por tamanho.

Exemplo:

P → https://thisisbrazil.pay.yampi.com.br/r/MJP0HKOESE

M → https://thisisbrazil.pay.yampi.com.br/r/MLN2VWX3RF

📈 Rastreamento de Campanhas (Tráfego Pago)

URLs personalizadas com parâmetros UTM:

?utm_source=facebook&utm_medium=paid&utm_campaign=promo3dias

Instalação do Pixel Meta no site para acompanhar eventos de compra e visita de página.

☁️ Deploy
🔹 Backend (Render)

Criado serviço web Node.js.

Build command: npm start

Pasta pública configurada corretamente (/public/images).

🔹 Frontend (Vercel)

Deploy automático via GitHub.

Variáveis de ambiente:

REACT_APP_API_URL=https://thisisbrazil...

🧪 Testes Locais

Iniciar backend:

cd backend
node server.js

Acesse → http://localhost:4000/api/products

Iniciar frontend:

cd frontend
npm start

Acesse → http://localhost:3000

Teste de imagem:

http://localhost:4000/images/camiseta.jpeg

Desenvolvido por

Tiago Sousa
💼 Desenvolvedor Full Stack
💻 Tecnologias: React, Node.js, Express, API REST, MongoDB, TypeScript
🎨 Experiência prévia: Design Gráfico e Edição de Vídeo
🌐 Portfólio: thisisbrazil.com.br
