import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/agendamento.module.css';
import BotaoVoltar from '../components/botaoVoltar';
import Logo from '../components/Logo.jsx';
import BotaoAgendar from '../components/botaoAgendar';
import { agendar } from '../functions/agendar';

export default function AgendamentoFin() {
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState('');
    const router = useRouter();

    useEffect(() => {
        document.title = "Agendamento Financeiro";
    }, []);

    const handleAgendar = () => {
        if (!data || !hora) {
            setMensagem('Por favor, preencha todos os campos.');
            setTipoMensagem('erro');
            return;
        }
        const resultado = agendar(data, hora, 'Financeiro');
        setMensagem(resultado.mensagem);
        setTipoMensagem(resultado.sucesso ? 'sucesso' : 'erro');
    };

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
                    <h1>Agendamento Financeiro</h1>
                </header>
                <main>
                    <div className={styles.data}>
                        <input
                            type="date"
                            placeholder="Data"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.horario}>
                        <input
                            type="time"
                            placeholder="Horário"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    <BotaoAgendar
                        data={data}
                        hora={hora}
                        tipo="Financeiro"
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