import express from "express";
import cors from "cors";

const app = express();
app.use(cors());


// SUJEITOS — 80 opções
//
var sujeito=[
"Minha vida","Meu futuro","Meu psicológico","Minha sanidade","Meu destino","Minha motivação",
"Meu foco","Minha esperança","Minha carreira","Minha sorte","Meu caminho","Minha paciência","Minha energia",
"Meu controle emocional","Meu senso de direção","Minha estabilidade","Meu cérebro","Minha consciência",
"Meu emocional","Minha alma","Meu espírito","Minhas decisões","Meu livre-arbítrio","Minha paz interior",
"Meu planejamento","Meu controle de danos","Minha lógica","Minhas expectativas","Meu equilíbrio",
"Meu senso de prioridade","Meu raciocínio","Minha autoestima","Minha ambição","Meus planos",
"Meu senso crítico","Minha vida financeira","Minha capacidade de reagir","Minha maturidade","Minha força mental",
"Meu autocontrole","Minha responsabilidade","Minha percepção","Minha lucidez","Minha coragem",
"Meu autoconceito","Meu humor","Minha chance de sucesso","Minha disposição","Minha vontade de viver",
"Meu impulso de sobrevivência","Minha sanidade restante","Meu descanso","Minha humanidade","Minha fé no futuro",
"Minha calma","Meu discernimento","Meu autocuidado","Minha consciência social","Meu senso básico",
"Minha energia vital","Minha habilidade de planejar","Meu potencial","Meu destino quebrado",
"Minha timeline emocional","Meu cérebro sobrecarregado","Minhas últimas esperanças","Minha integridade mental",
"Meu juízo final","Meu senso de autopreservação","Meu controle interno","Meu sentido de realidade",
"Minha capacidade de melhorar","Minha vida emocional caótica","Minha bússola interna","Minhas escolhas ruins"
];


//
// VERBOS — 60 opções
//
var verbo=[
"tá mais quebrado que","tá mais condenado que","tá mais perdido que","desce mais rápido que",
"se desmonta mais rápido que","corre mais risco que","grita mais alto que","afunda mais rápido que",
"fracassa mais que","derrete mais rápido que","se entrega mais fácil que","entra em colapso mais rápido que",
"falha mais que","treme mais que","sofre mais impacto que","desmorona igual","fica instável igual",
"se parte igual","implora mais que","desiste mais que","foge mais que","pede arrego igual","estremece igual",
"cai igual","se arrebenta mais que","trava igual","explode igual","apita igual alarme quebrado",
"despenca mais que","afunda igual pedra em lago","capota mais que","escorrega igual sabão molhado",
"desintegra igual fumaça","tritura mais que","vira pó mais rápido que","despedaça igual vidro",
"se perde igual","desanda mais que","colapsa igual estrela morrendo","fede mais que","some mais rápido que",
"treme igual gelatina nervosa","declina igual mercado em crise","apaga igual vela no vento",
"surta igual roteador ruim","entra em parafuso igual avião velho","rasga igual papel barato",
"derrete igual vela no inferno","despenca igual torre mal construída",
"trava igual PC com vírus","capota igual carro sem freio","pirraça igual entidade cansada",
"implora socorro igual alma penada","sofre mais que senha esquecida","se joga igual suicídio emocional",
"foge igual sombra à luz","surta igual demônio ansioso"
];


//
// COMPLEMENTOS — 90 opções
//
var complemento=[
"um elevador sem cabo","um barco furado no oceano","um esqueleto com crise existencial",
"um ritual mal feito","uma alma presa em segunda-feira","uma lanterna sem pilha no apocalipse",
"um sarcófago claustrofóbico","uma promessa de político em eleição","um cadáver pagando boleto",
"um filme de terror sem final feliz","uma terapia feita por estagiário sonâmbulo",
"um gênio da lâmpada sem vontade de viver","um fantasma com burnout","um demônio sem motivação",
"um zumbi desistindo de caminhar","um lobisomem estressado","um vampiro anêmico","um anjo depressivo",
"um palhaço triste no fundo do poço","uma alma atormentada","um mutante sem poderes",
"um herói sem roteiro","um vilão cansado da própria vilania","um padre com dúvida de fé",
"uma entidade em crise de propósito","um mago sem mana","um feiticeiro sem feitiço",
"um dragão com dor nas costas","um ogro sem paciência","um goblin derrotado","um troll reclamando da vida",
"um gato sem sete vidas","um corvo sem presságio","uma bruxa sem vassoura",
"um espírito pedindo férias","um monge sem sabedoria","um gladiador sem espada",
"um guerreiro sem XP","um samurai sem honra","um ninja barulhento","um vampiro de ressaca",
"uma múmia enfaixada errado","um gnomo deprimido","um morto-vivo com ansiedade",
"um monstro sem motivação","uma criatura noturna com preguiça","um ritual cancelado",
"um portal do caos trancado","um universo bugado","um feitiço que voltou errado",
"um preságio que deu ruim","uma maldição cansada","um karma perdido","um destino bêbado",
"uma sombra com medo da luz","um demônio em treinamento","um espírito recém-desempregado",
"um anjo desistente","uma gargalhada fúnebre falhada","um terror psicológico com preguiça",
"uma piada sem graça no velório","um pedido de ajuda ignorado",
"uma mensagem do além extraviada","um espírito sem metas","um pântano existencial",
"um caixão com cupim","uma lápide mal escrita","um crepúsculo sem romance",
"uma floresta assombrada sem assombração","um fantasma que não assusta mais",
"uma nuvem carregada de problemas","um feitiço do azar","uma maldição de segunda-feira",
"um buraco negro com preguiça","um abismo olhando de volta","um eco sem força",
"uma tempestade com burnout","um trovão tímido","um eclipse deprimido",
"um fim do mundo sem roteiro","uma profecia mal traduzida"
];


//
// FINAIS — 70 opções
//
var final=[
"e isso é só antes do café.","e sinceramente já aceitei.","e nem me surpreende mais.",
"e o universo continua rindo de mim.","e essa é a parte leve.","e eu sigo fingindo que tá tudo bem.",
"e isso virou rotina.","e ainda dizem que eu exagero.","e isso nem é metade do problema.",
"e eu só observo o caos.","e honestamente já desisti.","e continuo vivendo por teimosia.",
"e o destino ainda diz que dá pra piorar.","e nem terapia resolve.","e eu só rio pra não chorar.",
"e isso acontece toda semana.","e a vida me olha e ri.","e eu continuo tentando entender por quê.",
"e essa novela nunca acaba.","e isso é mais comum do que deveria.","e eu nem tenho mais energia pra reagir.",
"e a vida ainda cobra ingresso.","e nada mudou desde ontem.","e eu só penso em desistir com estilo.",
"e isso resume meu ano.","e eu ignoro porque dói menos.","e sigo empurrando com a barriga.",
"e o caos virou meu amigo.","e a desgraça já sabe meu endereço.","e eu só aceito como hobby.",
"e o destino gosta de humilhar.","e isso não deveria ser normal.","e eu tô rindo de nervoso.",
"e eu só espero que piore devagar.","e eu coleciono derrotas com orgulho.",
"e isso ainda é pouco.","e eu continuo sendo figurante da minha vida.","e a tragédia virou rotina.",
"e eu tô acostumado já.","e eu só finjo que não vi.","e isso nem arranha a superfície.",
"e eu agradeço por não piorar tão rápido.","e eu só observo o fogo queimar.",
"e é por isso que eu não faço planos.","e eu tô vivendo no modo aleatório.",
"e ninguém se importa mais.","e eu não tenho controle nenhum.",
"e eu já aceitei o caos como estilo de vida.","e eu tô sobrevivendo por milagre.",
"e eu rio porque desistir dá trabalho.","e nada muda nesta realidade.",
"e eu tô carregando a vida no modo ultra-hard.","e eu aceitei minha roleplay de NPC.",
"e assim seguimos.","e no fim é só mais um capítulo triste.",
"e eu deveria ganhar salário por sofrimento.","e isso descreve minha existência.",
"e o universo joga contra.","e nada melhora.","e eu só vejo decadência.",
"e eu faço parte do problema.","e eu não tenho mais lágrimas.",
"e é isso mesmo.","e o mundo continua girando errado."
];


//
// GERADOR FINAL
//
var s=sujeito[Math.floor(Math.random()*sujeito.length)];
var v=verbo[Math.floor(Math.random()*verbo.length)];
var c=complemento[Math.floor(Math.random()*complemento.length)];
var f=final[Math.floor(Math.random()*final.length)];

s+" "+v+" "+c+", "+f;
)


app.get("/random", (req, res) => {
  res.send(gerarPiada());
});

app.listen(process.env.PORT || 3000, () => {
  console.log("API de piadas rodando na porta " + (process.env.PORT || 3000));
});
