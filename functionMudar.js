
/*FUNCAO PARA MUDAR A FOTO DA FLORESTA*/
function MudaImagem(tipo) {
          if (tipo == 1) {
            arquivo = "foto01.jpeg";
          }
          if (tipo == 2) {
            arquivo = "foto02.jpeg";
          }
          document.getElementById("imagemF").src = arquivo;
        }

/*FUNCAO PARA MUDAR O ICONE*/
function mudarIcones(Nfoto){
            document.getElementById("icone").src= Nfoto;
        }