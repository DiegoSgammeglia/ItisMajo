

function readJson(){
   
    fetch('../domande.json')
        .then((response) => response.json())
        .then((json) => {
            let numeroDomande=2;
            let domande = json;
            let indice = 0;
            let divOutput =  document.getElementById("output");

           
            for(i=0; i < numeroDomande; i++){
                let titoloDomanda = domande.Domande[i].Domanda;
                let rispostaCorretta = domande.Domande[i].RispostaCorretta;
                let risposta1 = domande.Domande[i].Risposta1;
                let risposta2 = domande.Domande[i].Risposta2;
                let risposta3 = domande.Domande[i].Risposta3;
                let risposta4 = domande.Domande[i].Risposta4;               
                divOutput.innerHTML +=  "<h2> " + (i+1) + ") " +  titoloDomanda + " </h2>";
                divOutput.innerHTML += '<input type="radio" id="risposta1" name="risposta1" value="' + risposta1 + '">';
                divOutput.innerHTML += '<label> '+risposta1 +'</label> <br>';
                divOutput.innerHTML += '<input type="radio" id="risposta2" name="risposta2" value="' + risposta2 + '">';
                divOutput.innerHTML += '<label> '+risposta2 +'</label> <br>';
                divOutput.innerHTML += '<input type="radio" id="risposta3" name="risposta3" value="' + risposta3 + '">';
                divOutput.innerHTML += '<label> '+risposta3 +'</label> <br>';
                divOutput.innerHTML += '<input type="radio" id="risposta4" name="risposta4" value="' + risposta4 + '">';
                divOutput.innerHTML += '<label> '+risposta4 +'</label> <br> ';
               
            }

             divOutput.innerHTML += '  <input type="submit" value="Submit">';
             
        });


        

}

