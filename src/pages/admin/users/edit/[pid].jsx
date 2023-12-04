import { Footer } from '@/components/Footer';
import { Form } from '@/components/Form';
import { NavBar } from '@/components/NavBar';
import React from 'react';
import axios from 'axios';

export default function EditUser({ user }) {
  const formFields = [
    { id: 1, name: 'author_name', type: 'text', label: 'Nome:', defaultValue: user.author_name, required: true },
    { id: 2, name: 'author_email', type: 'email', label: 'Email:', defaultValue: user.author_email, required: true },
    { id: 3, name: 'author_user', type: 'text', label: 'Nome de Usuário:', defaultValue: user.author_user, required: true },
    { id: 4, name: 'author_pwd', type: 'password', label: 'Nova Senha:', required: true },
    { id: 5, name: 'author_level', type: 'checkbox', label: 'Admin', value: 'admin' },
    { id: 6, name: 'author_status', type: 'checkbox', label: 'Ativo', value: 'on', checked: true } 
  ];

  const initialFormData = {
    author_name: user.author_name,
    author_email: user.author_email,
    author_user: user.author_user,
    author_pwd: '', 
    author_level: user.author_level,
    author_status: user.author_status,
  };

  return (
    <>
      <NavBar />
      <Form
        action={`/api/users/${user._id}`}
        formTitle={`Editar Usuário: ${user.author_name}`}
        formFields={formFields}
        buttonLabel="Atualizar Usuário"
        initialFormData={initialFormData}
      />
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(`http://localhost:8080/api/users/${params.pid}`);
    const user = response.data.foundUser;
    return { props: { user } };
  } catch (error) {
    console.error('Erro ao obter detalhes do usuário:', error.message);
    return { notFound: true };
  }
}
