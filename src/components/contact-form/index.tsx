import emailjs from '@emailjs/browser';
import '../../assets/components/contact-form.css';

// type Inputs = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

export const ContactForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>();

  // : SubmitHandler<Inputs>
  //goes in onSubmit line

  const onSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_2hqrf7r',
        'template_gbble6j',
        '#contact-form',
        'QM_VuSiDgeF9nPkqo'
      )
      .then(
        (result) => {
          alert('Message sent!');
        },
        (error) => {
          alert('Sorry, something went wrong!');
        }
      );
  };

  return (
    <form className='form-body' id='contact-form' onSubmit={onSubmit}>
      <input placeholder='Name' name='name' />
      <input placeholder='Email' name='email' />
      <textarea placeholder='Message' name='message' />
      <input className='btn-submit' type='submit' />
    </form>
  );
};
