// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) { // executará a função para cada elemento do array botões
    btn.addEventListener("click", function(e) { // ao receber evento de click, executará a função envolvendo e retornando seu handler
        const styles = e.currentTarget.classList; // exibe em formato de lista com seu elemento e respectivo valor

        if(styles.contains("decrease")) {
            count--;            
        } else if(styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if(count < 0) {
            value.style.color = 'red';
        }
        if(count > 0) {
            value.style.color = 'green';
        }
        if(count === 0) {
            value.style.color = '#102a42';
        }
        value.textContent = count // valor irá se atualizar conforme contagem  
    })
});

