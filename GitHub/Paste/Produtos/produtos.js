let precos

let myInterval = setInterval(function promocao() {
    alert('Aproveite nossa promoção')
    precos = document.getElementsByTagName('p');
    for (let i = 0; i < precos.length; i++) {
        precos[i].innerHTML = "800,00";
    }
}, 5000)//repetir apenas uma vez

setTimeout(() => {
    alert('A promoção acabou')
    precos = document.getElementsByTagName('p');
    for (let i = 0; i < precos.length; i++) {
        precos[i].innerHTML = "999,00";
    }
    clearInterval(myInterval)
    
}, 15000)

precos = document.querySelector('p')
precos.addEventListener('mouseover', function() {
    this.style.color = 'white'
})

function cor(){
    precos = documnet.querySelector('p')
    precos.addEventListener('mouseout', function() {//tentar arrumar
        this.style.color = 'red'
    })
}