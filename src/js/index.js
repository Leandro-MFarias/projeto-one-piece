const btn = document.querySelectorAll('.btn')
const personagem = document.querySelectorAll('.personagem')

btn.forEach((botao, index) => {
    botao.addEventListener('click', () => {

        btnAtivo()
        personagemAtivo()

        botao.classList.add('ativo')
        personagem[index].classList.add('ativo')
    })
})

function personagemAtivo() {
    const personagemAtivo = document.querySelector('.personagem.ativo')
    personagemAtivo.classList.remove('ativo')
}

function btnAtivo() {
    const btnAtivo = document.querySelector('.btn.ativo')
    btnAtivo.classList.remove('ativo')
}