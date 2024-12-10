import { useRouter } from 'next/router';
import styles from '../styles/botaoVoltar.module.css'; 

const BotaoVoltar = () => {
    const router = useRouter();

    const voltarParaPaginaInicial = () => {
        router.push('/pagInicial'); 
    };

    return (
        <button onClick={voltarParaPaginaInicial} className={styles.btnLaranja}>
            Voltar
        </button>
    );
};

export default BotaoVoltar;