import { sendForm } from '@emailjs/browser';
import React, { useRef } from 'react';
import { GrSend } from 'react-icons/gr';

import { Form, Input, SubmitButton, Textarea } from './styles';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm('service_m9b7wwh', 'template_78kg8sf', form.current, {
      publicKey: 'GJNPkzUujI2Td1H2z',
    }).then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  };

  return (
    <Form ref={form} onSubmit={sendEmail} data-cy="contact-us-form">
      <p>Please contact me directly at kuleshov.sebastian@student.uzhnu.edu.ua or through this form.</p>
      <Input type="email" name="from_email" placeholder="Email" />
      <Textarea name="message" placeholder="Message" />
      <SubmitButton type="submit">
        Submit <GrSend />
      </SubmitButton>
    </Form>
  );
};

export default ContactUs;
