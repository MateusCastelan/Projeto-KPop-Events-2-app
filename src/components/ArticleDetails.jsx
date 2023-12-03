import React from 'react'

import styles from '@/styles/Article.module.css';

export const ArticleDetails = ({ article }) => {
  return (
    <section className={styles.container}>
      <section className={styles.infoContainer}>
        <h3>{article.kb_title}</h3>
        <p>{article.kb_body}</p>
        <section className={styles.imgContainer}>
          <img src={article.kb_image} alt={article.kb_title} />
        </section>
      </section>
      <section>
        <section className={styles.publishContainer}>
          <span>{article.kb_published_date}</span>
          <span>{article.kb_author}</span>
          <span>{article.kb_author_email}</span>
        </section>
        <section className={styles.likeContainer}>
          <span>{article.kb_liked_count}</span>
          <form action={`/article/like/${article.kb_id}`} method="POST">
            <button className={styles.btn} type="submit">
              <i className='bx bxs-heart bx-sm'></i>
            </button>
          </form>
        </section>
      </section>
    </section>
  );
}
