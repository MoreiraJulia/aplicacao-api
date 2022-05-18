let btnSortear = document.querySelector(".btn-sortear");
let quote = document.querySelector(".mensagem");

btnSortear.addEventListener('click', function () {
    let sorteio = new XMLHttpRequest();
    sorteio.open("GET", "https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    sorteio.addEventListener("load", function () {
        let resposta = sorteio.responseText;
        let mostraBusca = JSON.parse(resposta);

        quote.innerHTML = resposta
    });
    sorteio.send();
});


