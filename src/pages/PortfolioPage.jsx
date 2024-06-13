import styled from "styled-components";

const ProjectContainer = styled.div`
  border-radius: 8px;
  border: 2px solid;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 0.6em 1.2em;
  margin: 5px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProjectBox = styled.div`
  border-radius: 8px;
  border: 1px solid;
  padding: 0.6em 1.2em;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;
`;

function Portfolio() {
  return (
    <>
      <h2>
        Here is a sample of projects I have completed during the bootcamp:
      </h2>
      <ProjectContainer>
        <ProjectBox>
          <ProjectTitle>
            <img
              src="/images/adventure-awaits-screenshot.png"
              alt="adventure-awaits-screenshot"
              width="50%"
            />
            <h3>Adventure Awaits</h3>
          </ProjectTitle>
          <p>
            A React, single-page application that allows a user to create and
            plan a vacation.
          </p>

          <ProjectLinks>
            <a
              href="https://github.com/amaher112/adventure-awaits.git"
              target="_blank"
            >
              <h5>GitHub Repo</h5>
            </a>
            <a
              href="https://adventure-awaits-gagg.onrender.com"
              target="_blank"
            >
              <h5>Live Site</h5>
            </a>
          </ProjectLinks>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>
            <img
              src="/images/weather-dashboard-screenshot.png"
              alt="weather-dashboard-screenshot"
              width="50%"
            />

            <h3>Weather Dashboard</h3>
          </ProjectTitle>
          <p>Shows the current weather of a given city and 5-day forecast.</p>
          <ProjectLinks>
            <a
              href="https://github.com/amaher112/weather-dashboard.git"
              target="_blank"
            >
              <h5>GitHub Repo</h5>
            </a>
            <a
              href="https://amaher112.github.io/weather-dashboard/"
              target="_blank"
            >
              <h5>Live Site</h5>
            </a>
          </ProjectLinks>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>
            <img
              src="/images/shapeshift-screenshot.png"
              alt="shapeshift-screenshot"
              width="50%"
            />

            <h3>ShapeShift</h3>
          </ProjectTitle>
          <p>
            This group project application allows you to keep track of your
            fitness and wellness routines, as well as makes certain wellness
            calculations.
          </p>
          <ProjectLinks>
            <a
              href="https://github.com/amaher112/shapeShift.git"
              target="_blank"
            >
              <h5>GitHub Repo</h5>
            </a>
            <a
              href="https://shape-shift2-dd464e575484.herokuapp.com/login"
              target="_blank"
            >
              <h5>Live Site</h5>
            </a>
          </ProjectLinks>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>
            <img
              src="/images/note-taker-screenshot.png"
              alt="note-taker-screenshot"
              width="50%"
            />

            <h3>Note Taker</h3>
          </ProjectTitle>
          <p>
            This project uses API calls to save and retrieve notes. I was
            responsible for the back-end code that saves each new note and
            renders it on the page.
          </p>
          <ProjectLinks>
            <a
              href="https://github.com/amaher112/note-taker.git"
              target="_blank"
            >
              <h5>GitHub Repo</h5>
            </a>
            <a
              href="https://limitless-refuge-95387-9df5404df67f.herokuapp.com/"
              target="_blank"
            >
              <h5>Live Site</h5>
            </a>
          </ProjectLinks>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>
            <img
              src="/images/social-network.png"
              alt="globe with four silouhette icons connected to the globe by lines"
              width="30%"
            />

            <h3>Social Network API</h3>
          </ProjectTitle>
          <p>
            This back-end social media application handles users, thoughts and
            reactions. I was responsible for all the code and utilized Express
            and Mongoose.
          </p>
          <ProjectLinks>
            <a
              href="https://github.com/amaher112/social-network-api.git"
              target="_blank"
            >
              <h5>GitHub Repo</h5>
            </a>
          </ProjectLinks>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>
            <img
              src="/images/pwa-screenshot.png"
              alt="pwa-text-editor-screenshot"
              width="50%"
            />

            <h3>PWA Text Editor</h3>
          </ProjectTitle>
          <p>
            This application allows a user to write text, snippets of code, or
            anything that the user wants to remember. They can also download the
            application for offline use.
          </p>
          <ProjectLinks>
            <a
              href="https://github.com/amaher112/pwa-text-editor.git"
              target="_blank"
            >
              <h5>GitHub Repo</h5>
            </a>
            <a href="https://pwa-text-editor-b1t4.onrender.com" target="_blank">
              <h5>Live Site</h5>
            </a>
          </ProjectLinks>
        </ProjectBox>
      </ProjectContainer>
    </>
  );
}

export default Portfolio;
