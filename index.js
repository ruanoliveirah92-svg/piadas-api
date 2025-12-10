import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Categorias de piadas
const piadasMedias = [
  "Humor negro médio 1...",
  "Humor negro médio 2...",
  "Humor negro médio 3..."
];

const piadasPesadas = [
  "Humor negro pesado 1...",
  "Humor negro pesado 2...",
  "Humor negro pesado 3..."
];

const piadasInsanas = [
  "Humor negro insano 1...",
  "Humor negro insano 2...",
  "Humor negro insano 3..."
];

const piadasTematicas = [
  "Tema hospital 1...",
  "Tema família 1...",
  "Tema apocalipse 1...",
  "Tema trabalho 1..."
];

// Gera 10 milhões virtualmente (não salva, não pesa)
function gerarPiada() {
  const categorias = [
    piadasMedias,
    piadasPesadas,
    piadasInsanas,
    piadasTematicas
  ];

  // Escolher categoria
  const categoria = categorias[Math.floor(Math.random() * categorias.length)];

  // Criar variações infinitas
  const piadaBase = categoria[Math.floor(Math.random() * categoria.length)];

  const variacao = Math.floor(Math.random() * 9999999);

  return `${piadaBase} (#${variacao})`;
}

app.get("/random", (req, res) => {
  res.send(gerarPiada());
});

app.listen(process.env.PORT || 3000, () => {
  console.log("API de piadas rodando na porta " + (process.env.PORT || 3000));
});
