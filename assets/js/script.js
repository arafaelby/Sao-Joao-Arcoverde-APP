// ── Referências splash ──
const splash    = document.getElementById('splash');
const app       = document.getElementById('app');
const btnEntrar = document.getElementById('btn-entrar');

function entrarNaFesta() {
  splash.classList.add('splash-saindo');
  splash.addEventListener('animationend', () => {
    splash.style.display = 'none';
    app.classList.add('visivel');
    trocarAba('inicio');
  }, { once: true });
}
btnEntrar.addEventListener('click', entrarNaFesta);

// ── Sistema de abas ──
function trocarAba(nomeAba) {
  document.querySelectorAll('.aba').forEach(a => a.classList.remove('ativa'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('ativo'));
  document.getElementById('aba-' + nomeAba)?.classList.add('ativa');
  document.querySelector(`.nav-btn[data-aba="${nomeAba}"]`)?.classList.add('ativo');

  if (nomeAba === 'favoritos') renderFavoritos();
  if (nomeAba === 'mapa') iniciarMapa();
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => trocarAba(btn.dataset.aba));
});

document.querySelectorAll('.acesso-btn').forEach(btn => {
  btn.addEventListener('click', () => trocarAba(btn.dataset.aba));
});

document.querySelectorAll('.ver-todas').forEach(btn => {
  btn.addEventListener('click', () => trocarAba(btn.dataset.aba));
});

// ── Dados dos shows ──
const DADOS_SHOWS = [
  { artista: "Coco das Irmãs Lopes",    palco: "Palco Principal",  dia: "13/06", semana: "SÁB",  genero: "Coco"            },
  { artista: "Flávio José",              palco: "Palco Principal",  dia: "13/06", semana: "SÁB",  genero: "Forró Tradicional" },
  { artista: "Alceu Valença",            palco: "Palco Principal",  dia: "13/06", semana: "SÁB",  genero: "MPB / Forró"     },
  { artista: "PV Calado",                palco: "Palco Principal",  dia: "14/06", semana: "DOM",  genero: "Forró"           },
  { artista: "Junior e Jorge",           palco: "Palco Principal",  dia: "14/06", semana: "DOM",  genero: "Forró"           },
  { artista: "Lipe Lucena",              palco: "Palco Principal",  dia: "14/06", semana: "DOM",  genero: "Forró"           },
  { artista: "Festival de Quadrilhas",   palco: "Sesc",             dia: "15/06", semana: "SEG",  genero: "Quadrilha"       },
  { artista: "Juciê",                    palco: "Palco Principal",  dia: "16/06", semana: "TER",  genero: "Forró"           },
  { artista: "Zé Vaqueiro",              palco: "Palco Principal",  dia: "16/06", semana: "TER",  genero: "Forró Moderno"   },
  { artista: "Nattan",                   palco: "Palco Principal",  dia: "16/06", semana: "TER",  genero: "Forró Moderno"   },
  { artista: "Fernandinha",              palco: "Palco Principal",  dia: "17/06", semana: "QUA",  genero: "Forró"           },
  { artista: "Eric Land",                palco: "Palco Principal",  dia: "17/06", semana: "QUA",  genero: "Forró"           },
  { artista: "Vitor Fernandes",          palco: "Palco Principal",  dia: "17/06", semana: "QUA",  genero: "Forró Moderno"   },
  { artista: "Maciel Kuré",              palco: "Palco Principal",  dia: "18/06", semana: "QUI",  genero: "Forró"           },
  { artista: "Iguinho e Lulinha",        palco: "Palco Principal",  dia: "18/06", semana: "QUI",  genero: "Forró Moderno"   },
  { artista: "Wesley Safadão",           palco: "Palco Principal",  dia: "18/06", semana: "QUI",  genero: "Forró"           },
  { artista: "Dani Aguiar",              palco: "Palco Principal",  dia: "19/06", semana: "SEX",  genero: "Forró"           },
  { artista: "Talita Mel",               palco: "Palco Principal",  dia: "19/06", semana: "SEX",  genero: "Forró"           },
  { artista: "Priscila Senna",           palco: "Palco Principal",  dia: "19/06", semana: "SEX",  genero: "Forró"           },
  { artista: "Mayana Neiva",             palco: "Palco Principal",  dia: "20/06", semana: "SÁB",  genero: "Forró"           },
  { artista: "Edy & Nathan",             palco: "Palco Principal",  dia: "20/06", semana: "SÁB",  genero: "Forró"           },
  { artista: "Fabinho Testado",          palco: "Palco Principal",  dia: "20/06", semana: "SÁB",  genero: "Forró Moderno"   },
  { artista: "Ciro Santos",              palco: "Palco Principal",  dia: "21/06", semana: "DOM",  genero: "Forró"           },
  { artista: "Assisão",                  palco: "Palco Principal",  dia: "21/06", semana: "DOM",  genero: "Forró Tradicional" },
  { artista: "Super Oara",               palco: "Palco Principal",  dia: "21/06", semana: "DOM",  genero: "Forró"           },
  { artista: "Capital do Sol",           palco: "Palco Principal",  dia: "21/06", semana: "DOM",  genero: "Forró"           },
  { artista: "Felipe Amorim",            palco: "Palco Principal",  dia: "21/06", semana: "DOM",  genero: "Forró Moderno"   },
  { artista: "Coco Fulô do Barro",       palco: "Palco Principal",  dia: "22/06", semana: "SEG",  genero: "Coco"            },
  { artista: "Geraldinho Lins",          palco: "Palco Principal",  dia: "22/06", semana: "SEG",  genero: "Forró Tradicional" },
  { artista: "Garota Safada",            palco: "Palco Principal",  dia: "22/06", semana: "SEG",  genero: "Forró"           },
  { artista: "Coco Raízes de Arcoverde", palco: "Palco Principal",  dia: "23/06", semana: "TER",  genero: "Coco"            },
  { artista: "George Silva",             palco: "Palco Principal",  dia: "23/06", semana: "TER",  genero: "Forró"           },
  { artista: "Jorge de Altinho",         palco: "Palco Principal",  dia: "23/06", semana: "TER",  genero: "Forró Tradicional" },
  { artista: "Cordel do Fogo Encantado", palco: "Palco Principal",  dia: "23/06", semana: "TER",  genero: "MPB"             },
  { artista: "João Vaqueiro",            palco: "Palco Principal",  dia: "24/06", semana: "QUA",  genero: "Forró"           },
  { artista: "Magníficos",               palco: "Palco Principal",  dia: "24/06", semana: "QUA",  genero: "Forró Tradicional" },
  { artista: "Xand Avião",               palco: "Palco Principal",  dia: "24/06", semana: "QUA",  genero: "Forró"           },
  { artista: "Will",                     palco: "Palco Principal",  dia: "25/06", semana: "QUI",  genero: "Forró"           },
  { artista: "Nágyla Ferreira",          palco: "Palco Principal",  dia: "25/06", semana: "QUI",  genero: "Forró"           },
  { artista: "João Gomes",               palco: "Palco Principal",  dia: "25/06", semana: "QUI",  genero: "Forró Moderno"   },
  { artista: "Ycaro Andrade",            palco: "Palco Principal",  dia: "26/06", semana: "SEX",  genero: "Forró"           },
  { artista: "Harry Estigado",           palco: "Palco Principal",  dia: "26/06", semana: "SEX",  genero: "Forró"           },
  { artista: "Nathanzinho Lima",         palco: "Palco Principal",  dia: "26/06", semana: "SEX",  genero: "Forró"           },
  { artista: "Flávio Leandro",           palco: "Palco Principal",  dia: "27/06", semana: "SÁB",  genero: "Forró Tradicional" },
  { artista: "Noda de Caju",             palco: "Palco Principal",  dia: "27/06", semana: "SÁB",  genero: "Forró"           },
  { artista: "Limão com Mel",            palco: "Palco Principal",  dia: "27/06", semana: "SÁB",  genero: "Forró Romântico"  },
  { artista: "Carlos e Fábio",           palco: "Palco Principal",  dia: "28/06", semana: "DOM",  genero: "Forró"           },
  { artista: "Forrozão Chacal",          palco: "Palco Principal",  dia: "28/06", semana: "DOM",  genero: "Forró Tradicional" },
  { artista: "Matheus & Kauan",          palco: "Palco Principal",  dia: "28/06", semana: "DOM",  genero: "Sertanejo"       },
];

// Mapa de fotos já disponíveis
const fotosArtistas = {
  "Wesley Safadão":          "assets/img/artistas/wesley-safadao.webp",
  "João Gomes":              "assets/img/artistas/joao-gomes.webp",
  "Matheus & Kauan":         "assets/img/artistas/matheus-kauan.webp",
  "Alceu Valença":           "assets/img/artistas/alceu-valenca.webp",
  "Xand Avião":              "assets/img/artistas/xand-aviao.webp",
  "Coco das Irmãs Lopes":    "assets/img/artistas/coco-das-irmas-lopes.webp",
  "Flávio José":             "assets/img/artistas/Flávio-José.webp",
  "PV Calado":               "assets/img/artistas/PV-Calado.webp",
  "Junior e Jorge":          "assets/img/artistas/Junior-e-Jorge.webp",
  "Lipe Lucena":             "assets/img/artistas/Lipe-Lucena.webp",
  "Festival de Quadrilhas":  "assets/img/artistas/festival-de-quadrilhas.webp",
  "Juciê":                   "assets/img/artistas/Juciê.webp",
  "Nattan":                  "assets/img/artistas/Nattan.webp",
  "Fernandinha":             "assets/img/artistas/fernandinha.webp",
  "Eric Land":               "assets/img/artistas/Eric-Land.webp",
  "Vitor Fernandes":         "assets/img/artistas/Vitor-Fernandes.webp",
  "Maciel Kuré":             "assets/img/artistas/Maciel-Kuré.webp",
  "Iguinho e Lulinha":       "assets/img/artistas/Iguinho-e-Lulinha.webp",
  "Dani Aguiar":             "assets/img/artistas/Dani-Aguiar.webp",
  "Talita Mel":              "assets/img/artistas/Talita-Mel.webp",
  "Priscila Senna":          "assets/img/artistas/Priscila-Senna.webp",
  "Mayana Neiva":            "assets/img/artistas/Mayana-Neiva.webp",
  "Edy & Nathan":            "assets/img/artistas/Edy-e-Nathan.webp",
  "Fabinho Testado":         "assets/img/artistas/Fabinho-Testado.webp",
  "Ciro Santos":             "assets/img/artistas/Ciro-Santos.webp",
  "Assisão":                 "assets/img/artistas/Assisão.webp",
  "Super Oara":              "assets/img/artistas/Super-Oara.webp",
  "Capital do Sol":          "assets/img/artistas/Capital-do-Sol.webp",
  "Felipe Amorim":           "assets/img/artistas/Felipe-Amorim.webp",
  "Coco Fulô do Barro":      "assets/img/artistas/coco-fulo-do-barro.webp",
  "Geraldinho Lins":         "assets/img/artistas/Geraldinho-Lins.webp",
  "Garota Safada":           "assets/img/artistas/garota-safada.webp",
  "Coco Raízes de Arcoverde":"assets/img/artistas/coco-raizes-de-arcoverde.webp",
  "George Silva":            "assets/img/artistas/George-Silva.webp",
  "Jorge de Altinho":        "assets/img/artistas/Jorge-de-Altinho.webp",
  "Cordel do Fogo Encantado":"assets/img/artistas/cordel-do-fogo-encantado.webp",
  "João Vaqueiro":           "assets/img/artistas/João-Vaqueiro.webp",
  "Magníficos":              "assets/img/artistas/Magníficos.webp",
  "Will":                    "assets/img/artistas/will.webp",
  "Nágyla Ferreira":         "assets/img/artistas/nagyla-ferreira.webp",
  "Zé Vaqueiro" :            "assets/img/artistas/zé-vaqueiro.webp",
  "Ycaro Andrade":           "assets/img/artistas/Ycaro-Andrade.webp",
  "Harry Estigado":          "assets/img/artistas/Harry-Estigado.webp",
  "Nathanzinho Lima":        "assets/img/artistas/Nathanzinho-Lima.webp",
  "Flávio Leandro":          "assets/img/artistas/Flávio-Leandro.webp",
  "Noda de Caju":            "assets/img/artistas/Noda-de-Caju.webp",
  "Limão com Mel":           "assets/img/artistas/Limão-com-Mel.webp",
  "Carlos e Fábio":          "assets/img/artistas/Carlos-e-Fábio.webp",
  "Forrozão Chacal":         "assets/img/artistas/Forrozão-Chacal.webp",
};

// ── Favoritos (localStorage) ──
function getFavoritos() {
  try { return JSON.parse(localStorage.getItem('sj_favoritos') || '[]'); }
  catch { return []; }
}
function salvarFavoritos(lista) {
  localStorage.setItem('sj_favoritos', JSON.stringify(lista));
}
function isFavoritado(artista) {
  return getFavoritos().includes(artista);
}
function toggleFavorito(artista) {
  let lista = getFavoritos();
  if (lista.includes(artista)) {
    lista = lista.filter(a => a !== artista);
  } else {
    lista.push(artista);
  }
  salvarFavoritos(lista);
  return lista.includes(artista);
}

// ── Helper: cria um card de show ──
function criarShowCard(show) {
  const card = document.createElement('div');
  card.className = 'show-card';

  const foto = fotosArtistas[show.artista];
  const favoritado = isFavoritado(show.artista);

  card.innerHTML = `
    <div class="show-foto-wrap">
      ${foto
        ? `<img src="${foto}" alt="${show.artista}" class="show-foto">`
        : `<span class="show-foto-placeholder"></span>`
      }
    </div>
    <div class="show-info">
      <div class="show-artista">${show.artista}</div>
      <div class="show-palco">${show.palco}</div>
      <div class="show-genero">${show.genero}</div>
    </div>
    <button class="btn-favorito ${favoritado ? 'favoritado' : ''}"
            data-artista="${show.artista}"
            aria-label="Favoritar ${show.artista}">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
           fill="${favoritado ? 'currentColor' : 'none'}"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06
                 a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23
                 l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    </button>
  `;

  // Botão favorito
  const btn = card.querySelector('.btn-favorito');
  btn.addEventListener('click', () => {
    const agora = toggleFavorito(show.artista);
    btn.classList.toggle('favoritado', agora);
    btn.classList.add('animando');
    btn.querySelector('svg').setAttribute('fill', agora ? 'currentColor' : 'none');
    btn.addEventListener('animationend', () => btn.classList.remove('animando'), { once: true });
    // Atualiza todos os outros cards com o mesmo artista (na aba fav)
    atualizarBotoesFavorito(show.artista, agora);
  });

  return card;
}

// Atualiza estado visual de todos os botões daquele artista na tela
function atualizarBotoesFavorito(artista, estado) {
  document.querySelectorAll(`.btn-favorito[data-artista="${artista}"]`).forEach(b => {
    if (b.classList.contains('animando')) return; // já foi tratado
    b.classList.toggle('favoritado', estado);
    b.querySelector('svg').setAttribute('fill', estado ? 'currentColor' : 'none');
  });
  // Se favoritos está ativa, re-renderiza
  if (document.getElementById('aba-favoritos').classList.contains('ativa')) {
    renderFavoritos();
  }
}

// ── ABA PROGRAMAÇÃO ──

// Extrai datas únicas em ordem
const datasUnicas = [...new Set(DADOS_SHOWS.map(s => s.dia))];
let diaAtivo = datasUnicas[0];
let termoBusca = '';

function renderDatas() {
  const scroll = document.getElementById('prog-datas-scroll');
  if (!scroll) return;
  scroll.innerHTML = '';
  datasUnicas.forEach(dia => {
    const show = DADOS_SHOWS.find(s => s.dia === dia);
    const btn = document.createElement('button');
    btn.className = 'data-chip' + (dia === diaAtivo ? ' ativo' : '');
    btn.innerHTML = `<span>${show.semana}</span><span>${dia.slice(0,2)}</span>`;
    btn.addEventListener('click', () => {
      diaAtivo = dia;
      renderDatas();
      renderShows();
    });
    scroll.appendChild(btn);
  });
}

function renderShows() {
  const lista = document.getElementById('prog-lista');
  if (!lista) return;
  lista.innerHTML = '';

  const termo = termoBusca.toLowerCase().trim();

  let exibidos = DADOS_SHOWS.filter(s => {
    const matchDia   = !termo && s.dia === diaAtivo;
    const matchBusca = termo && (
      s.artista.toLowerCase().includes(termo) ||
      s.palco.toLowerCase().includes(termo) ||
      s.genero.toLowerCase().includes(termo)
    );
    return matchDia || matchBusca;
  });

  if (exibidos.length === 0) {
    lista.innerHTML = `
      <div class="prog-vazio">
        <p>Nenhum show encontrado</p>
      </div>`;
    return;
  }

  exibidos.forEach(show => lista.appendChild(criarShowCard(show)));
}

// Busca
const inputBusca = document.getElementById('prog-busca');
if (inputBusca) {
  inputBusca.addEventListener('input', e => {
    termoBusca = e.target.value;
    renderShows();
  });
}

// Inicializa programação
renderDatas();
renderShows();

// ── ABA FAVORITOS ──
function renderFavoritos() {
  const favLista  = document.getElementById('fav-lista');
  const favVazio  = document.getElementById('fav-vazio');
  if (!favLista || !favVazio) return;

  const lista = getFavoritos();
  favLista.innerHTML = '';

  if (lista.length === 0) {
    favVazio.style.display  = 'flex';
    favLista.style.display  = 'none';
  } else {
    favVazio.style.display  = 'none';
    favLista.style.display  = 'block';
    // Deduplicar por artista (pode ter mesmo artista em dias diferentes)
    const vistos = new Set();
    DADOS_SHOWS.filter(s => lista.includes(s.artista) && !vistos.has(s.artista) && vistos.add(s.artista))
               .forEach(show => favLista.appendChild(criarShowCard(show)));
  }
}

// Botão "Explorar programação" na tela vazia de favoritos
const btnExplorar = document.getElementById('btn-explorar');
if (btnExplorar) {
  btnExplorar.addEventListener('click', () => trocarAba('programacao'));
}

// ── Atrações destaque (Início) ──
const fotosDestaque = {
  "Wesley Safadão":  "assets/img/artistas/wesley-safadao.webp",
  "João Gomes":      "assets/img/artistas/joao-gomes.webp",
  "Matheus & Kauan": "assets/img/artistas/matheus-kauan.webp",
  "Alceu Valença":   "assets/img/artistas/alceu-valenca.webp",
  "Xand Avião":      "assets/img/artistas/xand-aviao.webp",
};

function carregarAtracoesDestaque() {
  const container = document.getElementById('atracoes-lista');
  if (!container) return;
  container.innerHTML = '';
  const artistasDestaque = Object.keys(fotosDestaque);
  const destaques = DADOS_SHOWS.filter(s => artistasDestaque.includes(s.artista));
  destaques.forEach(show => {
    const foto = fotosDestaque[show.artista] || '';
    container.innerHTML += `
      <div class="artista-card">
        <img src="${foto}" alt="${show.artista}" class="artista-foto">
        <div class="artista-nome">${show.artista}</div>
        <div class="artista-data">${show.dia}</div>
      </div>`;
  });
}

carregarAtracoesDestaque();
trocarAba('inicio');


// ═════════════════════════════════════════
// REDIRECIONAMENTO DOS 4 BOTÕES DA ABA SERVIÇOS
// ═════════════════════════════════════════
// ── CONFIGURAR BOTÕES DA ABA SERVIÇOS ──
function configurarBotoesServicos() {
  const botoes = document.querySelectorAll('#aba-servicos .servico-btn');
  
  botoes.forEach(botao => {
    const abaDestino = botao.getAttribute('data-aba');
    if (abaDestino) {
      botao.addEventListener('click', () => {
        trocarAba(abaDestino);
      });
    }
  });
}

// Chamar a função quando a página carregar
document.addEventListener('DOMContentLoaded', configurarBotoesServicos);
// Também configurar os botões de voltar
function configurarBotoesVoltar() {
  const botoesVoltar = document.querySelectorAll('.btn-voltar');
  botoesVoltar.forEach(btn => {
    btn.addEventListener('click', () => {
      const abaVoltar = btn.getAttribute('data-aba');
      if (abaVoltar) {
        trocarAba(abaVoltar);
      }
    });
  }); 
}

// Botão de voltar
configurarBotoesVoltar();

// ── CONFIGURAR BOTÕES DO MENU LIGEIRO (aba Início) ──
function configurarMenuLigeiro() {
  // Pega todos os botões do Menu Ligeiro
  const botoesMenu = document.querySelectorAll('.acesso-btn');
  
  // Para cada botão...
  botoesMenu.forEach(botao => {
    // Pega o valor da etiqueta data-aba
    const abaDestino = botao.getAttribute('data-aba');
    
    // Se existir uma etiqueta...
    if (abaDestino) {
      // Quando clicar, vai para a aba que está na etiqueta
      botao.addEventListener('click', () => {
        trocarAba(abaDestino);
      });
    }
  });
}

// Chamar a função quando a página carregar
document.addEventListener('DOMContentLoaded', configurarMenuLigeiro);

// ── MAPA ──
let mapaIniciado = false;

function iniciarMapa() {
  if (mapaIniciado) return; // evita inicializar duas vezes
  mapaIniciado = true;

  const mapa = L.map('mapa').setView([-8.4189, -37.0539], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(mapa);

  const polos = [
    { nome: "Polo Multicultural",              descricao: "Pátio de Eventos da Estação", coords: [-8.4143, -37.0558] },
    { nome: "Polo Raízes do Coco – Lula Calixto", descricao: "Alto do Cruzeiro",        coords: [-8.4210, -37.0490] },
    { nome: "Praça da Bandeira",               descricao: "Ponto de animação – Centro",  coords: [-8.4155, -37.0540] },
    { nome: "Praça Winston Siqueira",          descricao: "Ponto de animação – Centro",  coords: [-8.4180, -37.0530] },
  ];

  polos.forEach(polo => {
    L.marker(polo.coords)
      .addTo(mapa)
      .bindPopup(`<b>${polo.nome}</b><br>${polo.descricao}`);
  });
}