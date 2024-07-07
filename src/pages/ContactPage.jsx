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


  return (
    <ContactContainer>
      <ContactBox>
        <h2>Contact Me Here:</h2>
        {/* <h2>Here are the ways you can reach me. Do not hesitate to get in touch!</h2> */}
        <p>Email me at:
          <a href="mailto:annemicheleyong@gmail.com"> annemicheleyong@gmail.com</a>
          </p>
          <p>Visit my LinkedIn page 
            <a href="https://www.linkedin.com/in/anne-michele-yong/" target="_blank"> HERE</a>
            </p>
            <p>View my GitHub 
              <a href="https://github.com/amaher112" target="_blank"> HERE</a>
            </p>
        
      </ContactBox>
    </ContactContainer>
  );
}

export default Contact;
