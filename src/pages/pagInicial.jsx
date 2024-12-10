import React, { useState, useEffect } from "react";
import styles from "../styles/pagInicial.module.css";
import { useRouter } from "next/router";
import Dropdown from "../components/Dropdown.jsx";
import HeaderInicial from "../components/HeaderInicial.jsx";

export default function PagInicial() {
  const [showOptions, setShowOptions] = useState(false);
  const [matricula, setMatricula] = useState("");
  const router = useRouter();

  useEffect(() => {
    document.title = "Tela Inicial";
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));
    if (usuario) setMatricula(usuario.matricula);
  }, []);

  const toggleDropdown = () => {
    setShowOptions(!showOptions);
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleOptionClick = (option) => {
    const paths = {
      financeiro: "/agendamentofinanceiro",
      academico: "/agendamentoacademico",
      meusAgendamentos: "/meusagendamentos",
    };
    if (paths[option]) {
      router.push(paths[option]);
    }
  };

  return (
    <div className={styles.container}>
      <HeaderInicial
        matricula={matricula}
        onBoletosClick={() => handleNavigation("/paginaboleto")}
        onAgendamentoClick={() => handleNavigation("/agendamento")}
        onFinanceiroClick={() => handleNavigation("/financeiro")}
        onAcademicoClick={() => handleNavigation("/media")}
      />
      <Dropdown
        showOptions={showOptions}
        toggleDropdown={toggleDropdown}
        onOptionClick={handleOptionClick}
      />
    </div>
  );
}