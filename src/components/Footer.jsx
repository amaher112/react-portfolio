import styled from 'styled-components';

const StyledFooter = styled.footer`
padding: 20px;
text-align: center;
a{
    margin: 0 15px;
  }
  position: relative;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background-color: #242424;

`

function Footer() {
    return (
      <StyledFooter>
        <a href="https://github.com/amaher112" target="_blank" rel="noopener noreferrer">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="40" height="40" />
    </a>
        <a href="https://www.linkedin.com/in/anne-michele-maher/" target="_blank" rel="noopener noreferrer">
       <img src='/src/assets/linked-in.png' alt='LinkedIn' width='40' height='40'/>
    </a>
        <a href="mailto:annemichelemaher@gmail.com">
          <img src='/src/assets/email.png' alt='Email' width='40' height='40'/>
        </a>
      </StyledFooter>
    );
  }
  
  export default Footer;