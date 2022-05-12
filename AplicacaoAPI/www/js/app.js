let btnSortear = document.querySelector(".btn-sortear");
let quote = document.querySelector(".mensagem");

btnSortear.addEventListener('click', function () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://breaking-bad-quotes.herokuapp.com/v1/quotes");

    xhr.addEventListener("load", function () {
        let resposta = xhr.responseText;
        let mostraBusca = JSON.parse(resposta);

        quote.innerHTML = resposta

    });
    xhr.send();
});


