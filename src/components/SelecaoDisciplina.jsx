import React from 'react';
import styles from '../styles/media.module.css';

export default function SelecaoDisciplina({ disciplina, setDisciplina }) {
  return (
    <div>
      <select
        value={disciplina}
        onChange={(e) => setDisciplina(e.target.value)}
        className={styles.dropdown}
      >
        <option value="">Selecione uma disciplina</option>
        <option value="Front-end Framework">Front-end Framework</option>
        <option value="Programação Orientada a Objetos">Programação Orientada a Objetos</option>
        <option value="Estrutura de Dados">Estrutura de Dados</option>
        <option value="Banco de Dados">Banco de Dados</option>
        <option value="Desenvolvimento de Aplicações para Internet">Desenvolvimento de Aplicações para Internet</option>
        <option value="Análise e Modelagem de Sistemas">Análise e Modelagem de Sistemas</option>
        <option value="Design Centrado no Ser Humano">Design Centrado no Ser Humano</option>
        <option value="Lógica de Programação">Lógica de Programação</option>
        <option value="Matemática Aplicada">Matemática Aplicada</option>
        <option value="Desenvolvimento Pessoal e Trabalhabilidade">Desenvolvimento Pessoal e Trabalhabilidade</option>
        <option value="Desenvolvimento Sustentável e Direitos Individuais">
          Desenvolvimento Sustentável e Direitos Individuais
        </option>
        <option value="Engenharia de Software e Gestão de Times Ágeis">
          Engenharia de Software e Gestão de Times Ágeis
        </option>
      </select>
    </div>
  );
}