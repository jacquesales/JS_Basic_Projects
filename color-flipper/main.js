const colors = ['salmon','aquamarine','hotpink','gold','cyan','green','orange','red','magenta','blue','violet'];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

// obter nº aleatório (colors index) 
btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();    

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

function getRandomNumber() { // retorna nº flutuante aleatório entre 0 e 1, excluindo o 1
    return Math.floor(Math.random() * colors.length); // aplicando a variável colors com num inteiro
}