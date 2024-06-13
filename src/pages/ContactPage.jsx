import { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

`;
const ContactBox = styled.div`
  padding: 20px;
  width: 80%;
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
`;
// const SubmitButton = styled.button`
 
//   border: black;
//     color: black;
//   padding: 15px 32px;
//   text-align: center;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
//   transition-duration: 0.4s;
//   border-radius: 12px;

//   &:hover {
//     // background-color: #45a049;
//   }
// `;

const StyledButton = styled.button`
margin: 30px;
font-size: 16px;
color: rgba(45, 147, 108);

`
const MessageInput = styled.input`
  width: 50%;
  height: 200px;
  margin: 5px;
  color: rgba(255, 255, 255, 0.87);
  background-color: rgba(35, 39, 47);
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  font-size: 25px;
`;

const Input = styled.input`
  height: 20px;
  width: 50%;
  margin: 10px;
  color: rgba(255, 255, 255, 0.87);
  background-color: rgba(35, 39, 47);
`;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleBlur = (event) => {
    const { name, value } = event.target;

    if (name === "name" && !value) {
      alert("Name is required");
    }
    if (name === "email" && !value) {
      alert("Email is required");
    }
    if (name === "message" && !value) {
      alert("Message is required");
    }
    if (name === "email" && value) {
      const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.test(value)) {
        alert("Invalid email address");
      }
    }
    if (name === "message" && value && value.length < 10) {
      alert("Message must be at least 10 characters");
    }
  };

  return (
    <ContactContainer>
      <ContactBox>
        <h2>Contact Me</h2>
        <Form>
          <Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onBlur={handleBlur}
              onChange={(e) => setName(e.target.value)}
            />
          </Label>
          <Label>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onBlur={handleBlur}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label>
            <MessageInput
              type="text"
              name="message"
              placeholder="Message"
              value={message}
              onBlur={handleBlur}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Label>
          <StyledButton type="submit">Submit</StyledButton>
        </Form>
      </ContactBox>
    </ContactContainer>
  );
}

export default Contact;
