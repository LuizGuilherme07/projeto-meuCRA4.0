export function obterBoletosSalvos() {
    const boletosSalvos = JSON.parse(localStorage.getItem("boletos")) || [];
    return boletosSalvos;
  }  