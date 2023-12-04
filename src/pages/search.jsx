import { useRouter } from 'next/router';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import SearchResults from '@/components/SearchResults';

import styles from '@/styles/PagesMain.module.css'

const Search = () => {

  const router = useRouter();
  const { keywords } = router.query;

  return (
    <>
      <NavBar />
      <main className={styles.resultsContainer}>
        <h1>Resultados da Pesquisa</h1>
        <SearchResults keywords={keywords} />
      </main>
      <Footer />
    </>
  );
};

export default Search;
