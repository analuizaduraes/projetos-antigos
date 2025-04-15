const buttonCalc = document.getElementById('btn-calc');
const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');

function calcularIdade(dia, mes, ano) {
    const hoje = new Date();
    const dataNascimento = new Date(ano, mes - 1, dia); // Subtrai 1 do mês, já que os meses em JavaScript são baseados em zero (janeiro = 0, fevereiro = 1, etc.)
  
    let idadeEmAnos = hoje.getFullYear() - dataNascimento.getFullYear();
    const idadeEmMeses = hoje.getMonth() - dataNascimento.getMonth();
    let idadeEmDias = hoje.getDate() - dataNascimento.getDate();
  
    // Ajuste para casos onde o mês atual é menor que o mês de nascimento ou no mesmo mês, mas o dia atual é anterior ao dia de nascimento
    if (idadeEmMeses < 0 || (idadeEmMeses === 0 && idadeEmDias < 0)) {
      idadeEmAnos--;
    }
  
    // Ajuste para casos onde o dia atual é anterior ao dia de nascimento
    if (idadeEmDias < 0) {
      idadeEmDias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }
  
    return {
      anos: idadeEmAnos,
      meses: idadeEmMeses,
      dias: idadeEmDias,
    };
  }

buttonCalc.addEventListener('click', function() {
    console.log(inputDay.value);
    console.log(inputMonth.value);
    console.log(inputYear.value);

    const years = Number(inputYear.value);
    const months = Number(inputMonth.value);
    const days = Number(inputDay.value);


    const resultado = calcularIdade(days, months, years);

    const yearsResult = document.getElementById('years-result');
    yearsResult.innerText = resultado.anos;
    const monthsResult = document.getElementById('months-result');
    monthsResult.innerText = resultado.meses;
    const daysResult = document.getElementById('days-result');
    daysResult.innerText = resultado.dias;
}); 
