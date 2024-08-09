var lista = document.querySelectorAll('.item')
var voltar = document.getElementById('voltar')
var avancar = document.getElementById('avancar')

var count = lista.length
var ativo = 0

avancar.onclick = () => {
    var ativoold = document.querySelector('.ativo')
    ativoold.classList.remove('ativo')
    ativo = ativo >= count -1 ? 0 : ativo + 1
    lista[ativo].classList.add('ativo')


}

voltar.onclick = () => {
    var ativoold = document.querySelector('.ativo')
    ativoold.classList.remove('ativo')

    ativo = ativo <= 0 ? count -1 : ativo -1
    lista[ativo].classList.add('ativo')
}

