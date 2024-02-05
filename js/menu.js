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

function mouseLeaveCarrinho(){
    navbarLogoCarrinho.src = "../midia/icons/icon-carrinho-96-white.png";
    textoCarrinho.style.color = 'white';
}
function mouseEnterCarrinho(){
    navbarLogoCarrinho.src = "../midia/icons/icon-carrinho-96-black.png";
    textoCarrinho.style.color = 'black';
}

// LISTAGEM PRODUTOS 
const produtos = [
    {
        id: 0,
        name: 'JBL',
        description: 'A resume about the product',
        amount: 0,
        price: '99.9 USD',
        image: 'midia/headphone-03.jpg'
    },
    {
        id: 1,
        name: 'Product 02',
        description: 'A resume about the product',
        amount: 0,
        price: '199.9 USD',
        image: 'midia/headphone-03.jpg'
    },
    {
        id: 2,
        name: 'Product 03',
        description: 'A resume about the product',
        amount: 0,
        price: '499.9 USD',
        image: 'midia/headphone-03.jpg'
    },
    {
        id: 3,
        name: 'Product 04',
        description: 'A resume about the product',
        amount: 0,
        price: '499.9 USD',
        image: 'midia/headphone-03.jpg'
    },
    {
        id: 4,
        name: 'Product 05',
        description: 'A resume about the product',
        amount: 0,
        price: '499.9 USD',
        image: 'midia/headphone-03.jpg'
    },
    {
        id: 5,
        name: 'Product 06',
        description: 'A resume about the product',
        amount: 0,
        price: '499.9 USD',
        image: 'midia/headphone-03.jpg'
    },
    {
        id: 6,
        name: 'Product 07',
        description: 'A resume about the product',
        amount: 0,
        price: '499.9 USD',
        image: 'midia/headphone-03.jpg'
    },
    {
        id: 7,
        name: 'Product 08',
        description: 'A resume about the product',
        amount: 0,
        price: '499.9 USD',
        image: 'midia/headphone-03.jpg'
    }
]

//LISTAGEM
function listagemProdutos(){
    var conteinerProdutos = document.getElementById('conteinerProdutos');
    produtos.map((val)=>{
        conteinerProdutos.innerHTML += `
            <div class="col-sm-3 cardProduto">
                <img class="imagemProduto" src="`+val.image+`"/>
                <p class="tituloProduto">`+val.name+`</p>
                <p class="descricaoProduto">`+val.description+`</p>
                <p class="precoProduto">`+val.price+`</p>
                <div class="conteinerBotaoCarrinho">
                    <button class="btn btn-outline-dark carrinhoProduto" key="`+val.id+`" href="">Add to cart</button>
                </div>
            </div>
        `;
    })
}

listagemProdutos();


function atualizarCarrinho(){
    var conteinerCarrinho = document.getElementById('conteinerCarrinho');
    var showCart = document.getElementById('showCart');
    showCart.innerHTML = 'Cart';
    conteinerCarrinho.innerHTML = '';
    produtos.map((val)=>{
        if(val.amount > 0){
            conteinerCarrinho.innerHTML += `
            <div class="col-sm-3 cardCarrinho">
                <p class="tituloCarrinho">`+val.name+`</p>
                <p class="precoCarrinho">`+val.price+`</p>
                <p class="quantidadeCarringo">Amount: `+val.amount+`</p>
            </div>
        `;
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