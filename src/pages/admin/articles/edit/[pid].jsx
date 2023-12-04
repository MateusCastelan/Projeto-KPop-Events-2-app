import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Footer } from '@/components/Footer';
import { Form } from '@/components/Form';
import { NavBar } from '@/components/NavBar';
import axios from 'axios';

export default function EditArticle() {
  const router = useRouter();
  const { pid } = router.query;

  const [articleData, setArticleData] = useState({
    article_title: '',
    article_body: '',
    article_keywords: '',
    article_featured: true,
    article_author_email: '',
  });

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/articles/edit/${pid}`, { withCredentials: true });
        const fetchedArticleData = response.data;

        // Atualiza o estado com os dados do artigo
        setArticleData(fetchedArticleData);
      } catch (error) {
        console.error('Erro ao obter dados do artigo para edição:', error.message);
      }
    };

    // Verifica se pid existe antes de chamar a função de busca
    if (pid) {
      fetchArticleData();
    }
  }, [pid]);

  const formFields = [
    { id: 1, name: 'article_title', type: 'text', label: 'Título:', defaultValue: articleData.article_title, required: true },
    { id: 2, name: 'article_body', type: 'textarea', label: 'Conteúdo:', defaultValue: articleData.article_body, required: true },
    { id: 3, name: 'article_keywords', type: 'text', label: 'Palavras-chave:', defaultValue: articleData.article_keywords, required: true },
    { id: 4, name: 'article_featured', type: 'checkbox', label: 'Destaque', defaultChecked: articleData.article_featured },
    { id: 5, name: 'article_author_email', type: 'email', label: 'Email do Autor:', defaultValue: articleData.article_author_email, required: true },
  ];

  const handleUpdateArticle = async (formData) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/articles/${pid}`, formData, { withCredentials: true });

      router.push(`/`);
    } catch (error) {
      console.error('Erro ao atualizar o artigo:', error.message);
    }
  };

  return (
    <>
      <NavBar />
      <Form
        formTitle={`Atualizar Artigo: ${articleData.article_title}`}
        formFields={formFields}
        buttonLabel="Atualizar Artigo"
        onSubmit={handleUpdateArticle}
      />
      <Footer />
    </>
  );
}
