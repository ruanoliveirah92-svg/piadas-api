import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// ============================
// SUJEITOS — estilo existencial
// ============================
const sujeito = [
"Minha vida", "Meu futuro", "Meu psicológico", "Minha sanidade", "Meu destino",
"Minha motivação", "Meu foco", "Minha esperança", "Minha carreira", "Minha sorte",
"Meu caminho", "Minha paciência", "Minha energia", "Meu autocontrole", "Minha lógica",
"Minhas expectativas", "Meu equilíbrio", "Minha percepção", "Minha coragem",
"Meu humor", "Minha disposição", "Minha vontade de continuar", "Meu senso de realidade",
"Meu potencial", "Minha timeline emocional", "Meu cérebro cansado", "Minhas decisões aleatórias",
"Minha bússola interna quebrada", "Minha vida emocional caótica", "Meu raciocínio defeituoso",
"Minha maturidade perdida", "Minha força mental de gelatina"
];

// ============================
// VERBOS — estilo quebrado/caótico
// ============================
const verbo = [
"tá mais perdido que", "desce mais rápido que", "falha mais que", "treme mais que",
"desanda igual", "colapsa igual", "trava igual", "despenca igual", "afunda igual", 
"implode igual", "surtando igual", "gritando igual", "capotando igual", 
"desaparecendo mais rápido que", "vacilando igual", "bugando igual", "tiltando igual",
"caindo igual", "derretendo igual", "virando pó mais rápido que", "sumindo igual",
"desmoronando igual ritual mal feito", "implorando socorro igual", "travando igual PC velho"
];

// ============================
// COMPLEMENTOS — absurdo místico/caótico
// ============================
const complemento = [
"um elevador sem cabo", "um barco furado", "um esqueleto confuso", "uma alma de segunda-feira",
"uma lanterna sem pilha", "um fantasma com burnout", "um mago sem mana", "um vampiro de ressaca",
"um dragão cansado", "um herói sem roteiro", "um monge sem sabedoria", "um ritual cancelado",
"um portal bugado", "um feitiço invertido", "um preságio que deu errado", "um destino bêbado",
"uma sombra com medo da luz", "um universo desconfigurado", "um abismo cansado de olhar de volta",
"um eco deprimido", "um trovão tímido", "uma profecia mal traduzida", "um caos de bolso",
"uma criatura preguiçosa", "um monstro sem motivação", "uma entidade sem propósito"
];

// ============================
// FINAIS — sarcasmo, caos, resignação
// ============================
const finais = [
"e sinceramente eu já aceitei.", "e isso virou rotina.", "e eu só observo o caos.",
"e honestamente eu só sigo em frente.", "e isso nem me surpreende mais.",
"e essa é a parte leve.", "e eu continuo fingindo que tá tudo bem.",
"e o universo continua rindo da minha cara.", "e eu sigo vivendo no modo aleatório.",
"e eu coleciono derrotas com orgulho.", "e isso resume meu ano.",
"e estou apenas existindo.", "e eu já desisti de entender.",
"e isso acontece toda semana.", "e é só mais um capítulo triste.",
"e eu deveria ganhar salário por isso.", "e nada muda.", "e eu só rio pra não chorar.",
"e continuo empurrando com a barriga."
];

// ============================
// GERADOR FINAL
// ============================

function gerarFrase() {
  const s = sujeito[Math.floor(Math.random() * sujeito.length)];
  const v = verbo[Math.floor(Math.random() * verbo.length)];
  const c = complemento[Math.floor(Math.random() * complemento.length)];
  const f = finais[Math.floor(Math.random() * finais.length)];

  return `${s} ${v} ${c}, ${f}`;
}

app.get("/random", (req, res) => {
  res.send(gerarFrase());
});

app.listen(process.env.PORT || 3000, () => {
  console.log("API rodando na porta " + (process.env.PORT || 3000));
});
