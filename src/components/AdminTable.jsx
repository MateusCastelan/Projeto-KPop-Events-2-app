import React from 'react'
import styles from '../styles/AdminTable.module.css'
import Link from 'next/link';

export const AdminTable = ({ articles, users, user }) => {

  return (
    <section className={styles.mainContainer}>
      <article className={styles.title}>
        <h1>Painel de Edição</h1>
      </article>
      <section className={styles.container}>
        {/* Articles Section */}
        <article className={styles.subTitle}>
          <h2>Artigos</h2>
        </article>
        <section className={styles.groupContainer}>
          <Link href="/article/createArticle" className={styles.createContainer}>
            <i className='bx bx-plus bx-sm'></i>
            Cadastro de Artigo
          </Link>
          <section className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th> Título </th>
                  <th> Autor </th>
                  <th> Edição </th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => (
                  <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                    <td>{article.kb_title}</td>
                    <td>{article.kb_author}</td>
                    <td>
                      <Link href={`/article/${article.kb_id}`} className={styles.read}>
                        <i className='bx bx-book-open bx-sm bx-tada-hover'></i>
                      </Link>
                      <Link href={`/article/updateArticle/${article.kb_id}`} className={styles.edit}>
                        <i className='bx bxs-edit bx-sm bx-tada-hover'></i>
                      </Link>
                      <Link href={`/article/delete/${article.kb_id}`} className={styles.delete}>
                        <i className='bx bx-trash bx-sm bx-tada-hover'></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
        {/* Users Section */}
        {user.author_level === 'admin' && (
          <>
            <article className={styles.subTitle}>
              <h2>Usuários</h2>
            </article>
            <section className={styles.groupContainer}>
              <Link href="/users/signup" className={styles.createContainer}>
                <i className='bx bx-plus bx-sm'></i>
                Cadastro de Usuário
              </Link>
              <section className={styles.tableContainer}>
                <table>
                  <thead>
                    <tr>
                      <th> Usuário </th>
                      <th> Email </th>
                      <th> Nível </th>
                      <th> Status </th>
                      <th> Edição </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                        <td>{user.author_user}</td>
                        <td className={styles.email}>{user.author_email}</td>
                        <td>{user.author_level}</td>
                        <td>{user.author_status === 'on' ? 'Ativo' : 'Desativado'}</td>
                        <td>
                          <Link href={`/users/edit/${user.author_id}`} className={styles.edit}>
                            <i className='bx bxs-edit bx-sm bx-tada-hover'></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </section>
          </>
        )}
      </section>
    </section>
  );
}
