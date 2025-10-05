function alterarStatus(jogo){
    let imagemJogo = document.querySelector(`#game-${jogo} div`)
    console.log(imagemJogo)

    let botaoJogo = document.querySelector(`#game-${jogo} a`)
    console.log(botaoJogo)

    if (imagemJogo.classList.contains('dashboard__item__img--rented')) {
        imagemJogo.classList.remove('dashboard__item__img--rented')
        botaoJogo.classList.remove('dashboard__item__button--return')
        botaoJogo.textContent = 'Alugar'
    } else if (!imagemJogo.classList.contains('dashboard__item__img--rented')) {
        imagemJogo.classList.add('dashboard__item__img--rented')
        botaoJogo.classList.add('dashboard__item__button--return')
        botaoJogo.textContent = 'Devolver'
    }
}