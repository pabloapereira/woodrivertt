//setTimeout(introducao, 2000)

onload = function(alo){

}

const alo = function() {
    return 'Bem-vindo'
}

alert(alo())

//function introducao(){
  var idade = prompt('qual sua idade')
  var nome = prompt('qual seu nome')
  confirm(`seu nome é ${nome} ?`)
//}

var validaIdade = function(idade){
    return idade < 18;
}


if (validaIdade(idade)) {
  alert("Pesa autorização dos responaseis antes de realizar uma compra");
} else {
  alert("Menor de idade");
}