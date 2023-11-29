import React from 'react'
import styles from '../styles/ArticleHome.module.css';
import Link from 'next/link';

export const LikedArticles = ({ articles }) => {

  const sortedArticles = articles.sort((a, b) => b.kb_liked_count - a.kb_liked_count);

  return (
    <section className={styles.container}>
      <article className={styles.subTitle}>
        <h2>Publicações Mais Curtidas</h2>
      </article>
      <section className={styles.groupContainer}>
        {sortedArticles.map((article) => (
          <Link key={article.kb_id} href={`/article/${article.kb_id}`}>
            <section className={styles.newsContainer}>
              <section className={styles.imgContainer}>
                <img src={article.kb_image || '../img/default.jpg'} alt="" />
              </section>
              <article className={styles.infoContainer}>
                <h3>{article.kb_title}</h3>
                <p>{article.kb_summary}</p>
              </article>
            </section>
          </Link>
        ))}
      </section>
    </section>
  );
}
