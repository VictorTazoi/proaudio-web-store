// DETECTAR O TIPO DE DISPOSITIVO. RETORNA TRUE CASO SEJA MOBILE
var isMobile = /android|iphone|kindle|ipad/i.test(navigator.userAgent);

// LOGO DA NAVBAR
const logoNavbar = document.getElementById('logoNavbar');
logoNavbar.src = "midia/full-logo.png";

if(isMobile){
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.add('navbarLinksMOBILE');
}



let submitFiltro = document.getElementById('submitFiltro');

submitFiltro.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscrided!`
    }else{
        subResult.textContent = `You are not subscrided!`
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`
    }else if(mastercardBtn.checked){
        paymentResult.textContent = `You are paying with Mastercard`
    }else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with Paypal`
    }else{
        paymentResult.textContent = `You must select a payment option`
    }
}