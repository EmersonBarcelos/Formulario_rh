function atualizar(){
    var seuSalario = document.getElementById('Txsalario').value;
    var selcargo = document.getElementById('SelCargo');
    var selecionado = selcargo.options[selcargo.selectedIndex];
    if (seuSalario == ""){
        if (selecionado.value == 2){
            var valor = parseFloat("21000,00");
            document.getElementById('Txsalario').value = valor;
            var calculo = parseFloat(valor) + valor * 0.10;
            document.getElementById('TxTotalSal').value = calculo;
        }

        if (selecionado.value == 3){
            var valor2 = parseFloat("11000,00");
            document.getElementById('Txsalario').value = valor2;
            var calculo2 = parseFloat(valor2) + valor2 * 0.05;
            document.getElementById('TxTotalSal').value = calculo2;
        }

        if (selecionado.value == 4){
            var valor3 = parseFloat("9500,00");
            document.getElementById('Txsalario').value = valor3;
            document.getElementById('TxTotalSal').value = valor3
        }

        if (selecionado.value == 5){
            var valor4 = parseFloat("10500,00");
            document.getElementById('Txsalario').value = valor4;
            document.getElementById('TxTotalSal').value = valor4;
        }
    }
    else {
       if (selecionado.value == 2){
           valor = parseFloat(seuSalario) + seuSalario * 0.10;
           document.getElementById('TxTotalSal').value = valor;
       }

       if (selecionado.value == 3){
           valor = parseFloat(seuSalario) + seuSalario * 0.05;
           document.getElementById('TxTotalSal').value = valor;
       }

       if (selecionado.value == 4){
           document.getElementById('TxTotalSal').value = parseFloat(seuSalario);
       }

       if (selecionado.value == 5){
           document.getElementById('TxTotalSal').value = parseFloat(seuSalario);
       }    
    }    
}

function verificar_dados(){
    var data_informada = document.getElementById('Txdate').value;
    var desmembrar = data_informada.split('-');
    var ano_informado = desmembrar[0];
    var ano_atual = new Date().getFullYear();
    var idade = parseInt(ano_atual) - parseInt(ano_informado);
    if (idade < 18){
        alert("O funcionário deve ser maior de idade para o cadastro!");
        return false;
    }
    var nome = document.getElementById('TxNome').value; 
    var avaliar = !!nome.match(/[a-z]* [a-z]*/);
    if (avaliar == false){
        alert("O campo nome deve ter no mínimo o nome, segundo nome e/ou sobrenome")
        return false;    
    }
    else{
        document.Cadastro.submit();
    }
}
