import { Footer } from '@/components/Footer'
import { Form } from '@/components/Form'
import { NavBar } from '@/components/NavBar'
import React from 'react'

export default function CreateUser() {

  const formFields = [
    { id: 1, name: 'author_name', type: 'text', label: 'Nome:', defaultValue: '', required: true },
    { id: 2, name: 'author_email', type: 'email', label: 'Email:', required: true },
    { id: 3, name: 'author_user', type: 'text', label: 'Nome de Usuário:', required: true },
    { id: 4, name: 'author_pwd', type: 'password', label: 'Senha:', required: true },
    { id: 5, name: 'author_level', type: 'checkbox', label: 'Admin', value: 'admin' },
    { id: 6, name: 'author_status', type: 'checkbox', label: 'Ativo', value: 'on', checked: true } 
    // Adicione outros campos conforme necessário
  ];

  return (
    <>
      <NavBar/>
        <Form
          action="/users/createUser"
          formTitle="Cadastro de Usuário"
          formFields={formFields}
          buttonLabel="Cadastrar"
        />  
      <Footer/>
    </>
  )
}
