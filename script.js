let sliderElement = document.getElementById('slider')
let buttonElement = document.getElementById('#button')

let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')

// quais caracteres eu quero que possa gerar.
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%*-" 
let novaSenha = ""

// Deixando dinâmico o tamanho da senha de acordo com a barra.
sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value
}

// Função para gerar a senha
function generatePassword(){
    
    let pass = "" // variavel vazia pq vai receber os valores do for. A cada passada na variável charset ele vai adicionar um valor nesta variável de acordo com o tamanho que o usuário escolher.

    // Vai começar em 0 --- e vai até o tamanho que tem na variável Charset --- vai passar enquanto i for menor que o valor do slider;
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){ 
        pass += charset.charAt(Math.floor(Math.random() * n)) // charAt é a posição --- Math.floor é para gerar um inteiro e Math.ramdom para gerar um aleatório
    } 

    containerPassword.classList.remove('hide')
    password.innerHTML = pass
    novaSenha = pass
}

// Funcão de clicar e copiar e senha
function copyPassword(){
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha) // ele vai copiar o que estiver dentro dessa variável.
}