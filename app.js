// 1. Banco de dados local (Array de Objetos)
// Adicionar novos pássaros seguindo essa exata estrutura:
const birdsData = [
    {
        id: 1,
        name: "Sabiá-laranjeira",
        scientificName: "Turdus Rufiventris",
        shortDescription: "Ave símbolo do Brasil, é uma das espécies de sabiá mais conhecida.",
        fullDescription: `O sabiá-laranjeira é nativo do Brasil, Argentina, Bolívia, Paraguai e Uruguai. Ocorre numa ampla área que se estende nordeste do Brasil até o sul da Bolívia e norte-leste da Argentina.
        
        O poderoso canto, que ocorre no alvorecer (madrugada) e à tarde, tem a função de demarcar território e, no caso dos machos, para atrair a fêmea. A fêmea também canta, mas numa frequência bem menor que o macho. O canto do sabiá-laranjeira que, em geral, parece com o som de uma flauta doce, é parcialmente aprendido, havendo linhagens geográficas de tipos de canto: em outras palavras, nenhum pássaro da espécie canta exatamente como o outro.
        
        `,
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Sabi%C3%A1-laranjeira_com_minhoca.jpeg/960px-Sabi%C3%A1-laranjeira_com_minhoca.jpeg",
            "https://oeco.org.br/wp-content/uploads/oeco-migration//images/stories/set2013/4743510311_72d4db3b99_b.jpg"
        ],
        audio: "https://xeno-canto.org/1058579/download"
    },
    {
        id: 2,
        name: "Sabiá-do-campo",
        scientificName: "Mimus saturninus",
        shortDescription: "São aqueles passarinhos fofos que vemos por aí dando pequenos pulinhos.",
        fullDescription: `Diferente dos sabiás verdadeiros (sabiá-barranco, sabiá-laranjeira, sabiá-una entre outros), o sabiá-do-campo não pertence à família Turdidae, e sim à Mimidae, da qual fazem parte também o sabiá-da-praia e a calhandra-de-três-rabos.
        
        Seu habitat é desde o extremo sul do país até o extremo norte do Nordeste, no Centro-Oeste e em regiões campestres do baixo Amazonas. Andam em casais ou em bandos.

        Possuem o hábito de erguer as asas semi abertas de tempos em tempos enquanto anda pelo chão, numa exibição denominada “lampejo de asas”, e também de arrebitar a cauda quando pousam ou caminham pelo chão. 

        O casal se torna protetor de seu ninho, avançando corajosamente sobre quem quer que tente chegar perto dele e também são imitadores exímios de outras aves na natureza. Alguns sabiás repetem o canto de até 6 espécies diferentes durante a espécie reprodutiva (julho a dezembro). mas eles possuem um canto próprio.
        
        São aves que preferem caminhar mais do que voar, pois caçam em terra, se alimentando de frutos e pequenos insetos e aranhas.`,
        images: [
            "https://s2-g1.glbimg.com/8wN5j1dJGI6Rv4WHNIQg2pHgyV4=/0x0:3008x2000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/Y/r/3vO5LeSoKTA3yl2PK3sw/sabia-do-campo-mimus-saturninus-.jpg",
            "https://s2-g1.glbimg.com/GKNt6mbEQLMoJwOJas7fIVsch3Y=/0x0:1080x717/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/b/A/MEPPvhQz2sim770lhxsg/sabiadocampo.jpg"
        ],
        audio: "https://xeno-canto.org/803038/download"
    },
    {
        id: 3,
        name: "Rolinha roxa",
        scientificName: "Columbina talpacoti",
        shortDescription: "Extremamente dóceis e fofas essas coisinhas gordas",
        fullDescription: "",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Columbina_talpacoti-3.jpg/960px-Columbina_talpacoti-3.jpg",
            "https://www.ufrgs.br/faunadigitalrs/wp-content/uploads/2022/01/63.-ROLINHA-ROXA-scaled.jpg",
            "https://www.avescatarinenses.com.br/imagens/fotos/rolinha_roxa_columbidae_columbina_talpacoti_3714.jpg"
        ],
        audio: "https://xeno-canto.org/1140148/download"
    },
    {
        id: 4,
        name: "Anu-branco",
        scientificName: "Guira guira",
        shortDescription: "Predador feroz de pásaros menores, como a rolinha",
        fullDescription: "",
        images: [
            "https://inaturalist-open-data.s3.amazonaws.com/photos/23659730/large.jpg",
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a6b69905-c22d-44ee-b8c0-e446fc7e00f2/dj88kps-a45503e9-cf66-47de-bfdf-fd0de27d5e74.jpg/v1/fill/w_1032,h_774,q_70,strp/rabo_de_palha_guira_cuckoo_by_patricianicoloso_dj88kps-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzg4OCIsInBhdGgiOiIvZi9hNmI2OTkwNS1jMjJkLTQ0ZWUtYjhjMC1lNDQ2ZmM3ZTAwZjIvZGo4OGtwcy1hNDU1MDNlOS1jZjY2LTQ3ZGUtYmZkZi1mZDBkZTI3ZDVlNzQuanBnIiwid2lkdGgiOiI8PTUxODQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.PEk9wiLtpYCNZlLdRCDC_VnGsWDLIjDvmO2abLDARvs"
        ],
        audio: "https://xeno-canto.org/1080162/download"
    },
    {
        id: 5,
        name: "Sanhaçu-cinzento",
        scientificName: "Thraupis sayaca",
        shortDescription: "Ave de cor azul-acinzentada, muito ativa e frequente em pomares e jardins.",
        fullDescription: "O sanhaçu-cinzento é extremamente comum em quase todo o Brasil. Possui uma plumagem predominantemente cinzenta, com reflexos azulados nas asas e na cauda dependendo da iluminação. Adora se alimentar de frutas maduras (como mamão e banana) e vive em casais ou pequenos bandos, fazendo bastante barulho ao voar entre as árvores.",
        images: [
            "https://cultura.jundiai.sp.gov.br/wp-content/uploads/2021/02/sanhacu-cinzento-768x576.jpg",
            "https://s2.glbimg.com/my2N5QIhFlAvV14Tul28pTn1jYA=/s.glbimg.com/jo/g1/f/original/2015/11/30/sanhacu-cinzento-tangara-sayaca.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/ea/Sayaca_tanager.JPG"
        ],
        audio: "https://xeno-canto.org/326042/download"
    },
    {
        id: 6,
        name: "Pomba-asa-branca",
        scientificName: "Patagioenas picazuro",
        shortDescription: "Famosa por cagar nas pessoas e com um canto que se parece um soluço estranhamento lindo. Talvez as pombas não sejam tão horripilantes, afinal",
        fullDescription: "",
        images: [
            "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/74648461/900",
            "https://i0.wp.com/mccuration.com/wp-content/uploads/2023/12/DSC6621C2.jpg.jpg?resize=1024%2C819&ssl=1",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Patagioenas_picazuro_854.jpg/960px-Patagioenas_picazuro_854.jpg"
        ],
        audio: "https://xeno-canto.org/7278/download"
    }
];

// 2. Variáveis de controle do Modal e Carrossel
let currentBird = null;
let currentImageIndex = 0;

// 3. Elementos do HTML capturados pelo JS
const gridContainer = document.getElementById('catalog-grid');
const modal = document.getElementById('bird-modal');
const closeModalBtn = document.getElementById('close-modal');
const prevBtn = document.getElementById('prev-pic');
const nextBtn = document.getElementById('next-pic');
const modalAudio = document.getElementById('modal-audio');

// 4. Função para desenhar os cartões na tela principal
function renderGrid() {
    birdsData.forEach(bird => {
        // Cria a caixinha do cartão
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Define o conteúdo do cartão (usa a primeira imagem da lista)
        card.innerHTML = `
            <img src="${bird.images[0]}" alt="${bird.name}">
            <div class="card-content">
                <h3>${bird.name}</h3>
                <p>${bird.shortDescription}</p>
            </div>
        `;
        
        // Configura o clique para abrir o modal com as informações deste pássaro
        card.addEventListener('click', () => openModal(bird));
        
        // Coloca o cartão dentro da grade principal
        gridContainer.appendChild(card);
    });
}

// 5. Funções de controle do Modal
function openModal(bird) {
    currentBird = bird;
    currentImageIndex = 0; // Começa sempre na primeira foto
    
    // Alimenta os campos do modal com as informações do pássaro clicado
    document.getElementById('modal-title').innerText = bird.name;
    document.getElementById('modal-scientific-name').innerText = bird.scientificName;
    document.getElementById('modal-description').innerText = bird.fullDescription;
    
    // Alimenta o player com o link do áudio do pássaro
    modalAudio.src = bird.audio;
    modalAudio.load(); // Carrega o novo arquivo de som

    updateModalImage();
    
    // Mostra o modal aplicando a classe CSS
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    modalAudio.pause(); // PAUSA O ÁUDIO se o usuário fechar o modal
    modalAudio.src = ""; // Limpa o áudio antigo
}

function updateModalImage() {
    const modalImg = document.getElementById('modal-img');
    modalImg.src = currentBird.images[currentImageIndex];
}

// 6. Lógica do Carrossel de Fotos
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita bugs de clique
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = currentBird.images.length - 1; // Volta para a última se passar da primeira
    }
    updateModalImage();
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImageIndex++;
    if (currentImageIndex >= currentBird.images.length) {
        currentImageIndex = 0; // Volta para a primeira se passar da última
    }
    updateModalImage();
});

// 7. Eventos de fechar o modal
closeModalBtn.addEventListener('click', closeModal);

// Fecha o modal se o usuário clicar na área escura fora da caixinha branca
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Inicializa a grade assim que a página abre
renderGrid();