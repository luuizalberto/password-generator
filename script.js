let sliderElement = document.getElementById('slider')
let buttonElement = document.getElementById('#button')

let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')

// quais caracteres eu quero que possa gerar
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%*" 
let novaSenha = ""

// Deixando dinâmico o tamanho da senha de acordo com a barra
sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value
}

// Função para gerar a senha
