import styled from 'styled-components';
import { PageTitle } from './userTerms';

const ContactSubtitle = styled.h2`
  color: #fff;
  text-align: center;
  padding: 16px 0 32px 0;
`;

const FormContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 20%;
  button {
    cursor: pointer;
    background-color: #0069d9;
    color: #fff;
    width: 20%;
    height: 10%;
    border: none;
    border-radius: 5px;
    margin-top: 2%;
    margin-left: 30%;
    &:hover {
      transition: 300ms;
      background-color: #0051a8;
    }
  }
`;

const FormInput = styled.input`
  width: 80%;
  height: 3rem;
  border-radius: 5px;
  padding: 5px;
`;

const FormTextArea = styled.textarea`
  width: 80%;
  height: 10rem;
  border-radius: 5px;
  padding: 5px;
`;

export default function ContactForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/form';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    // alert(`${result.data}, seu contato foi enviado`);
    alert(`${data.name}, seu contato foi enviado`);
  };
  return (
    <>
      <PageTitle>CONTATO</PageTitle>
      <ContactSubtitle>
        Olá, olha como é fácil entrar em contato conosco...
      </ContactSubtitle>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <label htmlFor='name'></label>
          <FormInput
            type='text'
            id='name'
            name='name'
            required
            placeholder='Nome'
          />
          <label htmlFor='email'></label>
          <FormInput
            type='email'
            id='email'
            name='email'
            required
            placeholder='Email'
          />
          <label htmlFor='subject'></label>
          <FormInput
            type='text'
            id='subject'
            name='subject'
            required
            placeholder='Assunto'
          />
          <label htmlFor='message'></label>
          <FormTextArea
            type='text'
            id='message'
            name='message'
            required
            placeholder='Mensagem'
          />
          <button type='submit'>Enviar</button>
        </Form>
      </FormContainer>
    </>
  );
}
