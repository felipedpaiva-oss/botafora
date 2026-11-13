# Bota-Fora do Felipe e da Cacaia

Página de venda dos itens do bota-fora, publicada pelo GitHub Pages.

- `index.html` — a página (não precisa editar para atualizar itens)
- `itens.js` — **os dados**: preços, datas, status (disponível/reservado/vendido), observações, fotos
- `midia/<id-do-item>/` — fotos (`.jpg`) e vídeos (`.mp4`) de cada item
- `documentos/` — PDFs públicos (manuais etc.)
- `ferramentas/otimizar_midia.py` — reduz fotos/vídeos e remove metadados (GPS) antes de publicar

Adicionar mídia: `python3 ferramentas/otimizar_midia.py <id> arquivo1.jpg video.mp4 ...`
e acrescentar os caminhos gerados no campo `midia` do item em `itens.js`.
