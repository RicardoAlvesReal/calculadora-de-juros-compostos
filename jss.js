function calculaJuros() {
  //declarando variavéis e atribuindo os inputs
  var capital= $('#capital').val();
  var taxaJuros= $('#taxaJuros').val();
  var tempoAplicacao= $('#tempoAplicacao').val();
  //realizando o calculo de matemática finanaceira que vc pediu
  var taxaJuros = taxaJuros/100;
  var montante = capital*Math.pow((1+taxaJuros),tempoAplicacao);
  var tot =  montante.toString();
  var men = tot/tempoAplicacao; 
  //mandando os inputs pra pagina
  $('#total').val(tot);
  $('#mensal').val(men);
}
//função para limpar as informações e poder fazer outra operação de calculo financeiro.
function Limpar()
  {
  	//atribuí todos os elemntos de tabela como "Forma 1" e deixei o valor em branco para "limpar" na page.
   document.form1.capital.value = ""
   document.form1.taxaJuros.value = ""
   document.form1.tempoAplicacao.value = ""
   document.form1.total.value = ""
   document.form1.mensal.value = ""
    }