import React, { useState } from 'react';

import emailjs from '@emailjs/browser';
import { LoadingSpinner } from '../loading-spinner';
import '../../assets/components/contact-form.css';

const service_key = process.env.SERVICE_KEY;
const template_id = process.env.TEMPLATE_ID;
const public_key = process.env.PUBLIC_KEY;

export const ContactForm = () => {
  const [formContent, setFormContent] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateForm = (value: any) => {
    return setFormContent((prev) => {
      return { ...prev, ...value };
    });
  };
  console.log(formContent);
  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        'service_2hqrf7r',
        'template_gbble6j',
        '#contact-form',
        'QM_VuSiDgeF9nPkqo'
      )
      .then(
        (result) => {
          setIsLoading(false);
          alert('Message sent!');
          setFormContent({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Sorry, something went wrong!');
        }
      );
  };

  return (
    <form className='form-body' id='contact-form' onSubmit={onSubmit}>
      <input
        placeholder='Name'
        name='name'
        value={formContent.name}
        onChange={(e) => updateForm({ name: e.target.value })}
      />
      <input
        placeholder='Email'
        name='email'
        value={formContent.email}
        onChange={(e) => updateForm({ email: e.target.value })}
      />
      <textarea
        placeholder='Message'
        name='message'
        value={formContent.message}
        onChange={(e) => updateForm({ message: e.target.value })}
      />
      {!isLoading ? (
        <input className='btn-submit' type='submit' />
      ) : (
        <LoadingSpinner />
      )}
    </form>
  );
};
