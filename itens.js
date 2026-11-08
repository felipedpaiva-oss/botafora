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
  { id: "lava-roupa", nome: "Lava e seca Philco Eco Inverter PLS11C (lava 11 kg / seca 7 kg)", preco: 1590, disponivelEm: "2026-12-18", loja: "https://www.mercadolivre.com.br/lava-e-seca-philco-eco-inverter-11kg-titanio-pls11c-127v/up/MLBU2788848558",
    midia: [...fotos("lava-roupa", 9), "midia/lava-roupa/10.mp4"],
    obs: "Em ótimo estado. Nenhum defeito.\nAinda temos o manual em PDF, a NF e os parafusos de transporte.\nMedidas: 59,5 cm (L) × 62,5 cm (P) × 85 cm (A).",
    documentos: [{ nome: "Manual de instruções", arquivo: "documentos/lava-e-seca-philco-manual.pdf" }] },
  { id: "carrinho-doona", nome: "Carrinho Doona", preco: 1390, disponivelEm: null },
  { id: "cama-casal", nome: "Cama de casal + colchão", preco: 1100, disponivelEm: null, midia: fotos("cama-casal", 6),
    obs: "Box baú com pistões a gás: a tampa levanta fácil e embaixo tem bastante espaço para guardar coisas.\nColchão Nature de espuma, bem conservado: sem manchas e sem partes afundadas." },
  { id: "lava-louca", nome: "Lava-louças", preco: 1090, disponivelEm: "2026-12-18", loja: "https://www.mercadolivre.com.br/lava-loucas-brastemp-8-servicos-inox-blf08bs/p/MLB19628776" },
  { id: "cadeiras-4x", nome: "Cadeiras (4 unidades)", preco: 750, disponivelEm: "2026-11-11", loja: "https://m.magazineluiza.com.br/conjunto-com-4-cadeiras-de-madeira-macica-estofada-drop-cinamomo-c-linho-off-white-cobre-homedock/p/ch28hkb334/mo/ms4j/" },
  { id: "carrinho-kinderkraft", nome: "Carrinho Kinderkraft Vesto", preco: 690, disponivelEm: null, loja: "https://www.amazon.fr/dp/B0919L93QC" },
  { id: "carrinho-cabine", nome: "Carrinho dobrável / de cabine", preco: 690, disponivelEm: null, loja: "https://www.amazon.fr/dp/B0CVN4SWX6" },
  { id: "sofa", nome: "Sofá", preco: 690, disponivelEm: null, loja: "https://m.magazineluiza.com.br/sofa-retratil-reclinavel-verona-200m-suede-velut-tabaco-c-molas-no-assento-king-house/p/jafja78g8k/mo/msof/" },
  { id: "tv", nome: "TV", preco: 690, disponivelEm: null, loja: "https://www.magazineluiza.com.br/smart-tv-led-43-full-hd-semp-roku-r6610-3-hdmi-1-usb-wi-fi-compativel-com-google-assistant-e-alexa-tcl/p/kf62bbeb0a/et/tves/" },
  { id: "fogao", nome: "Fogão com forno", preco: 595, disponivelEm: "2026-12-18", loja: "https://www.casasbahia.com.br/fogao-consul-4-bocas-cfo4nar-com-mesa-de-inox-acendimento-automatico-e-design-frente-unica-bivolt-inox/p/6460227" },
  { id: "mesa-redonda", nome: "Mesa redonda", preco: 490, disponivelEm: null },
  { id: "pratos-xicaras", nome: "Conjunto de pratos e xícaras", preco: 445, disponivelEm: "2026-12-18", loja: "https://m.magazineluiza.com.br/jogo-de-jantar-30-pecas-ryo-maresia-oxford/p/ca9828abc3/ud/apja/" },
  { id: "cama-infantil", nome: "Cama infantil", preco: 345, disponivelEm: null, loja: "https://m.magazineluiza.com.br/cama-infantil-bicama-branco-completa-moveis/p/eg6j25h74c/mo/cams/" },
  { id: "microondas", nome: "Micro-ondas", preco: 295, disponivelEm: "2026-12-18", loja: "https://produto.mercadolivre.com.br/MLB-4392506584-micro-ondas-consul-20-litros-cm020bf-funco-descongelar-e-_JM" },
  { id: "cadeirinha-cosco", nome: "Cadeirinha Cosco Kids Progress, 0 a 36 kg, preta", preco: 245, disponivelEm: null, loja: "https://www.amazon.com.br/dp/B08YMXTLX2" },
  { id: "poltronas-2x", nome: "Poltronas (2 unidades)", preco: 195, disponivelEm: "2026-11-11", loja: "https://m.magazineluiza.com.br/kit-2-cadeiras-para-mesa-de-jantar-flor-balaqui-decor-jl-decor/p/ac0d6gj714/mo/mcoz/" },
  { id: "comoda", nome: "Cômoda do quarto", preco: 145, disponivelEm: null, loja: "https://m.magazineluiza.com.br/comoda-infantil-retro-duda-branco-acetinado-betula-carolina-carolina-baby/p/cb6397ha38/mo/cpbb/" },
  { id: "airfryer", nome: "Airfryer", preco: 95, disponivelEm: "2026-12-18", loja: "https://www.magazineluiza.com.br/fritadeira-eletrica-air-fryer-mondial-family-af-30-35l-preta-220v/p/ee2660bh84/ep/efso/" },
  { id: "armario-banheiro", nome: "Armário de banheiro com rodinhas", preco: 95, disponivelEm: null, loja: "https://m.magazineluiza.com.br/armario-de-banheiro-sultan-2-portas-6-prateleiras-com-espelho-branco-marrom-pnr-moveis/p/cg8dek1kc6/mo/moro/" },
  { id: "armario-cozinha", nome: "Armário de cozinha (feito por nós)", preco: 95, disponivelEm: null },
  { id: "armario-prateleiras", nome: "Armário de prateleiras da cozinha", preco: 95, disponivelEm: "2026-12-18" },
  { id: "mesa-retratil", nome: "Mesa retrátil com ferragens (2 unidades)", preco: 95, disponivelEm: null },
  { id: "mesinhas-cabeceira", nome: "Mesinhas de cabeceira (2 unidades)", preco: 95, disponivelEm: null },
  { id: "painel-tv", nome: "Painel de TV", preco: 95, disponivelEm: null, loja: "https://m.magazineluiza.com.br/painel-tv-sala-ate-43-polegadas-summer-varias-cores-mjm-casa-dos-moveis-jm-casa-dos-moveis/p/abak6hb08j/mo/mopa/" },
  { id: "ventilador", nome: "Ventilador (quebrado)", preco: 80, disponivelEm: null },
  { id: "chuveiro", nome: "Chuveiro Lorenzetti Ultra + chuveirinho antigo", preco: 60, disponivelEm: "2026-12-18", loja: "https://www.mercadolivre.com.br/lorenzetti-loren-shower-ultra-eletronico/p/MLB19590091" },
  { id: "tampas-vaso", nome: "Tampas de vaso com freio (2 unidades)", preco: 45, disponivelEm: null },
];
