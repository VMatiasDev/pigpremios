export default function PageWithJSbasedForm() {
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
    console.log(data);

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
    alert(`Seu contato foi enviado`);
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Nome:</label>
      <input type='text' id='name' name='name' required />
      <label htmlFor='email'>Email:</label>
      <input type='email' id='email' name='email' required />
      <label htmlFor='subject'>Assunto:</label>
      <input type='text' id='subject' name='subject' required />
      <label htmlFor='message'>Mensagem:</label>
      <textarea type='text' id='message' name='message' required />
      <button type='submit'>Submit</button>
    </form>
  );
}
