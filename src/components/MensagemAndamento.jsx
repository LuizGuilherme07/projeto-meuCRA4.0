import React from 'react';
import styles from '../styles/agendamentoacademico.module.css';

export default function MensagemAgendamento({ mensagem, tipoMensagem }) {
  return (
    mensagem && (
      <p
        className={`${styles.mensagem} ${
          tipoMensagem === 'erro' ? styles.mensagemErro : styles.mensagemSucesso
        }`}
      >
        {mensagem}
      </p>
    )
  );
}