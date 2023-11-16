import { Inter } from 'next/font/google'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Form } from '@/components/Form'

import styles from '@/styles/PagesMain.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // const formFields = [
  //   { id: 1, name: 'kb_title', type: 'text', label: 'Título', defaultValue: '', required: true, readOnly: false },
  //   { id: 2, name: 'kb_body', type: 'textarea', label: 'Conteúdo', defaultValue: '', required: true },
  //   { id: 3, name: 'kb_image', type: 'file', label: 'Imagem', defaultValue: '', accept: 'image/*' },
  //   { id: 4, name: 'kb_check', type: 'checkbox', label: 'Check', defaultValue: '' },
  //   // Adicione outros campos conforme necessário
  // ];

  return (
    <>
      <NavBar />
      <main className={styles.homeContainer}>
        {/* outros componentes */}
        {/* <Form
          action="/article/updateArticle/123"
          method="post"
          enctype="multipart/form-data"
          formTitle="Atualizar Artigo: Título do Artigo"
          formFields={formFields}
          buttonLabel="Atualizar Artigo"
        /> */}
      </main>
      <Footer/>
    </>
  )
}
