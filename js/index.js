// DETECTAR O TIPO DE DISPOSITIVO. RETORNA TRUE CASO SEJA MOBILE
var isMobile = /android|iphone|kindle|ipad/i.test(navigator.userAgent);

// LOGO DA NAVBAR
const logoNavbar = document.getElementById('logoNavbar');
logoNavbar.src = "midia/full-logo.png";

if(isMobile){
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.add('navbarLinksMOBILE');
}

// LOGO PRINCIPAL
const conteudo01Logo = document.getElementById('conteudo01Logo');
conteudo01Logo.src = "midia/full-logo.png";

// CONTEUDO 02 BLOCO 01
const imgAnuncio01 = document.getElementById('imgAnuncio01');
imgAnuncio01.src = "midia/anuncio01.png";

// CONTEUDO 02 BLOCO 02
const imgAnuncio02 = document.getElementById('imgAnuncio02');
imgAnuncio02.src = "midia/anuncio02.png";

// CONTEUDO 02 BLOCO 03
const imgAnuncio03 = document.getElementById('imgAnuncio03');
imgAnuncio03.src = "midia/anuncio03.png";

// CONTEUDO 03 CATEGORIA 01
const conteudo03Imagem01 = document.getElementById('conteudo03Imagem01');
conteudo03Imagem01.src = "midia/tws-in-ear-headphones-01.png";

// CONTEUDO 03 CATEGORIA 02
const conteudo03Imagem02 = document.getElementById('conteudo03Imagem02');
conteudo03Imagem02.src = "midia/tws-in-ear-headphones-01.png";
