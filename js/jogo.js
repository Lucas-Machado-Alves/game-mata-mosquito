var altura = 0
var largura = 0
var vidas = 1
var tempo = 20
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {

    criaMosquitoTempo = 2000

} else if (nivel === 'dificil') {

    criaMosquitoTempo = 1500

} else {

    criaMosquitoTempo = 1000
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight //esta pegando o valor da largura da pagina
    largura = window.innerWidth //esta pegando o valor da altura da pagina
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()//chama a função

var cronometro = setInterval(function () {

    tempo--

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {

        document.getElementById('cronometro').innerHTML = tempo

    }

}, 1000)

function posicaoRandomica() {


    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        // console.log('elementos selecionados foi: v' + vidas)
        if (vidas > 3) {

            window.location.href = 'fim_de_jogo.html'
        } else {

            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90 //o Math.random gera valores aleatorios que vão de 0 a 1
    var posicaoY = Math.floor(Math.random() * altura) - 90  //A função Math.floor(x) retorna o menor número inteiro.

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //======criar elemento html (O MOSQUITO)
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + '' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
    console.log(ladoAleatorio())

}

//========altera o tamanho da imagem da mosca
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return ' mosquito1'
        case 1:
            return ' mosquito2'
        case 2:
            return ' mosquito3'
    }
}

//========imagem vira para esquerda e direita
function ladoAleatorio() {

    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return ' ladoA'
        case 1:
            return ' ladoB'

    }
}

//