/*let email = document.getElementById('ilogin')
let senha = document.getElementById('isenha')

//inplemnetar uma validaão de input
function validaCadastro(){
    if(email < 5){
        alert('digite um email valio')
    }else{
        alert('gygy')
    }
}*/

let trocarInput = document.querySelector('input')
    function trocar() {
    trocarInput.addEventListener('keydown', function(event) {
        if(event.keyCode === 13) {
            console.log('presionou a tecla enter')
        }
    })//tenter fazer
}
/*
function focar() {
    document.getElementById('ilogin').style.border = ' 9px solid blue'
}

function desfocar(){
    document.getElementById('ilogin').style.border = '1px solid red'
}

const clicar = function() {
    const botao = document.getElementById('button')
    botao.onclick = () => botao.style.backgroundColor = 'red'
}*/
const senha = document.getElementsByName('senha') //

senha.addEventListener('focus', (event) => {
    event.target.style.background  = "black"
})
/*
const password = document.querySelector('input[type="password"]');

password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});*/