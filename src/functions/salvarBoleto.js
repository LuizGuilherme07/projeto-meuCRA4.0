export const salvarBoleto = (codigo, nomeCliente, valor) => {
    const boletos = JSON.parse(localStorage.getItem("boletos")) || [];
    boletos.push({ codigo, nomeCliente, valor });
    localStorage.setItem("boletos", JSON.stringify(boletos));
  };  