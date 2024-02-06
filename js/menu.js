// DETECTAR O TIPO DE DISPOSITIVO. RETORNA TRUE CASO SEJA MOBILE
var isMobile = /android|iphone|kindle|ipad/i.test(navigator.userAgent);

// LOGO DA NAVBAR
const logoNavbar = document.getElementById('logoNavbar');
logoNavbar.src = "midia/full-logo.png";

if(isMobile){
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.add('navbarLinksMOBILE');
}

//CARRINHO
var navbarLogoCarrinho = document.getElementById('navbarLogoCarrinho');
var textoCarrinho = document.getElementById('textoCarrinho');
navbarLogoCarrinho.src = "../midia/icons/icon-carrinho-96-white.png";
textoCarrinho.style.color = 'white';

function mouseLeaveCarrinho(){
    navbarLogoCarrinho.src = "../midia/icons/icon-carrinho-96-white.png";
    textoCarrinho.style.color = 'white';
}
function mouseEnterCarrinho(){
    navbarLogoCarrinho.src = "../midia/icons/icon-carrinho-96-black.png";
    textoCarrinho.style.color = 'black';
}
function onClickCarrinho(){
    location = '#showCart';
}

// LISTAGEM DE PRODUTOS 
const produtos = [
    {
        id: 0,
        name: 'EchoGrove Serenity',
        description: 'Offers exceptional comfort and balanced sound quality, providing moments of tranquility, whether at home or on the go.',
        amount: 0,
        price: '149.99',
        image: 'midia/headphone-03.jpg',
        available: 29
    },
    {
        id: 1,
        name: 'AcousticAura Pro',
        description: 'Focused on premium sound quality, it offers a perfect balance between powerful bass and crystal-clear highs, using advanced technology and high-quality materials.',
        amount: 0,
        price: '179.99',
        image: 'midia/headphone-03.jpg',
        available: 2
    },
    {
        id: 2,
        name: 'TempoTunes Bliss',
        description: 'Affordable, lightweight, and comfortable headphones, providing clear and balanced sound for those seeking quality without compromising the budget.',
        amount: 0,
        price: '129.99',
        image: 'midia/headphone-03.jpg',
        available: 29
    },
    {
        id: 3,
        name: 'HarmonyHarbor Luxe',
        description: 'Luxurious in design and performance, these premium headphones offer high-quality finish, advanced connectivity, and an exceptional frequency response.',
        amount: 0,
        price: '199.99',
        image: 'midia/headphone-03.jpg',
        available: 29
    },
    {
        id: 4,
        name: 'BassBeat Forge',
        description: 'Designed for deep bass lovers, the BassBeat Forge offers an immersive audio experience with an emphasis on deeper sounds, being an affordable option.',
        amount: 0,
        price: '89.99',
        image: 'midia/headphone-03.jpg',
        available: 29
    },
    {
        id: 5,
        name: 'InfinitySound Zenith',
        description: 'Designed for discerning audio enthusiasts, InfinitySound Zenith offers exceptional sound reproduction across all frequencies, providing an unparalleled audio experience.',
        amount: 0,
        price: '169.99',
        image: 'midia/headphone-03.jpg',
        available: 29
    },
    {
        id: 6,
        name: 'PulseSync Horizon',
        description: 'Provides seamless synchronization between audio and ergonomic design for an immersive musical experience, ideal for those seeking comfort and sound quality.',
        amount: 0,
        price: '139.99',
        image: 'midia/headphone-03.jpg',
        available: 29
    },
    {
        id: 7,
        name: 'ZenSonic Precision',
        description: 'Focused on sonic precision, ZenSonic Precision offers faithful and clear audio reproduction, being the choice for those looking for a precise auditory experience.',
        amount: 0,
        price: '159.99',
        image: 'midia/headphone-03.jpg',
        available: 29
    }
]

//LISTAGEM
var tipoMoeda = "$"; //Declara o tipo de moeda

function listagemProdutos(){
    var conteinerProdutos = document.getElementById('conteinerProdutos');
    produtos.map((val)=>{
        var availableNow = val.available;
        conteinerProdutos.innerHTML += `
            <div class="col-sm-3 cardProduto">
                <img class="imagemProduto" src="`+val.image+`"/>
                <p class="tituloProduto">`+val.name+`</p>
                <p class="descricaoProduto">`+val.description+`</p>
                <p class="precoProduto">`+tipoMoeda+` `+val.price+`</p>
                <p class="estoqueProduto">Available: `+availableNow+`</p>
                <p class="onCartProduto">On cart:</p>
                <div class="conteinerBotaoCarrinho">
                    <button class="btn btn-outline-dark carrinhoProduto" key="`+val.id+`" href="">Add to cart</button>
                </div>
            </div>
        `;
    })
}

listagemProdutos();


// CARRINHO

//Enquanto o carrinho estiver vazio, exibe a mensagem 'Carrinho Vazio'
var showCart = document.getElementById('showCart');
showCart.innerHTML = 'Empty Cart';

//Enquanto o carrinho estiver vazio, exibe uma imagem 'Lupa'
var conteinerCarrinho = document.getElementById('conteinerCarrinho');
conteinerCarrinho.innerHTML = "..."

function atualizarCarrinho(){
    //Após o carrinho receber um produto, troca a mensagem anterior pela mensagem 'Carrinho'
    var showCart = document.getElementById('showCart');
    showCart.innerHTML = 'Cart';
    //Após o carringo receber um produto, apaga a imagem 'lupa'
    var conteinerCarrinho = document.getElementById('conteinerCarrinho');
    conteinerCarrinho.innerHTML = '';

    var totalCarrinho = 0;//Variável do valor total adicionado ao carrinho

    produtos.map((val)=>{

        if(val.amount > 0 && val.amount <= val.available){ //CASO O USUÁRIO ADICIONE UMA QUANTIDADE QUE AINDA ESTEJA DENTRO DO LIMITE DO ESTOQUE:

            val.available - 1; //Subtrai 1 unidade do estoque

            document.getElementsByClassName('onCartProduto')[val.id].innerText = `Cart: ${val.amount}` //Retorna no card da listagem um valor correspondente á quantidade selecionada

            conteinerCarrinho.innerHTML += `
            <div class="card mb-3 cardCarrinho">
                <div class="card-body">
                    <div class="tituloCarrinho">`+val.name+`</div>
                    <div class="precoCarrinho">Price: <strong>`+tipoMoeda+` `+val.price+` | `+val.amount+`un</strong></p>
                    <div class="quantidadeCarrinho">Total: <strong>`+tipoMoeda+` `+(val.price*val.amount).toFixed(2)+`</strong></div>
                </div>
            </div>`;
        totalCarrinho += Number(val.price*val.amount)//Calcula o preço * quantidade e atribui á variável totalCarrinho
        }
        
        else if(val.amount >= val.available){ //CASO O USUÁRIO SELECIONE A QUANTIDADE MÁXIMA DISPONÍVEL NO ESTOQUE:

            val.amount = val.available; //Quantidade igual a estoque

            //Retorno ao usuário de Limite excedido
            let onCart = document.getElementsByClassName('onCartProduto')[val.id]; //Elemento ID onCartProduto (Feedback de quantidade)
            onCart.style.color = 'red'; //Ao exceder o limite do estoque, aplicar fonte vermelha
            onCart.innerText = `Cart: ${val.amount} | No more units available!` //Ao exceder o limite do estoque, retornar mensagem

            conteinerCarrinho.innerHTML += `
            <div class="card mb-3 cardCarrinho">
                <div class="card-body">
                    <div class="tituloCarrinho">`+val.name+`</div>
                    <div class="precoCarrinho">Price: <strong>`+tipoMoeda+` `+val.price+` | `+val.amount+`un</strong></p>
                    <div class="quantidadeCarrinho">Total: <strong>`+tipoMoeda+` `+(val.price*val.amount).toFixed(2)+`</strong></div>
                </div>
            </div>`;
            totalCarrinho += Number(val.price*val.amount); //Calcula o preço * quantidade e atribui á variável totalCarrinho
        }
    })

    
    //Calculo de valor de frete
    var valorFrete = 40.00; //Valor estatico de frete
    var freteResumo = document.getElementById('totalFrete'); // Coleta o elemento de ID 'totalFrete' para atribuição do valor do frete
    freteResumo.innerText = ' ' + tipoMoeda + valorFrete;

    totalCarrinho += valorFrete
    
    //Calculo de valor total do carrinho
    var totalResumo = document.getElementById('totalResumo'); //Coleta o elemento de ID 'totalResumo' para futura atribuição da variável 'valorCarrinho'
    totalResumo.innerText = ' ' + tipoMoeda + Number(totalCarrinho.toFixed(2));
}

var links = document.getElementsByClassName('carrinhoProduto');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        produtos[key].amount++;
        atualizarCarrinho();
        return false;
    })
}
