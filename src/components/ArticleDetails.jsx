import {React, useState} from 'react';
import styles from '@/styles/Article.module.css';
import axios from 'axios';
import LikeButton from './LikeButton';

export const ArticleDetails = ({ article }) => {
  return (
    <section className={styles.container}>
      <section className={styles.infoContainer}>
        <h3>{article.article_title}</h3>
        <p>{article.article_body}</p>
        <section className={styles.imgContainer}>
          {/* <img src={article.article_image} alt={article.article_title} /> */}
        </section>
      </section>
      <section>
        <section className={styles.publishContainer}>
          <span>{article.article_published_date}</span>
          <span>{article.article_author}</span>
          <span>{article.article_author_email}</span>
        </section>
        <section className={styles.likeContainer}>
            <LikeButton articleId = {article._id} initialLikedCount={article.article_liked_count} />
        </section>
      </section>
    </section>
  );
};
