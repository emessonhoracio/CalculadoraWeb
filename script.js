var visor = document.getElementById('visor')
var expressao = []
function escreverTel(n){
    var selnum = document.getElementById(n)
    visor.innerText = visor.textContent + selnum.textContent
    
}
function operacao(sinal){
    var verificacao = visor.textContent
    var valorSoma = verificacao.indexOf('+')
    var valorSubtracao = verificacao.indexOf('-')
    var valorMultiplicacao = verificacao.indexOf('*')
    var valorDivisao = verificacao.indexOf('/')
    var valorPotencia = verificacao.indexOf('^')
    if (valorSoma == -1 && valorSubtracao == -1 && valorMultiplicacao == -1 && valorDivisao == -1 &&
        valorPotencia == -1){
        var txtn1 = visor.textContent
        expressao[0] = txtn1
        var selop = document.getElementsByClassName(sinal)[0]
        visor.innerText = txtn1 + " "  + selop.textContent + " "
        if (sinal == 'somar'){
            expressao[1] = 'somar'
        }else if(sinal == 'subtrair'){
            expressao[1] = 'subtrair'
        }else if(sinal == 'multiplicar'){
            expressao[1] = 'multiplicar'
        }else if(sinal == 'dividir'){
            expressao[1] = 'dividir'
        }else if(sinal == 'potencia'){
            expressao[1] = 'potencia'
        }
    }else{
        window.alert("[OPERAÇÃO INVÁLIDA]; Faça uma operação por vez!!")
    }
     
}
function resultado(){
    var ex = visor.textContent
    expressao[2] = ex
    for (c = 0; c < expressao[2].length; c++){
        if (expressao[2][c] == ' '){
            c = c + 3
            var txtn2 = expressao[2][c]
            c += 1
            while (c < expressao[2].length){
                txtn2 += expressao[2][c]
                c++
            } 
            expressao[2] = txtn2
        }
    }
    var n1 = Number.parseFloat(expressao[0])
    var n2 = Number.parseFloat(expressao[2])
    var res = null
    if (expressao[1] == 'somar'){
        res = n1 + n2
        visor.innerText = res
        zerarExp()
    }else if (expressao[1] == 'subtrair'){
        res = n1 - n2
        visor.innerText = res
        zerarExp()
    }else if (expressao[1] == 'multiplicar'){
        res = n1 * n2
        visor.innerText = res
        zerarExp()
    }else if (expressao[1] == 'dividir'){
        res = n1 / n2
        visor.innerText = res
        zerarExp()
    }else if (expressao[1] == 'potencia'){
        res = n1 ** n2
        visor.innerText = res
        zerarExp()
    }
    
}
function zerarExp(){
    for (c = 0; c < expressao.length; c++){
        expressao[c] = 0
    }
}
function apagar(){
    visor.innerText = ''
}