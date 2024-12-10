import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/meusagendamentos.module.css';
import { obterAgendamentosSalvos } from '../functions/obterAgendamento';
import ListaAgendamentos from '../components/listaDeAgendamento';
import BotaoVoltar from '../components/botaoVoltar';
import Logo from '../components/Logo';

export default function MeusAgendamentosPage() {
    const [agendamentos, setAgendamentos] = useState([]);
    const router = useRouter();

    useEffect(() => {
        setAgendamentos(obterAgendamentosSalvos());
    }, []);

    useEffect(() => {
        document.title = "Agendamentos";
    }, []);

    const voltarParapagInicial = () => {
        router.push('/pagInicial');
    };

    return (
        <div className={styles.container}>
            <div className={styles.topLeft}>
                <Logo className={styles.logoTopLeft} />
            </div>
            <div id="app" className={styles.app}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Meus Agendamentos</h1>
                </header>
                <main>
                    <ListaAgendamentos agendamentos={agendamentos} styles={styles} />
                    <BotaoVoltar onClick={voltarParapagInicial} />
                </main>
            </div>
        </div>
    );
}