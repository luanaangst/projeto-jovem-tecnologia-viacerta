const submeterFormulario = () => {
  const rangeInicial = document.getElementById("RangeInicial").value;
  const rangeFinal = document.getElementById("RangeFinal").value;
  const minhaAposta = document.getElementById("minhaAposta").value;

  realizarSorteio(+rangeInicial, +rangeFinal, +minhaAposta);
}

  const realizarSorteio = (rangeInicial, rangeFinal, minhaAposta) => {
  
    if (!rangeInicial) {
       alert('Informe o range inicial!');
       return;
    }
    if (!rangeFinal) {
        alert('Informe o range final!');
        return;
     }
     if (!minhaAposta) {
        alert('Informe a sua aposta!');
        return;
     }
     const numeroSorteado = novoSorteio(rangeInicial, rangeFinal);

     if (numeroSorteado === minhaAposta) {
         alert('Parabéns! Você acertou');
         return;
     }

     alert(`Errou! O número sorteado foi ${numeroSorteado}`);
  }

  const novoSorteio = (rangeInicial, rangeFinal) => {
      return (Math.floor(Math.random() * (rangeFinal - rangeInicial + 1))+rangeInicial);
  }
/* esqueceu a git aberta no pc da femakkkkkkkk*/
