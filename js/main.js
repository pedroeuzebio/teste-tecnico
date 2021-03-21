

$(document).ready(function () {
 /*criação dos campos*/
    $("#criar-campos").on('click', function () {
        
        var numCampos = parseInt($("#qtde-campos").val());
        /*limpando valores necessários a cada vez que o botão é apertado*/
        $("#aviso").text("")
        $("#result").val("");
        $("#campos").empty();
        if (numCampos >= 2 && numCampos <= 100) { /*definindo um limite superior (100) para o numero de campos*/
            $("#campos").html(function () {
                for (var i = 0; i < numCampos; i++) {

                    $("#campos").append('<input type="number" class="campo" required>');
                }
            });
        } else if (numCampos > 100) {
            $("#aviso").text("A quanntidade limite de números para fazer uma operação é 100");
        }

        else if (numCampos < 2) {
            $("#aviso").text("Só é possível realizar operações com dois ou mais números");
        }
    });
  /*limpeza dos dados o apertar o botão */
    $("#limpar").on('click', function () {
        $("#campos").empty();
        $("#result").val("");
        $("#qtde-campos").val("");
    });
  
    $('#soma').on('click', function () {

        let resultado = 0;
        $("#campos").children().each(function () {
            resultado = resultado + parseFloat($(this).val());
        });
        $("#result").val(resultado);
        console.log(resultado);

    });

    $("#subtração").on('click', function () {

        resultado = (parseFloat($("#campos").children(0).val())); // pegando o primeiro valor, para posteriormente subtrair todos os outos dele
        $("#campos").children().each(function (i) {
            if (i != 0) {
                resultado = resultado - parseFloat($(this).val());
            }
        });
        $("#result").val(resultado);

    });

    

});

