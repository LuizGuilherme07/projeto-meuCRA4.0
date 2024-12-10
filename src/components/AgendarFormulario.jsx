import React from 'react';
import styles from '../styles/agendamentoacademico.module.css';

export default function AgendarFormulario({ data, hora, setData, setHora, agendar }) {
  return (
    <div>
      <div className={styles.data}>
        <input
          type="date"
          placeholder="Data"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.horario}>
        <input
          type="time"
          placeholder="Horário"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          className={styles.input}
        />
      </div>
      <button onClick={agendar} className={styles.btnAzul}>
        Agendar
      </button>
    </div>
  );
}