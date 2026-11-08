// ============================================================
//  Bota-Fora do Felipe e da Cacaia — DADOS DA PÁGINA
//  Fonte: planilha "Cópia de Lista móveis a venda" (Google Drive)
// ============================================================
//
// Campos de cada item:
//   id            identificador e nome da pasta em midia/<id>/
//   nome          como aparece no card
//   preco         número em reais (null = "a combinar")
//   disponivelEm  null = já disponível; senão "AAAA-MM-DD"
//   status        "disponivel" (padrão) | "reservado" | "vendido"
//   reservadoAte  "AAAA-MM-DD" (opcional, só para reservado)
//   loja          link do produto novo (opcional)
//   obs           observações livres (opcional): NF, defeitos, vantagens...
//   midia         lista de arquivos em midia/<id>/ (fotos .jpg e vídeos .mp4)
//   album         link de álbum externo, ex. Google Fotos (opcional)
//   documentos    [{ nome: "Manual", arquivo: "documentos/x.pdf" }] (opcional)

window.CONFIG = {
  whatsapp: "5531971150601",
  whatsappTexto: "(31) 97115-0601",
  endereco: "Av. Álvares Cabral, 387, Lourdes",
  referencia: "ponto do Conexão Aeroporto",
  mapa: "https://www.google.com/maps/search/?api=1&query=Av.+%C3%81lvares+Cabral%2C+387%2C+Lourdes%2C+Belo+Horizonte",
};

const fotos = (id, n, ext = "jpg") =>
  Array.from({ length: n }, (_, i) => `midia/${id}/${String(i + 1).padStart(2, "0")}.${ext}`);

window.ITENS = [
  { id: "lava-roupa", status: "vendido", nome: "Lava e seca Philco Eco Inverter PLS11C (lava 11 kg / seca 7 kg)", preco: 1590, disponivelEm: "2026-12-18", loja: "https://www.mercadolivre.com.br/lava-e-seca-philco-eco-inverter-11kg-titanio-pls11c-127v/up/MLBU2788848558",
    midia: (f => [f[0], "midia/lava-roupa/10.mp4", ...f.slice(1)])(fotos("lava-roupa", 9)),
    obs: "Em ótimo estado. Nenhum defeito.\nAinda temos o manual em PDF, a NF e os parafusos de transporte.\nMedidas: 59,5 cm (L) × 62,5 cm (P) × 85 cm (A).",
    documentos: [{ nome: "Manual de instruções", arquivo: "documentos/lava-e-seca-philco-manual.pdf" }] },
  { id: "carrinho-doona", nome: "Carrinho Doona", preco: 1390, disponivelEm: null },
  { id: "cama-casal", nome: "Cama de casal + colchão", preco: 1100, disponivelEm: null, midia: fotos("cama-casal", 6),
    obs: "Box baú com pistões a gás: a tampa levanta fácil e embaixo tem bastante espaço para guardar coisas.\nColchão Nature de espuma, bem conservado: sem manchas e sem partes afundadas." },
  { id: "lava-louca", nome: "Lava-louças Brastemp 8 serviços inox (BLF08BS)", preco: 1090, disponivelEm: "2026-12-18", loja: "https://www.mercadolivre.com.br/lava-loucas-brastemp-8-servicos-inox-blf08bs/p/MLB19628776",
    midia: ["01.jpg", "02.mp4", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg"].map(f => "midia/lava-louca/" + f),
    obs: "Tem um arranhão na porta, que aparece nas fotos.\nTemos o manual em PDF e a NF.\nMedidas: 51 cm (L) × 63 cm (P) × 63 a 70 cm (A, conforme a regulagem dos pés).",
    documentos: [{ nome: "Manual de instruções", arquivo: "documentos/lava-loucas-brastemp-blf08bs-manual.pdf" }] },
  { id: "cadeiras-4x", nome: "Conjunto com 4 Cadeiras de Madeira Maciça Estofada Drop - Cinamomo c/ Linho Off White - Cobre - Homedock", obs: "Cadeiras em bom estado, completamente higienizadas no início de novembro/26. Temos NF do produto.", preco: 750, disponivelEm: "2026-11-11", loja: "https://m.magazineluiza.com.br/conjunto-com-4-cadeiras-de-madeira-macica-estofada-drop-cinamomo-c-linho-off-white-cobre-homedock/p/ch28hkb334/mo/ms4j/" },
  { id: "carrinho-kinderkraft", nome: "Carrinho Kinderkraft Vesto", preco: 690, disponivelEm: null, loja: "https://www.amazon.fr/dp/B0919L93QC" },
  { id: "carrinho-cabine", nome: "Carrinho dobrável / de cabine", preco: 690, disponivelEm: null, loja: "https://www.amazon.fr/dp/B0CVN4SWX6" },
  { id: "sofa", nome: "Sofá Retrátil e Reclinável Verona 2,00 m Suede Velut Tabaco - King House", preco: 690, disponivelEm: null, loja: "https://m.magazineluiza.com.br/sofa-retratil-reclinavel-verona-200m-suede-velut-tabaco-c-molas-no-assento-king-house/p/jafja78g8k/mo/msof/",
    midia: ["01.jpg", "02.mp4", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"].map(f => "midia/sofa/" + f),
    obs: "Em bom estado, sem manchas, funcionando perfeitamente, como novo.\nAssentos retráteis com molas e espuma D28; encosto reclinável em 5 posições, com almofadas de fibra siliconada. Tecido suede velut, cor tabaco. Estrutura em madeira de eucalipto e pinus.\nMedidas: 2,00 m (L) × 1,05 m (A) × 1,08 m (P) fechado; 1,53 m de profundidade com os assentos abertos.\nTemos a NF." },
  { id: "tv", nome: "Smart TV 43\" Semp Roku TV Full HD (43R6610)", preco: 690, disponivelEm: null, loja: "https://www.magazineluiza.com.br/smart-tv-led-43-full-hd-semp-roku-r6610-3-hdmi-1-usb-wi-fi-compativel-com-google-assistant-e-alexa-tcl/p/kf62bbeb0a/et/tves/",
    midia: fotos("tv", 5),
    obs: "Tela LED de 43 polegadas, Full HD (1920 × 1080), 60 Hz, com sistema Roku TV (Netflix, Prime Video, Disney+, Globoplay, YouTube etc.).\nWi-Fi dual band, 3 HDMI, 1 USB, entrada de rede, som de 16 W com Dolby Audio. Compatível com Google Assistente, Alexa e Apple AirPlay.\nMedidas: 95,5 cm (L) × 55,5 cm (A) × 9 cm (P) sem base; 60,7 cm de altura com base. Peso: 6,2 kg.\nAcompanham os pés originais, os parafusos e os adaptadores de cabo (última foto).\nTemos a NF.\nO suporte de parede das fotos é o item Painel de TV, vendido separado. Levando os dois, damos desconto." },
  { id: "fogao", nome: "Fogão com forno", preco: 595, disponivelEm: "2026-12-18", loja: "https://www.casasbahia.com.br/fogao-consul-4-bocas-cfo4nar-com-mesa-de-inox-acendimento-automatico-e-design-frente-unica-bivolt-inox/p/6460227" },
  { id: "mesa-redonda", nome: "Mesa Redonda 6 Lugares Tampo Vidro/MDF 135 cm Nuance - Yescasa (Castanho Cinamomo/Off White)", preco: 490, disponivelEm: null, loja: "https://m.magazineluiza.com.br/mesa-redonda-6-lugares-tampo-vidro-mdf-para-sala-de-jantar-135cm-nuance-yescasa-marrom-castanho-cinamomo-off-white/p/ga94hg9kb6/mo/momj/",
    midia: ["01.jpg", "02.mp4", "03.jpg", "04.jpg"].map(f => "midia/mesa-redonda/" + f),
    obs: "Em ótimo estado, sem defeitos aparentes.\nTampo off white com vidro e base castanho cinamomo. Para 6 lugares.\nMedidas: 135 cm de diâmetro × 80 cm de altura.\nTemos a NF." },
  { id: "pratos-xicaras", nome: "Conjunto de pratos e xícaras", preco: 445, disponivelEm: "2026-12-18", loja: "https://m.magazineluiza.com.br/jogo-de-jantar-30-pecas-ryo-maresia-oxford/p/ca9828abc3/ud/apja/" },
  { id: "cama-infantil", nome: "Cama infantil", preco: 345, disponivelEm: null, loja: "https://m.magazineluiza.com.br/cama-infantil-bicama-branco-completa-moveis/p/eg6j25h74c/mo/cams/" },
  { id: "microondas", nome: "Micro-ondas Consul 20 litros espelhado (CM020BF)", preco: 295, disponivelEm: "2026-12-18", loja: "https://produto.mercadolivre.com.br/MLB-4392506584-micro-ondas-consul-20-litros-cm020bf-funco-descongelar-e-_JM",
    midia: ["01.jpg", "02.mp4", "03.jpg"].map(f => "midia/microondas/" + f),
    obs: "20 litros, 620 W, 10 níveis de potência. Porta e painel espelhados, acabamento inox.\nTecla Uso Fácil (aquecer e descongelar), receitas pré-programadas (arroz, vegetais, massas, peixe, pipoca, bebida), tecla +30 segundos, relógio, timer e trava de segurança.\nMedidas: 45,5 cm (L) × 26,4 cm (A) × 35,3 cm (P). Peso: 10,5 kg." },
  { id: "cadeirinha-cosco", nome: "Cadeirinha Cosco Kids Progress, 0 a 36 kg, preta", preco: 245, disponivelEm: null, loja: "https://www.amazon.com.br/dp/B08YMXTLX2" },
  { id: "poltronas-2x", nome: "Poltronas (2 unidades)", preco: 195, disponivelEm: "2026-11-11", loja: "https://m.magazineluiza.com.br/kit-2-cadeiras-para-mesa-de-jantar-flor-balaqui-decor-jl-decor/p/ac0d6gj714/mo/mcoz/" },
  { id: "comoda", nome: "Cômoda do quarto", preco: 145, disponivelEm: null, loja: "https://m.magazineluiza.com.br/comoda-infantil-retro-duda-branco-acetinado-betula-carolina-carolina-baby/p/cb6397ha38/mo/cpbb/" },
  { id: "airfryer", nome: "Airfryer", preco: 95, disponivelEm: "2026-12-18", loja: "https://www.magazineluiza.com.br/fritadeira-eletrica-air-fryer-mondial-family-af-30-35l-preta-220v/p/ee2660bh84/ep/efso/" },
  { id: "armario-banheiro", nome: "Armário de banheiro com rodinhas", preco: 95, disponivelEm: null, loja: "https://m.magazineluiza.com.br/armario-de-banheiro-sultan-2-portas-6-prateleiras-com-espelho-branco-marrom-pnr-moveis/p/cg8dek1kc6/mo/moro/" },
  { id: "armario-cozinha", nome: "Armário de cozinha (feito por nós)", preco: 95, disponivelEm: null },
  { id: "armario-prateleiras", nome: "Armário de prateleiras da cozinha", preco: 95, disponivelEm: "2026-12-18" },
  { id: "mesa-retratil", nome: "Mesa retrátil com ferragens (2 unidades)", preco: 95, disponivelEm: null },
  { id: "mesinhas-cabeceira", nome: "Conjunto de 2 mesinhas de cabeceira", preco: 95, disponivelEm: null,
    midia: ["01.jpg", "02.mp4", "03.jpg", "04.jpg", "05.jpg", "06.mp4"].map(f => "midia/mesinhas-cabeceira/" + f),
    obs: "Preço pelas duas. Em ótimo estado de conservação, sem defeitos aparentes.\nCada uma tem uma gaveta e um nicho aberto. Tampo amadeirado, corpo branco e pés de madeira.\nMedidas: 53 cm (A) × 33,5 cm (L) × 33,5 cm (P).\nTemos a NF." },
  { id: "painel-tv", nome: "Painel de TV", preco: 95, disponivelEm: null, loja: "https://m.magazineluiza.com.br/painel-tv-sala-ate-43-polegadas-summer-varias-cores-mjm-casa-dos-moveis-jm-casa-dos-moveis/p/abak6hb08j/mo/mopa/", obs: "Levando junto com a TV, damos desconto." },
  { id: "ventilador", nome: "Ventilador (quebrado)", preco: 80, disponivelEm: null },
  { id: "chuveiro", nome: "Chuveiro Lorenzetti Ultra + chuveirinho antigo", preco: 60, disponivelEm: "2026-12-18", loja: "https://www.mercadolivre.com.br/lorenzetti-loren-shower-ultra-eletronico/p/MLB19590091" },
  { id: "tampas-vaso", nome: "Tampas de vaso com freio (2 unidades)", preco: 45, disponivelEm: null },
];
