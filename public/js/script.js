class Empregado {
    constructor() {
       
    }
    validar(nome, data) {
        if (!!nome.match(/[a-z]* [a-z]*/) == false){
            throw new Error("O campo nome deve ter no mínimo o nome, segundo nome e/ou sobrenome");
        }
        var value_split = data.split('-');
        var anoInformado = value_split[0];
        var anoAtual = new Date().getFullYear();
        var idade = parseFloat(anoAtual) - parseFloat(anoInformado);
        if (idade < 18){
            throw new Error("O funcionário deve ser maior de idade para o cadastro!")
        }
        document.Cadastro.submit()
    }
    calcular(){
        var seuSalario = document.getElementById('Txsalario').value;
        var selcargo = document.getElementById('SelCargo');
        var selecionado = selcargo.options[selcargo.selectedIndex];
        if (isNaN(seuSalario) || seuSalario.trim().length == 0){
            if (selecionado.value == 2){
                var valor = document.getElementById('Txsalario').value = parseFloat("21000,00");
                document.getElementById('TxTotalSal').value = parseFloat(valor) + valor * 0.10;
            }
    
            if (selecionado.value == 3){
                var valor2 = document.getElementById('Txsalario').value = parseFloat("11000,00");
                document.getElementById('TxTotalSal').value = parseFloat(valor2) + valor2 * 0.05;
            }
    
            if (selecionado.value == 4){
                document.getElementById('Txsalario').value = parseFloat("9500,00");
                document.getElementById('TxTotalSal').value = parseFloat("9500,00");
            }
    
            if (selecionado.value == 5){
                document.getElementById('Txsalario').value = parseFloat("10500,00");
                document.getElementById('TxTotalSal').value = parseFloat("10500,00");
            }
        }
        else if (selecionado.value == 2){
                document.getElementById('TxTotalSal').value = parseFloat(seuSalario) + seuSalario * 0.10;
             }
    
             if (selecionado.value == 3){
                 document.getElementById('TxTotalSal').value = parseFloat(seuSalario) + seuSalario * 0.05;
             }
    
             if (selecionado.value == 4){
                 document.getElementById('TxTotalSal').value = parseFloat(seuSalario);
             }
    
             if (selecionado.value == 5){
                 document.getElementById('TxTotalSal').value = parseFloat(seuSalario);
        }            
    }
}
var empregado = new Empregado();