import React from 'react';
import { agendar } from '../functions/agendamento'; 
import styles from '../styles/botaoAgendar.module.css';

const BotaoAgendar = ({ data, hora, tipo, setMensagem, setTipoMensagem }) => {
  const handleAgendar = () => {
    
    if (!data || !hora || !tipo) {
      setMensagem('Por favor, preencha todos os campos.');
      setTipoMensagem('erro');
      return;
    }

    const resultado = agendar(data, hora, tipo); 

    
    setMensagem(resultado.mensagem);
    setTipoMensagem(resultado.sucesso ? 'sucesso' : 'erro');
  };

  return (
    <button onClick={handleAgendar} className={styles.btnAzul}>
      Agendar
    </button>
  );
};

export default BotaoAgendar;