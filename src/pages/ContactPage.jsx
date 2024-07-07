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
