import React, { useState } from "react";
import styles from "../styles/financeiro.module.css";

const FormularioBoleto = ({ gerarBoleto, resultadoBoleto }) => {
  const [nomeCliente, setNomeCliente] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    gerarBoleto(nomeCliente, valor);
  };

  return (
    <div className={styles.formSection}>
      <h2 className={styles.sectionTitle}>Gerar Boleto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome" className={styles.label}>Nome do Cliente:</label>
        <input
          type="text"
          id="nome"
          value={nomeCliente}
          onChange={(e) => setNomeCliente(e.target.value)}
          required
          className={styles.input}
        />
        <label htmlFor="valor" className={styles.label}>Valor (R$):</label>
        <input
          type="number"
          id="valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
          step="0.01"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Gerar Boleto</button>
      </form>
      <div
        id="resultado-boleto"
        className={styles.output}
        dangerouslySetInnerHTML={{ __html: resultadoBoleto }}
      />
    </div>
  );
};

export default FormularioBoleto;