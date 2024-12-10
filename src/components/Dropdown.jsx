import React from "react";
import styles from "../styles/pagInicial.module.css";

export default function Dropdown({ showOptions, toggleDropdown, onOptionClick }) {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        Escolha uma opção:
      </div>
      {showOptions && (
        <div className={`${styles.dropdownOptions} ${styles.show}`}>
          <div className={styles.dropdownItem} onClick={() => onOptionClick("financeiro")}>
            Agendamento Financeiro
          </div>
          <div className={styles.dropdownItem} onClick={() => onOptionClick("academico")}>
            Agendamento Acadêmico
          </div>
          <div className={styles.dropdownItem} onClick={() => onOptionClick("meusAgendamentos")}>
            Meus Agendamentos
          </div>
        </div>
      )}
    </div>
  );
}