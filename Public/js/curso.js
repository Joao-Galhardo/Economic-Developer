function mostrarInfo(id) {

    // A função pega todos os elementos que contem a classe conteudoMateria e transformam todos em display none a partir do for e depois ela pega apenas o id que foi escolhi e transforma em display flex
    
    
    var conteudoMateria = document.getElementsByClassName('conteudoMateria');
    for (var i = 0; i < conteudoMateria.length; i++) {
      conteudoMateria[i].style.display = 'none';
    }
  
    
    var conteudo = document.getElementById(id);
    conteudo.style.display = 'flex';
  }
  
  // Aqui eu defino um evento de click para os botões, e esses botões entregam o ID para função
  
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
  
  
  