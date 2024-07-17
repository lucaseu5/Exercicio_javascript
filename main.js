const form = document.getElementById('form-principal')
const numeroB = document.getElementById('numeroB')
const numeroA = document.getElementById('numeroA')

function soma(numA,numB){
    return Number(numA)+ Number(numB)
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    const resultado = soma(numeroA.value, numeroB.value)
    const mensagemSucesso = `Esta correto! a soma dos numeros ${numeroA.value } + ${numeroB.value} é: ${resultado}`

    if (Number(numeroB.value) > Number(numeroA.value)) {
        const containerMensagemSucesso = document.querySelector('.succes_message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = "";
        numeroB.value = "";

    } else {
        numeroA.style.border = '1px solid red'
        numeroB.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block'
    }
})

numeroA.addEventListener('keyup', function() {
    if (Number(numeroB.value) > Number(numeroA.value)) {
        numeroA.style.border = '';
        numeroB.style.border = '';
        document.querySelector('.error-message').style.display = 'none';
    }
});

numeroB.addEventListener('keyup', function() {
    if (Number(numeroB.value) > Number(numeroA.value)) {
        numeroA.style.border = '';
        numeroB.style.border = '';
        document.querySelector('.error-message').style.display = 'none';
    }
});