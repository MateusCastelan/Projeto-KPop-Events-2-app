import React from 'react'
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

export const NavBar = () => {
  return (
    <header className={styles.headerContainer}>
      <section className={styles.logo}>
        <h1>KPOP</h1>
        <h1 id={styles.event}>EVENT</h1>
      </section>
      <section className={styles.navContainer}>
        <nav>
          <ul>
            <Link href="/">
              <li>
                Home
              </li>
            </Link>
            <Link href="/login">
              <li>
                Login 
              </li>
            </Link>
            <Link href="/admin">
              <li>
                Admin
              </li>
            </Link>
            <Link href="/createUser">
              <li>
                Cad User
              </li>
            </Link>
            <Link href="/editUser">
              <li>
                Edit User
              </li>
            </Link>
            <Link href="/createArticle">
              <li>
                Create Art
              </li>
            </Link>
            <Link href="/editArticle">
              <li>
                Edit Art
              </li>
            </Link>
            <Link href="/article">
              <li>
                artigo
              </li>
            </Link>
          </ul>
        </nav>
      </section>
    </header>
  )
}
