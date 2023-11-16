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
          </ul>
        </nav>
      </section>
    </header>
  )
}
