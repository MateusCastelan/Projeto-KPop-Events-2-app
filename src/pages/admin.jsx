import React from 'react'
import { AdminTable } from '@/components/AdminTable'
import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'

import styles from '../styles/PagesMain.module.css'

export default function Admin() {

  const articles = [
    { kb_id: 1, kb_title: 'Artigo 1', kb_author: 'Autor 1' },
    { kb_id: 2, kb_title: 'Artigo 2', kb_author: 'Autor 2' },
    // ... outros artigos
  ];

  const users = [
    { author_id: 1, author_user: 'Usuário 1', author_email: 'usuario1@email.com', author_level: 'user', author_status: 'on' },
    { author_id: 2, author_user: 'Usuário 2', author_email: 'usuario2@email.com', author_level: 'admin', author_status: 'off' },
    // ... outros usuários
  ];

  const user = { author_level: 'admin' };


  return (
    <>
      <NavBar/>
        <main className={styles.adminContainer}>
          <AdminTable
            articles={articles} 
            users={users} 
            user={user}
          />
        </main>
      <Footer/>
    </>
  )
}
