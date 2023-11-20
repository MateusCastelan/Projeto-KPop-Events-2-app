import React from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/BarraPesquisa.module.css'

export const BarraPesquisa = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const keywords = event.target.elements.keywords.value;
    // Redirecionar para a página de resultados de pesquisa com os parâmetros de consulta
    router.push(`/searchResults?keywords=${encodeURIComponent(keywords)}`);
  };

  return (
    <>
      <form 
        action="/searchResults" 
        method="get" 
        onSubmit={handleSubmit}
        className={styles.searchContainer} 
      >
        <input type="text" className={styles.searchBar} name="keywords" placeholder="Pesquisar" />
        <button type="submit" className={styles.searchBtn}>
          <img src='/lupa.svg' alt="Lupa" />
        </button>
      </form>
    </>
  );
};