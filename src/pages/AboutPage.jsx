import styled from "styled-components";

const StyledButton = styled.button`
margin: 30px;

`

function About() {
  return (
    <>
      <h2>About Me</h2>

      <img src="public/images/profile-pic.jpg" width="30%" />

      <p>
        I am a recent graduate of University of Richmond's Full Stack Coding
        Bootcamp. I have a background in music and healthcare, and I am looking
        forward to a career change. Through the bootcamp I learned many
        technologies such as HTML, CSS, JavaScript, Node.js, Express.js,
        Bootstrap, React, MySQL, and MongoDB. I am able to create a full stack
        MERN application (with APIs if applicable) and I also have experience
        with PWAs.
      </p>
      <p>
        I am excited to continue my coding journey and am ready to learn every
        step of the way. Please do not hesitate to reach out with any questions
        you may have.
      </p>
      {/* <Line />   */}
      <StyledButton>
        <a href='assets/resume.pdf' download>Click here to download my resume</a>
        </StyledButton>
    </>
  );
}

export default About;
