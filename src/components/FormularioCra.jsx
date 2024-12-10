import React, { useState } from "react";
import styles from "../styles/financeiro.module.css";

const FormularioCra = ({ realizarPagamentoCra, resultadoCra }) => {
  const [codigoCra, setCodigoCra] = useState("");
  const [valorCra, setValorCra] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    realizarPagamentoCra(codigoCra, valorCra);
  };

  return (
    <div className={styles.formSection}>
      <h2 className={styles.sectionTitle}>Pagamento de CRA</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="codigo-cra" className={styles.label}>Código CRA:</label>
        <input
          type="text"
          id="codigo-cra"
          value={codigoCra}
          onChange={(e) => setCodigoCra(e.target.value)}
          required
          className={styles.input}
        />
        <label htmlFor="valor-cra" className={styles.label}>Valor do Pagamento (R$):</label>
        <input
          type="number"
          id="valor-cra"
          value={valorCra}
          onChange={(e) => setValorCra(e.target.value)}
          required
          step="0.01"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Realizar Pagamento</button>
      </form>
      <div
        id="resultado-cra"
        className={styles.output}
        dangerouslySetInnerHTML={{ __html: resultadoCra }}
      />
    </div>
  );
};

export default FormularioCra;