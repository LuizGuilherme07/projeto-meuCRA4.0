import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/financeiro.module.css";
import LogoMeuCRA from "../components/logo"; 
import FormularioBoleto from "../components/FormularioBoleto";
import FormularioCra from "../components/FormularioCra";
import { salvarBoleto } from "../functions/salvarBoleto";  
import BotaoVoltar from "../components/botaoVoltarboleto"; 

export default function TelaFinanceira() {
  const [resultadoBoleto, setResultadoBoleto] = useState("");
  const [resultadoCra, setResultadoCra] = useState("");
  const router = useRouter();

  const gerarBoleto = (nomeCliente, valor) => {
    const codigoBoleto = `BOLETO-${Math.random().toString(36).substring(7).toUpperCase()}-${Date.now()}`;
    setResultadoBoleto(`
      <p>Boleto gerado com sucesso!</p>
      <p><strong>Cliente:</strong> ${nomeCliente}</p>
      <p><strong>Valor:</strong> R$ ${parseFloat(valor).toFixed(2)}</p>
      <p><strong>Código do Boleto:</strong> ${codigoBoleto}</p>
    `);
    salvarBoleto(codigoBoleto, nomeCliente, valor);  
  };

  const realizarPagamentoCra = (codigoCra, valorCra) => {
    setResultadoCra(`
      <p>Pagamento realizado com sucesso!</p>
      <p><strong>Código:</strong> ${codigoCra}</p>
      <p><strong>Valor:</strong> R$ ${parseFloat(valorCra).toFixed(2)}</p>
    `);
  };

  const voltarParaPaginaInicial = () => {
    router.push("/pagInicial");
  };

  useEffect(() => {
    document.title = "Financeiro";
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          
          <LogoMeuCRA />
        </div>
      </header>

      <div className={styles.content}>
        <h1 className={styles.title}>Gestão Financeira</h1>

        <FormularioBoleto gerarBoleto={gerarBoleto} resultadoBoleto={resultadoBoleto} />
        <FormularioCra realizarPagamentoCra={realizarPagamentoCra} resultadoCra={resultadoCra} />

        <BotaoVoltar onClick={voltarParaPaginaInicial} />  
      </div>
    </div>
  );
}