import React from "react";
import Image from "next/image";
import styles from "../styles/pagInicial.module.css";

export default function PageHeader({ matricula, onBoletosClick, onAgendamentoClick, onFinanceiroClick, onAcademicoClick }) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/MEUCRALOGO.jpg" alt="Logo" width={120} height={120} />
      </div>
      <div className={styles.navBar}>
        <button className={styles.navButton} onClick={onBoletosClick}>
          Boletos
        </button>
        <button className={styles.navButton} onClick={onAgendamentoClick}>
          Agendamento
        </button>
        <button className={styles.navButton} onClick={onFinanceiroClick}>
          Financeiro
        </button>
        <button className={styles.navButton} onClick={onAcademicoClick}>
          Acadêmico
        </button>
      </div>
      <div className={styles.perfilInfo}>
        <div className={styles.perfilImage}>
          <Image src="/images/user.png" alt="User" width={40} height={40} />
        </div>
        <div className={styles.perfilText}>
          <div className={styles.perfilLabel}>Matrícula:</div>
          <div className={styles.perfilMatricula}>{matricula}</div>
        </div>
      </div>
    </div>
  );
}