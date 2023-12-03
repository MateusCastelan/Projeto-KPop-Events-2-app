import { Inter } from 'next/font/google'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { BarraPesquisa } from '@/components/BarraPesquisa'
import { FeaturedArticles } from '@/components/FeaturedArticles'
import { LikedArticles } from '@/components/LikedArticles'

import styles from '@/styles/PagesMain.module.css'

export default function Home() {

  const articles = [
    {
       kb_id: 1,
       kb_featured: true,
       kb_image: '/bg.jpg',
       kb_title: 'Título do Artigo 1',
       kb_summary: 'Resumo do Artigo 1',
       kb_liked_count: 0
    },
     {
       kb_id: 2,
       kb_featured: true,
       kb_image: '/bg.jpg',
       kb_title: 'Título do Artigo 2',
       kb_summary: 'Resumo do Artigo 2',
       kb_liked_count: 5
     },
     // Adicione mais objetos conforme necessário
  ];

  return (
    <>
      <NavBar />
      <main className={styles.homeContainer}>
        <article className={styles.title}>
          <h1>Kpop Events</h1>
        </article>
        <BarraPesquisa/>
        <FeaturedArticles
           articles={articles}
        />
        <LikedArticles
          articles={articles}
        />
      </main>
      <Footer/>
    </>
  )
}
