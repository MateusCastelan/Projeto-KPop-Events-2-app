import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

import styles from '../styles/Form.module.css'

export const Form = ({ action, formTitle, formFields, buttonLabel, initialValues }) => {
  // const [formValues, setFormValues] = useState(initialValues || {});

  // useEffect(() => {
  //   // Preencher os valores iniciais quando a prop initialValues mudar
  //   setFormValues(initialValues || {});
  // }, [initialValues]);

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: type === 'checkbox' ? checked : value,
  //   }));
  // };

  const getSectionClassName = (field) => {
    if (field.type === 'checkbox') {
      return styles.check;
    } else if (field.type === 'textarea') {
      return styles.contentText;
    } else if (field.type === 'file') {
      return '';
    } else {
      return styles.inputBox;
    }
  };

  const getLabelClassName = (field) => {
    if (field.type === 'email') {
      return styles.emailInput;
    } else {
      return '';
    }
  }

  const getMainContainerClassName = (formTitle) => {
    if (formTitle === 'Cadastro de Usuário' || 'Editar Usuário') {
      return styles.mainCtnSignUp;
    } else {
      return styles.mainContainer
    }
  }

  const getContainerClassName = (formTitle) => {
    if (formTitle === 'Cadastro de Usuário' || 'Editar Usuário') {
      return styles.cntSignUp;
    } else {
      return styles.container;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section 
      className={getMainContainerClassName(formTitle)}
    >
      <article className={getContainerClassName(formTitle)}>
        <form
          action={action}
          method='post'
          encType='multipart/form-data'
          onSubmit={handleSubmit}
        >
          <h1 className={styles.title}>{formTitle}</h1>
          {formFields.map((field) => (
            <section
              key={field.id}
              className={getSectionClassName(field)}
            >
              {field.type !== 'checkbox' && field.type !== 'file' && field.type !== 'textarea' && (
                <>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    defaultValue={field.defaultValue}
                    // value={formValues[field.name] || ''}
                    required={field.required}
                    readOnly={field.readOnly}
                    // onChange={handleChange}
                  />
                  <label 
                    htmlFor={field.name} 
                    className={getLabelClassName(field)}
                  >
                    {field.label}
                  </label>
                </>
              )}
              {field.type === 'checkbox' && (
                <>
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    defaultValue={field.defaultValue}
                    // checked={formValues[field.name] || false}
                    // onChange={handleChange}
                  />
                </>
              )}
              {field.type === 'file' && (
                <>
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    accept="image/*"
                    // onChange={handleChange}
                  />
                </>
              )}
              {field.type === 'textarea' && (
                <>
                  <label htmlFor={field.name}>{field.label}</label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    defaultValue={field.defaultValue}
                    // value={formValues[field.name] || ''}
                    required={field.required}
                    // onChange={handleChange}
                  />
                </>
              )}
            </section>
          ))}
          <button
            type="submit"
            className={styles.btn}
          >
            {buttonLabel}
          </button>
        </form>
      </article>
    </section>
  );
};
