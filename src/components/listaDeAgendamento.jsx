export default function ListaAgendamentos({ agendamentos, styles }) {
    if (agendamentos.length === 0) {
        return <p className={styles.noAgendamentos}>Nenhum agendamento encontrado.</p>;
    }

    return (
        <ul className={styles.listaAgendamentos}>
            {agendamentos.map((item, index) => (
                <li key={index} className={styles.itemAgendamento}>
                    <p>
                        <strong>Tipo:</strong> {item.tipo}
                    </p>
                    <p>
                        <strong>Data:</strong> {item.data}
                    </p>
                    <p>
                        <strong>Hora:</strong> {item.hora}
                    </p>
                </li>
            ))}
        </ul>
    );
}
