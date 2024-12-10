import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/login.module.css';
import LoginImagem from '../components/loginImagem.jsx';
import LoginFormulario from '../components/loginFormulario.jsx';
import Logo from '../components/Logo.jsx';

const Login = () => {
  const router = useRouter();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!matricula || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    sessionStorage.setItem('usuario', JSON.stringify({ matricula, senha }));
    setError('');
    router.push('/pagInicial');
  };

  return (
    <div className={styles.container}>
      <LoginImagem />
      <div className={styles.ladodireito}>
        <Logo className={styles.logo} width={300} height="200" />
        <LoginFormulario
          handleLogin={handleLogin}
          error={error}
          matricula={matricula}
          setMatricula={setMatricula}
          senha={senha}
          setSenha={setSenha}
        />
      </div>
    </div>
  );
};

export default Login;