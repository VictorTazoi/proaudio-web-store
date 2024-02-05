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
        name: 'JBL',
        description: 'A resume about the product',
        amount: 0,
        price: '99.9',
        image: 'midia/headphone-03.jpg',
        available: 29
    },
    {
        id: 1,
        name: 'Product 02',
        description: 'A resume about the product',
        amount: 0,
        price: '199.9',
        image: 'midia/headphone-03.jpg',
        available: 2
    },
    {
        id: 2,
        name: 'Product 03',
        description: 'A resume about the product',
        amount: 0,
        price: '499.9',
        image: 'midia/headphone-03.jpg',
        available: 29
    },
    {
        id: 3,
        name: 'Product 04',
        description: 'A resume about the product',
        amount: 0,
        price: '499.9',
        image: 'midia/headphone-03.jpg',
        available: 29
    },
    {
        id: 4,
        name: 'Product 05',
        description: 'A resume about the product',
        amount: 0,
        price: '499.9',
        image: 'midia/headphone-03.jpg',
        available: 29
    },
    {
        id: 5,
        name: 'Product 06',
        description: 'A resume about the product',
        amount: 0,
        price: '499.9',
        image: 'midia/headphone-03.jpg',
        available: 29
    },
    {
        id: 6,
        name: 'Product 07',
        description: 'A resume about the product',
        amount: 0,
        price: '499.9',
        image: 'midia/headphone-03.jpg',
        available: 29
    },
    {
        id: 7,
        name: 'Product 08',
        description: 'A resume about the product',
        amount: 0,
        price: '499.9',
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
                <p class="onCartProduto"></p>
                <div class="conteinerBotaoCarrinho">
                    <button class="btn btn-outline-dark carrinhoProduto" key="`+val.id+`" href="">Add to cart</button>
                </div>
            </div>
        `;
    })
}

listagemProdutos();


// CARRINHO
var showCart = document.getElementById('showCart');
showCart.innerHTML = 'Empty Cart';
var conteinerCarrinho = document.getElementById('conteinerCarrinho');
conteinerCarrinho.innerHTML = "<img src='../midia/icons/icon-empty-100.png'>"

function atualizarCarrinho(){
    var conteinerCarrinho = document.getElementById('conteinerCarrinho');
    var showCart = document.getElementById('showCart');
    showCart.innerHTML = 'Cart';
    conteinerCarrinho.innerHTML = '';
    produtos.map((val)=>{
        if(val.amount > 0 && val.amount <= val.available){
            val.available - 1;
            document.getElementsByClassName('onCartProduto')[val.id].innerText = `Cart: ${val.amount}`
            conteinerCarrinho.innerHTML += `
            <div class="card mb-3 cardCarrinho">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img class="imagemCarrinho" src="`+val.image+`"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="tituloCarrinho">`+val.name+`</p>
                        <p class="precoCarrinho">Price: <strong>`+tipoMoeda+` `+val.price+`</strong></p>
                        <p class="quantidadeCarrinho">Amount: <strong>`+val.amount+`un</strong></p>
                        <p class="quantidadeCarrinho">Total: <strong>`+tipoMoeda+` `+(val.price*val.amount).toFixed(2)+`</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }else if(val.amount >= val.available){ //CASO O USUÁRIO SELECIONE A QUANTIDADE MÁXIMA DISPONÍVEL NO ESTOQUE:
            val.amount = val.available; //Quantidade igual a estoque

            //Retorno ao usuário de Limite excedido
            let onCart = document.getElementsByClassName('onCartProduto')[val.id];
            onCart.style.color = 'red';
            onCart.innerText = `Cart: ${val.amount} | No more units available!`

            conteinerCarrinho.innerHTML += `
            <div class="card mb-3 cardCarrinho">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img class="imagemCarrinho" src="`+val.image+`"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="tituloCarrinho">`+val.name+`</p>
                        <p class="precoCarrinho">Price: <strong>`+val.price+`</strong></p>
                        <p class="quantidadeCarrinho">Amount: <strong>`+val.amount+`un</strong></p>
                        <p class="quantidadeCarrinho">Total: <strong>`+tipoMoeda+` `+(val.price*val.amount).toFixed(2)+`</strong></p>
                        </div>
                    </div>
                </div>
            </div>`
        }
    })
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
