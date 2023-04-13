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
trocarInput.addEventListener('keydown', function(event) {
    if(event.keyCode === 13) {
        console.log('presionou a tecla enter')
    }
})//tenter fazer


function focar() {
    document.getElementById('ilogin').style.border = ' 9px solid blue'
}

function desfocar(){
    document.getElementById('ilogin').style.border = '1px solid grey'
}

const clicar = function() {
    const botao = document.getElementById('button')
    botao.onclick = () => botao.style.backgroundColor = 'red'
}