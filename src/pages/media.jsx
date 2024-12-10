import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/media.module.css';  
import SelecaoDisciplina from '../components/SelecaoDisciplina';
import FormularioNotas from '../components/FormularioNotas';
import Resultado from '../components/Resultado';
import BotaoVoltar from '../components/BotaoVoltar';
import { calcularMedia } from '../functions/calcularmedia';
import Logo from '../components/Logo';  

export default function MediaPage() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState('');
  const [resultado, setResultado] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [exibirMedia, setExibirMedia] = useState(false); 
  const router = useRouter();

  const voltarParaPaginaInicial = () => {
    router.push('/pagInicial');
  };

  const handleCalcularMedia = () => {
    
    calcularMedia(nota1, nota2, disciplina, setMedia, setResultado);
    setExibirMedia(true);  
  };

  useEffect(() => {
    document.title = "Calcular Média";
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.Esquerda}>
         <Logo/>
      </div>

      <div id="app" className={styles.app}>
        <header>
          <h1>Calcular Média</h1>
        </header>
        <main>
          <SelecaoDisciplina disciplina={disciplina} setDisciplina={setDisciplina} />
          <FormularioNotas 
            nota1={nota1} 
            setNota1={setNota1} 
            nota2={nota2} 
            setNota2={setNota2} 
            media={media} 
            exibirMedia={exibirMedia} 
          />
          <Resultado resultado={resultado} />
          <button onClick={handleCalcularMedia} className={styles.btnAzul}>
            Calcular
          </button>
          <BotaoVoltar onClick={voltarParaPaginaInicial} />
        </main>
      </div>
    </div>
  );
}