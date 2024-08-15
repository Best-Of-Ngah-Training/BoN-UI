import { Box, TextField, Container, Typography } from "@mui/material";
import { useState } from "react";
import { send } from "@emailjs/browser";

const ContactForm = () => {
  const [last_name, setLastName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      last_name,
      first_name,
      email,
      message,
    };

    send(
      "service_dza26w8",
      "template_7kaqrxt",
      templateParams,
      "JFJg7AW50_QJf4rX9"
    ).then(
      (response) => {
        console.log(
          "Email envoyé avec succès!",
          response.status,
          response.text
        );
      },
      (err) => {
        console.error("Échec de l'envoi de l'email:", err);
      }
    );
  };

  return (
    <Container maxWidth="sm" className="mt-10" onSubmit={sendEmail}>
      <Typography variant="h4" className="text-center mb-4 pb-5">
        Contact Us
      </Typography>
      <Box component="form" className="space-y-4">
        <TextField
          id="outlined-last-name-input"
          label="Nom"
          type="text"
          name="last_name"
          autoComplete="name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          required
          fullWidth
          className="bg-white"
        />
        <TextField
          id="outlined-first-name-input"
          label="Prénom"
          type="text"
          name="first_name"
          autoComplete="firstName"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          required
          fullWidth
          className="bg-white"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          className="bg-white"
        />
        <TextField
          id="outlined-message-input"
          label="Message"
          type="text"
          name="message"
          autoComplete="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          fullWidth
          multiline
          rows={4}
          className="bg-white"
        />
        <button
          type="submit"
          className="mb-2 p-5 bg-firstColor text-white font-bold w-full hover:bg-gray-500"
        >
          Envoyer
        </button>
      </Box>
    </Container>
  );
};

export default ContactForm;
