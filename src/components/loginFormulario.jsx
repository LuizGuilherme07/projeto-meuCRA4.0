import { useState } from "react";
import styles from "../styles/login.module.css";

export default function LoginFormulario({ handleLogin, error, matricula, setMatricula, senha, setSenha }) {
  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <label htmlFor="matricula" className={styles.formLabel}>Matrícula ou Email Institucional</label>
      <input
        type="text"
        id="matricula"
        name="matricula"
        placeholder="Digite sua matrícula ou email institucional"
        className={styles.formInput}
        value={matricula}
        onChange={(e) => setMatricula(e.target.value)}
      />
      <label htmlFor="senha" className={styles.formLabel}>Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        placeholder="Digite sua senha"
        className={styles.formInput}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.formButton}>Entrar</button>
    </form>
  );
}