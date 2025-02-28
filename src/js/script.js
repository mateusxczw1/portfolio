// Seleciona os botões e as seções
const btnFormacao = document.querySelector('.formacao-btn');
const btnExperiencia = document.querySelector('.experiencia-btn');
const secaoFormacao = document.querySelector('.formacao');
const secaoExperiencia = document.querySelector('.experiencia');

function alternarSecao(secao) {

  secaoExperiencia.style.display = 'none';
  secaoFormacao.style.display = 'none';


  if (secao === 'formacao') {
      secaoFormacao.style.display = 'flex';
  } else if (secao === 'experiencia') {
      secaoExperiencia.style.display = 'flex';
  }
}




btnExperiencia.addEventListener('click', function () {
  alternarSecao('experiencia');
});

btnFormacao.addEventListener('click', function () {
  alternarSecao('formacao');
});

alternarSecao('experiencia');