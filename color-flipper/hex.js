const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', function() { // selecionando cores que iniciam com #
    let hexColor = '#';
    
    for (let i = 0; i < 6; i++) { // percorrendo e adicionando nº aleatórios pra formar cores hexadecimais
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber () { // formando a combinação de nº hex
    return Math.floor(Math.random() * hex.length);
}