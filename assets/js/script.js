let nome = document.querySelector('#txt_nome')
let email = document.querySelector('#txt_email')
let assunto = document.querySelector('#txt_assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {

    let input = document.querySelector('#inputNome')

    if(nome.value.length < 3) {
        input.innerHTML = 'Nome inválido - Insira no mínimo 3 caracteres ❌'
        input.style.color = '#953636'
        nomeOk = false

    } else {
        input.innerHTML = 'Nome válido ✔'
        input.style.color = '#9bf79b'
        nomeOk = true
    }

    if(nome.value.length == 0) {
        input.innerHTML = ' '
        nomeOk = false
    }
}

function validaEmail() {

    let input = document.querySelector('#inputEmail')
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.value.match(regex)) {
        input.innerHTML = 'Email válido ✔'
        input.style.color = '#9bf79b'
        emailOk = true

    } else {
        input.innerHTML = 'Email inválido ❌'
        input.style.color = '#953636'
        emailOk = false
    }

    if(email.value.length == 0) {
        input.innerHTML = ' '
        emailOk = false
    }
}

function validaAssunto() {

    let input = document.querySelector('#inputAssunto')
    let contador = `${assunto.value.length} / 100` 

    input.innerHTML = contador

    if(assunto.value.length >= 100) {
        input.style.color = '#953636'
        input.innerHTML = contador + ' - Texto é muito grande ❌'
        assuntoOk = false

    } else {
        input.style.color = 'unset'
        assuntoOk = true
    }
}

function enviar() {

    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')

    } else {
        alert('Preencha corretamente o formulário para enviar.')
    }
}