const express = require ('express');
const nodemailer = require ('nodemailer');
const cors = require ('cors');

const app = express ();
const PORT = process.env.PORT || 5000;

app.use (cors ());
app.use (express.json ());

// Configure nodemailer transporter
const transporter = nodemailer.createTransport ({
  service: 'gmail', // or use a custom SMTP provider
  auth: {
    user: 'shravanshou@gmail.com',
    pass: 'sHRAVAN**000', // Use environment variables in production
  },
});

app.post ('/send', (req, res) => {
  const {name, email, message} = req.body;

  const mailOptions = {
    from: email,
    to: 'shravanshou@gmail.com', // Replace with your email
    subject: `New message from ${name}`,
    text: message,
  };

  transporter.sendMail (mailOptions, (error, info) => {
    if (error) {
      console.log (error);
      res.status (500).send ('Error sending email');
    } else {
      console.log ('Email sent: ' + info.response);
      res.status (200).send ('Email sent');
    }
  });
});

app.listen (PORT, () => {
  console.log (`Server running on port ${PORT}`);
});
