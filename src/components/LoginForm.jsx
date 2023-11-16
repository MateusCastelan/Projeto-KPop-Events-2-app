import React from 'react'
import styles from '../styles/LoginForm.module.css'

export const LoginForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <article className={styles.container}>
      <form action="/login" method="post" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <section className={styles.inputBox}>
          <input type="text" name="username" required />
          <label>Usuário</label>
          <i className='bx bxs-user'></i>
        </section>
        <section className={styles.inputBox}>
          <input type="password" name="password" required />
          <label>Senha</label>
          <i className='bx bxs-lock-alt'></i>
        </section>
        <section className={styles.rememberCheck}>
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            Lembrar credenciais
          </label>
          <a href="#">Esqueceu a senha?</a>
        </section>
        <button type="submit" className={styles.btn}>Entrar</button>
        <section className={styles.registerLink}>
          <p>
            Não tem uma conta?
            <a href="#">Cadastrar</a>
          </p>
        </section>
      </form>
    </article>
  );
};