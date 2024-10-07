

function readJson(){

   
    fetch('../domande.json')
        .then((response) => response.json())
        .then((json) => {
            let numeroDomande=2;
            let domande = json;
            let indice = 0;
            for(i=0; i < numeroDomande; i++){
                let titoloDomanda = domande.Domande[i].Domanda1;
                let rispostaCorretta = domande.Domande[i].RispostaCorretta;
                let risposta1 = domande.Domande[i].Risposta1;
                let risposta2 = domande.Domande[i].Risposta2;
                let risposta3 = domande.Domande[i].Risposta3;
                let risposta4 = domande.Domande[i].Risposta4;
                document.getElementById("output").innerHTML +=  "<h2> " + (i+1) + ") " +  titoloDomanda + " </h2>";
                document.getElementById("output").innerHTML += "<p> - " + risposta1 + " </p>";
                document.getElementById("output").innerHTML += "<p> - " + risposta2 + " </p>";
                document.getElementById("output").innerHTML += "<p> - " + risposta3 + " </p>";
                document.getElementById("output").innerHTML += "<p> - " + risposta4 + " </p>";
                document.getElementById("output").innerHTML += "<b>"+ rispostaCorretta + "</b>";
            }
            
        });


        

}

