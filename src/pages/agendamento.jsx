import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/agendamento.module.css';
import BotaoVoltar from '../components/botaoVoltar';
import Logo from '../components/Logo.jsx';
import BotaoAgendar from '../components/botaoAgendar';

export default function AgendamentoGeral() {
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [agendamento, setAgendamento] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState('');
    const router = useRouter();

    useEffect(() => {
        document.title = "Agendamento Geral";
    }, []);

    const voltarParaPagInicial = () => {
        router.push('/pagInicial');
    };

    return (
        <div className={styles.container}>
           <div className={styles.Esquerda}>
                <Logo className={styles.logoEsquerda} />
            </div>
            <div id="app" className={styles.app}>
                <header>
                    <h1>Agendamento Geral</h1>
                </header>
                <main>
                    <div>
                        <select
                            value={agendamento}
                            onChange={(e) => setAgendamento(e.target.value)}
                            className={styles.dropdown}
                        >
                            <option value="">Selecione onde deseja agendar:</option>
                            <option value="CRA">Agendamento CRA</option>
                            <option value="Financeiro">Agendamento Financeiro</option>
                        </select>
                    </div>
                    <div className={styles.data}>
                        <input
                            type="date"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.horario}>
                        <input
                            type="time"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <BotaoAgendar
                        data={data}
                        hora={hora}
                        tipo={agendamento}
                        setMensagem={setMensagem}
                        setTipoMensagem={setTipoMensagem}
                    />
                    <BotaoVoltar onClick={voltarParaPagInicial} />
                    {mensagem && (
                        <p
                            className={`${styles.mensagem} ${
                                tipoMensagem === 'erro' ? styles.mensagemErro : styles.mensagemSucesso
                            }`}
                        >
                            {mensagem}
                        </p>
                    )}
                </main>
            </div>
        </div>
    );
}