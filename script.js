const avanca = document.querySelectorAll(".btn-proximo")

avanca.forEach(button => {
    button.addEventListener('click', function(){
         const atual = document.querySelector('.ativo');
         const proximopasso = 'passo-' + this.getAttribute ('data-proximo');

atual.classlist.remove(ativo);
document.getElementById(proximopasso).classList.add('ativo');

    })
})