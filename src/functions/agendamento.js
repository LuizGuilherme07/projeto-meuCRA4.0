export const agendar = (data, hora, tipo) => {
  if (!data || !hora) {
    return { sucesso: false, mensagem: 'Por favor, preencha todos os campos.' };
  }

  const agora = new Date();
  const dataSelecionada = new Date(`${data}T${hora}`);

  if (dataSelecionada <= agora) {
    return { sucesso: false, mensagem: 'Agendamento não concluído: data ou horário inválidos.' };
  }

  const dataPartes = data.split('-');
  const dataFormatada = `${dataPartes[2]}/${dataPartes[1]}/${dataPartes[0]}`;
  const horaFormatada = hora;

  const novoAgendamento = {
    tipo,
    data: dataFormatada,
    hora: horaFormatada,
  };

  const agendamentosExistentes = JSON.parse(localStorage.getItem('agendamentos')) || [];
  const novosAgendamentos = [...agendamentosExistentes, novoAgendamento];

  localStorage.setItem('agendamentos', JSON.stringify(novosAgendamentos));

  return { sucesso: true, mensagem: `Agendamento ${tipo} concluído para ${dataFormatada} às ${horaFormatada}!` };
};