var select = "vazio"

function calc(){
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const a1 = parseFloat(altura / 100)
    const a2 = parseInt(altura * altura) / 10000
    r = parseFloat(peso / a2).toFixed(2)

    if(select == "vazio"){resposta()}

    else if(select != "vazio"){
        document.getElementById(select).style.color = "black"
        resposta()
     }

    }

    function resposta(){
        if(r <= 18.50){
            document.getElementById("magreza").style.color = "green"
            select = 'magreza'
        }
        else if(r >= 18.51 && r <= 24.99){
            document.getElementById("normal").style.color = "green"
            select = "normal"
        }
        else if(r >= 25 && r <= 29.99){
            document.getElementById("sobrepeso").style.color = "green"
            select = "sobrepeso"
        }
        else if(r >= 30 && r <= 34.99){
            document.getElementById("obesidade").style.color = "green"
            select = "obesidade"
        }
        else if(r >= 35 && r <= 39.99){
            document.getElementById("obesidade2").style.color = "green"
            select = "obesidade2"
        }
        else if(r >= 40){
            document.getElementById("obesidade3").style.color = "green"
            select = "obesidade3"
         }
    }
   