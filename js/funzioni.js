

function readJson(){

   
    fetch('../domande.json')
        .then((response) => response.json())
        .then((json) => {
            let domande = json;
            let titoloDomanda = domande.Domande[1].Domanda1;
            let rispostaCorretta = domande.Domande[0].RispostaCorretta;
            document.getElementById("output").innerHTML = "<h2> " + titoloDomanda + " </h2>";
            document.getElementById("output").innerHTML = rispostaCorretta;
        });


        

}

