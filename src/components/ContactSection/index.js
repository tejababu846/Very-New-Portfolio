import { useContext, useRef, useState } from "react";
import themeContext from "../../themeContext/themeContext";
import {
  ContactSectionContainer,
  FormContainer,
  FormText,
  Title,
  TitleSubNote,
  Form,
  InputLabel,
  InputField,
  MessageTextArea,
  SubmitButton,
} from "./styledComponents";

function ContactSection() {
  const form = useRef();

  const { isDarkMode } = useContext(themeContext);

  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if all required fields are filled
    const formFields = form.current.querySelectorAll("input[required], textarea[required]");
    const isFormValid = Array.from(formFields).every(field => field.value.trim() !== "");
  
    if (isFormValid) {
      setResponseMsg("Message sent successfully!");
      // Reset form fields
      e.target.reset();
    } else {
      setResponseMsg("Please fill in all required fields.");
    }
  
    setTimeout(() => {
      setResponseMsg("");
    }, 5000);
  };
  

  return (
    <ContactSectionContainer id="contact">
      <FormContainer isDarkMode={isDarkMode}>
        <FormText>
          <Title>Get In Touch</Title>
          <TitleSubNote>
            Do you want to have a chat?
            <br />
            Feel free to send me a message, I will definitely reply.
          </TitleSubNote>
        </FormText>
        <Form
          ref={form}
          onSubmit={handleSubmit}
          isDarkMode={isDarkMode}
        >
          <InputLabel htmlFor="name">Name</InputLabel>
          <InputField
            id="name"
            type="text"
            name="user_name"
            required
            isDarkMode={isDarkMode}
          />
          <InputLabel htmlFor="subject">Subject</InputLabel>
          <InputField
            id="subject"
            type="text"
            name="subject"
            required
            isDarkMode={isDarkMode}
          />
          <InputLabel htmlFor="email">Email</InputLabel>
          <InputField
            id="email"
            type="email"
            name="user_email"
            required
            isDarkMode={isDarkMode}
          />
          <InputLabel htmlFor="message">Message</InputLabel>
          <MessageTextArea
            id="message"
            rows={8}
            placeholder="Type your message here..."
            name="message"
            required
            isDarkMode={isDarkMode}
          />
          <p>{responseMsg}</p>
          <SubmitButton>SEND MESSAGE</SubmitButton>
        </Form>
      </FormContainer>
    </ContactSectionContainer>
  );
}

export default ContactSection;
