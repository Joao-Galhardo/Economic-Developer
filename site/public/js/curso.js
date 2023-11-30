var conteudoMateria = document.getElementsByClassName('conteudoMateria');

function mostrarInfo(id) {
  for (var i = 0; i < conteudoMateria.length; i++) {
    conteudoMateria[i].style.display = 'none';
  }
  
  var conteudo = document.getElementById(id);
  conteudo.style.display = conteudo.style.display === 'none' ? 'flex' : 'none';

  conteudo.scrollIntoView({ behavior: 'smooth' });
}

function mostrarProva() {
  for (var i = 0; i < conteudoMateria.length; i++) {
    conteudoMateria[i].style.display = 'none';
  }

  conteudoProva.style.display = conteudoProva.style.display === 'none' ? 'flex' : 'none';

  conteudoProva.scrollIntoView({behavior: 'smooth'})
}

  
  document.getElementById('btn-conteudo1').addEventListener('click', function() {
            mostrarInfo('conteudo1');
        });
  
  document.getElementById('btn-conteudo2').addEventListener('click', function() {
            mostrarInfo('conteudo2');
        });
  
  document.getElementById('btn-conteudo3').addEventListener('click', function() {
            mostrarInfo('conteudo3');
        });
  document.getElementById('btn-conteudo4').addEventListener('click', function() {
            mostrarInfo('conteudo4');
        });
  
  document.getElementById('btn-conteudo5').addEventListener('click', function() {
            mostrarInfo('conteudo5');
        });
  
  
  