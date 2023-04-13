let idade = window.prompt("qual sua idade")


function Cliente(idade) {
    this.idade = idade;    
}

const cliente1 = new Cliente(idade); 