import { useRouter } from 'next/router';
import styles from '../styles/financeiro.module.css'; 

const BotaoVoltar = () => {
    const router = useRouter();

    const voltarParaPaginaInicial = () => {
        router.push('/pagInicial'); 
    };

    return (
        <button onClick={voltarParaPaginaInicial} className={styles.botaoVoltar}>
            Voltar
        </button>
    );
};

export default BotaoVoltar;