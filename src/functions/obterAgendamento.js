export function obterAgendamentosSalvos() {
    return JSON.parse(localStorage.getItem('agendamentos')) || [];
}