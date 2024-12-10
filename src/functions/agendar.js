import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useAgendamento(tituloPagina) {
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (tituloPagina) {
            document.title = tituloPagina;
        }
    }, [tituloPagina]);

    const voltarParapagInicial = () => {
        router.push('/pagInicial');
    };

    return {
        data,
        setData,
        hora,
        setHora,
        mensagem,
        setMensagem,
        tipoMensagem,
        setTipoMensagem,
        voltarParapagInicial,
    };
}