const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', function() { // selecionando cores que seguem a estrutura
    
    function randomColor() { 
        return Math.floor(Math.random() * 255) }

    let rgbColor = 'rgb(' + randomColor() + "," + randomColor() + "," + randomColor() + ')';
    
    color.textContent = rgbColor;
    document.body.style.backgroundColor = rgbColor;    
});