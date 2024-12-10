import React from 'react';
import styles from '../styles/media.module.css';

export default function FormularioNotas({ nota1, setNota1, nota2, setNota2, media, exibirMedia }) {
  return (
    <div className={styles.notasContainer}>
      <input
        type="number"
        placeholder="Unidade 1"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Unidade 2"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
        className={styles.input}
      />
      
      {exibirMedia && (
        <input
          type="text"
          placeholder="Média"
          value={media}
          readOnly
          className={styles.input}
        />
      )}
    </div>
  );
}