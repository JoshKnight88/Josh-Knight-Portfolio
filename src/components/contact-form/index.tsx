import React, { useState } from 'react';
// import env from 'react-dotenv';
import emailjs from '@emailjs/browser';
import { LoadingSpinner } from '../utils/loading-spinner';
import { Modal } from '../utils/modal';
import '../../assets/components/contact-form.css';
import '../../assets/components/utils/modal/modal-open-body.css';

const service_key = process.env.SERVICE_KEY;
const template_id = process.env.TEMPLATE_ID;
const public_key = process.env.PUBLIC_KEY;

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const [formContent, setFormContent] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);

  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [messageIsTouched, setMessageIsTouched] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isResultOpenModal, setIsResultOpenModal] = useState(false);
  const [isErrorOpenModal, setIsErrorOpenModal] = useState(false);

  const nameRegex = /^[a-z ,.'-]+$/i;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  const updateForm = (value: object) => {
    return setFormContent((prev) => {
      return { ...prev, ...value };
    });
  };

  const handleClose = () => setIsResultOpenModal(false);

  const onSubmit = (e: any) => {
    e.preventDefault();

    setNameIsTouched(true);
    setEmailIsTouched(true);
    setMessageIsTouched(true);

    if (!nameRegex.test(formContent.name)) {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);

    if (!emailRegex.test(formContent.email)) {
      setEmailIsValid(false);
      return;
    }
    setEmailIsValid(true);

    if (formContent.message === '') {
      setMessageIsValid(false);
      return;
    }
    setMessageIsValid(true);

    setIsLoading(true);
    console.log(formContent);
    emailjs
      .sendForm(
        'service_2hqrf7r',
        'template_gbble6j',
        '#contact-form',
        'QM_VuSiDgeF9nPkqo'
      )
      .then(
        (result) => {
          console.log(result);
          setIsLoading(false);
          setIsResultOpenModal(true);
          setFormContent({ name: '', email: '', message: '' });
        },
        (error) => {
          setIsErrorOpenModal(true);
          return error;
        }
      );
  };

  const nameInputIsInvalid = !nameIsValid && nameIsTouched;
  const emailInputIsInvalid = !emailIsValid && emailIsTouched;
  const messageInputIsInvalid = !messageIsValid && messageIsTouched;

  const inputClasses =
    nameInputIsInvalid || emailInputIsInvalid || messageInputIsInvalid
      ? 'form-body invalid'
      : 'form-body';

  return (
    <>
      <form className={inputClasses} id='contact-form' onSubmit={onSubmit}>
        <div className='inputs'>
          <input
            placeholder='Name'
            name='name'
            value={formContent.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
          {nameInputIsInvalid && (
            <p className='error-text'>Please enter your name</p>
          )}
          <input
            placeholder='Email'
            name='email'
            value={formContent.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
          {emailInputIsInvalid && (
            <p className='error-text'>Please provide a valid email</p>
          )}
        </div>
        <div className='message-and-btn'>
          <textarea
            placeholder='Message'
            name='message'
            value={formContent.message}
            onChange={(e) => updateForm({ message: e.target.value })}
          />
          {messageInputIsInvalid && (
            <p className='error-text'>Please include a message</p>
          )}

          {!isLoading ? (
            <button className='btn-submit' type='submit' placeholder='Send'>
              Send
            </button>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </form>
      {isResultOpenModal && (
        <div className='modal-open-body'>
          <Modal
            title='Thanks for getting in touch!'
            subtitle="I'll get back to you shortly."
            handleClose={handleClose}
          />
        </div>
      )}
      {/* {isErrorOpenModal && (
        <Modal
          title="Sorry, something's gone wrong."
          subtitle='error'
          // {`${error}`}
          onClick={() => setIsErrorOpenModal(false)}
        />
      )} */}
    </>
  );
};
