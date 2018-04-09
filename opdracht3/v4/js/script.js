var requestURL = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=70';
var request = new XMLHttpRequest(); 

// haal API url op met json
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var cryptoList = request.response;
    showCryptos(cryptoList);
};

// volledige functie weergeven api data
function showCryptos(jsonObj) {
    var crypto = jsonObj;
    
    
    // stelt data uit voor wegeven loader

        for (var i = 0; i < crypto.length; i++) {
        console.table(crypto[i]);
        
        // enkel naamgeving aan variabelen     
        var price = crypto[i].price_eur;
        var cryptoList = crypto[i].rank;

        // creeren elementen om weer te geven in dom    
        var coinList = document.querySelector('.coinlist');
        var cryptoRank = document.createElement('li');
        var cryptoSymbol = document.createElement('li');
        var cryptoName = document.createElement('p');
        var cryptoPrice = document.createElement('li');
        var cryptoChange = document.createElement('li');
        var cryptoCap = document.createElement('li');

        // plaatst content of functie in domelement     
        cryptoRank.textContent = [i +1];
        cryptoName.innerHTML = crypto[i].name;
        cryptoSymbol.innerHTML = crypto[i].symbol;
        cryptoPrice.innerHTML = "€ " + price;
        cryptoChange.innerHTML = crypto[i].percent_change_24h + "  %"; 
        cryptoCap.innerHTML = crypto[i].percent_change_7d + "  %";
        
        // creert lijst voor elk element en plaatst deze in een item
        for (var j = 0; j < cryptoList.length; j++) {
            var listItem = document.createElement('ul');
            coinList.appendChild(listItem);
        };
    
        // geeft class aan aangemaakte elementen voor styling    
        listItem.classList.add("crypto");
        cryptoRank.classList.add("rank");
        cryptoSymbol.classList.add("symbol");
        cryptoName.classList.add("name");
        cryptoPrice.classList.add("price");
        cryptoChange.classList.add("change");
        cryptoCap.classList.add("capacity");

        // plaatst de elementen op juiste plek in dom            
        listItem.appendChild(cryptoRank);    
        listItem.appendChild(cryptoSymbol);
        cryptoSymbol.appendChild(cryptoName);
        listItem.appendChild(cryptoPrice);
        listItem.appendChild(cryptoChange);
        listItem.appendChild(cryptoCap);
            
            
    };
};

// Sticky header
window.addEventListener('scroll', function() {    
    var top = this.scrollY;
    var tableHead = document.querySelector(".headlist");
    var coinList = document.querySelector(".coinlist");
    
    if (top >= 75) {
        tableHead.classList.add("sticky");
        coinList.classList.add("scrolled");
      
        } else {
            tableHead.classList.remove("sticky");
            coinList.classList.remove("scrolled");
        }
});