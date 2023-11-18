import { Footer } from '@/components/Footer'
import { Form } from '@/components/Form'
import { NavBar } from '@/components/NavBar'
import React from 'react'

export default function CreateArticle() {

  const formFields = [
    { id: 1, name: 'kb_title', type: 'text', label: 'Título:', required: true },
    { id: 2, name: 'kb_summary', type: 'text', label: 'Resumo:', required: true },
    { id: 3, name: 'kb_keywords', type: 'text', label: 'Palavras-chave:', required: true },
    { id: 4, name: 'kb_author_email', type: 'email', label: 'Email do Autor:', defaultValue: 'req.session.user.author_email', required: true },
    { id: 5, name: 'kb_featured', type: 'checkbox', label: 'Destaque', value: 'true' },
    { id: 6, name: 'kb_image', type: 'file', label: 'Imagem:' }, 
    { id: 7, name: 'kb_body', type: 'textarea', label: 'Conteúdo:', required: true }
    // Adicione outros campos conforme necessário
  ];

  return (
    <>
      <NavBar />
      <Form
        action="/article/createArticle"
        formTitle="Cadastro de Artigos"
        formFields={formFields}
        buttonLabel="Cadastrar"
      />
      <Footer />
    </>
  )
}
