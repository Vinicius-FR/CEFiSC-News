
$.ajax(
  { url: 'https://s3.amazonaws.com/fa-vinifr-site/data.json',
   dataType: 'json',
   crossDomain: true,
   success: function (dados) {
      console.log(dados);
      montaTabela(dados);
      }
  })


  function montaTabela(dados) {

    
    for (var dados of dados.reverse()) {
      var trTabela = document.createElement("tr");
      trTabela.classList.add("paciente");

      var tdInfoFoto = document.createElement("td");
      var tdInfoNome = document.createElement("td");
      tdInfoNome.classList.add("info-nome")
      var tdInfoFaceMatch = document.createElement("td");
      

      tdInfoNome.textContent = dados.image;
      tdInfoFaceMatch.textContent = dados.text;
      tdInfoFoto = document.createElement("img");
      tdInfoFoto.height = 150;
      tdInfoFoto.width = 200;
      tdInfoFoto.src = 'https://s3.amazonaws.com/cefisc-bucket/' + dados.image + '.png';
     


      trTabela.appendChild(tdInfoFoto);
      trTabela.appendChild(tdInfoNome);
      trTabela.appendChild(tdInfoFaceMatch);
      
      var tabela = document.querySelector("#tabela-site");

      tabela.appendChild(trTabela);
    }
  }
