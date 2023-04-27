export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  console.log('body: ', body);

  if (!body.name || !body.email || !body.subject || !body.message) {
    // Sends a HTTP bad request error code
    return res
      .status(400)
      .json({ data: 'Name, email, subject or message not found' });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({
    Name: `${body.name}`,
    Email: `${body.email}`,
    Subject: `${body.subject}`,
    Message: `${body.message}`,
  });
}
