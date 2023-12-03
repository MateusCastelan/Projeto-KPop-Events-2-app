import React from 'react'
import { ArticleDetails } from '@/components/ArticleDetails';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

import styles from '@/styles/PagesMain.module.css'

export default function ArticlePage() {

  const articles = 
    {
       kb_id: 1,
       kb_featured: true,
       kb_image: '/bg.jpg',
       kb_title: 'Título do Artigo 1',
       kb_summary: 'Resumo do Artigo 1',
       kb_body: 'Corpo do Artigo 1',
       kb_liked_count: 5,
       kb_published_date: '12/09/2000',
       kb_author: 'Dhyana',
       kb_author_email: 'dhyana@gmail.com'
    };

  return (
    <>
      <NavBar/>
      <main className={styles.homeContainer}>
        <ArticleDetails 
          article={articles}
        />
      </main>
      <Footer/>
    </>
  )
}
