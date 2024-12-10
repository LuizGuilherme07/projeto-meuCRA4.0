export function calcularMedia(nota1, nota2, disciplina, setMedia, setResultado) {
    if (!disciplina) {
      alert("Por favor, selecione uma disciplina.");
      return;
    }
  
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
  
    if (isNaN(n1) || isNaN(n2) || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
      alert("Por favor, insira notas válidas entre 0 e 10.");
      return;
    }
  
    const mediaCalculada = (n1 + n2) / 2;
    setMedia(mediaCalculada.toFixed(2));
  
    setResultado(mediaCalculada >= 7 ? "Aprovado" : "Reprovado");
  }  