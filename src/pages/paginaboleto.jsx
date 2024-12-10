import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/paginaboleto.module.css";
import Logo from "../components/Logo";
import BotaoVoltar from "../components/botaoVoltar";
import { obterBoletosSalvos } from "../functions/boletos"; 

export default function BoletosPage() {
  const [boletos, setBoletos] = useState([]);
  const router = useRouter();

  const voltarParapagInicial = () => {
    router.push("/pagInicial");
  };

  useEffect(() => {
    document.title = "Gerenciamento de Boletos";
    
    const boletosSalvos = obterBoletosSalvos();
    setBoletos(boletosSalvos);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.Esquerda}>
        <Logo/>
      </div>

      <header>
        <h1>Gerenciamento de Boletos</h1>
      </header>
      <main className={styles.app}>
        <div className={styles.resultado}>
          <h2>Boletos</h2>
          <ul>
            {boletos.length > 0 ? (
              boletos.map((boleto) => (
                <li key={boleto.id}>
                  {boleto.boleto} - {boleto.dataVencimento} - R$ {boleto.valor}
                </li>
              ))
            ) : (
              <p>Nenhum boleto encontrado.</p>
            )}
          </ul>
        </div>

        <BotaoVoltar onClick={voltarParapagInicial} />
      </main>
    </div>
  );
}