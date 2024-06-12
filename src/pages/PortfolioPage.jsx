import styled from "styled-components";

const ProjectContainer = styled.div`
  border-radius: 8px;
  border: 2px solid;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 0.6em 1.2em;
  margin: 5px;
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
              src="/src/assets/adventure-awaits-screenshot.png"
              alt="adventure-awaits-screenshot"
              width="50%"
            />
            <h3>Adventure Awaits</h3>
          </ProjectTitle>
          <p>
            A React, single-page application that allows a user to create trips
            and packing lists. The user can also find hotels and restaurants by
            typing in the city of their choice.
          </p>

          <ProjectLinks>
            <a href="https://github.com/amaher112/adventure-awaits.git" target="_blank">
            <h5>Click here for GitHub repo</h5></a>
            <a href="https://adventure-awaits-gagg.onrender.com" target="_blank">
            <h5>Click here for live site</h5></a>
          </ProjectLinks>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>
            <img
              src="/src/assets/weather-dashboard-screenshot.png"
              alt="weather-dashboard-screenshot"
              width="50%"
            />

            <h3>Weather Dashboard</h3>
          </ProjectTitle>
          <p>
            Shows the current weather of a given city and 5-day forecast. This
            dashboard will save your city searches and allow you to get the
            weather for those cities again.
          </p>
          <ProjectLinks>
            <a href="https://github.com/amaher112/weather-dashboard.git" target="_blank">
            <h5>Click here for GitHub repo</h5></a>
            <a href="https://amaher112.github.io/weather-dashboard/" target="_blank">
            <h5>Click here for live site</h5></a>
          </ProjectLinks>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>
            <img
              src="/src/assets/shapeshift-screenshot.png"
              alt="shapeshift-screenshot"
              width="50%"
            />

            <h3>ShapeShift</h3>
          </ProjectTitle>
          <p>
            This appliction allows you to keep track of your fitness and
            wellness routines, calculate your BMR, total Daily Energy
            Expenditure, caloric needs, and ideal body weight all while logging
            and tracking past work outs. If you want to gain mass, lose weight,
            or maintain, we got you covered with ShapeShift!
          </p>
          <ProjectLinks>
            <a
              href="https://github.com/amaher112/shapeShift.git"
              target="_blank"
            >
              <h5>Click here for GitHub repo</h5>
            </a>
            <a
              href="https://shape-shift2-dd464e575484.herokuapp.com/login"
              target="_blank"
            >
              <h5>Click here for live site</h5>
            </a>
          </ProjectLinks>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>
            <img
              src="/src/assets/note-taker-screenshot.png"
              alt="note-taker-screenshot"
              width="50%"
            />

            <h3>Note Taker</h3>
          </ProjectTitle>
          <p>
            This project uses HTML and API calls to save and retrieve notes. I
            was responsible for the back-end code such as the GET requests for
            both HTML files and APIs, and the POST request for the notes API.
            The code saves each new note to the json file and renders it on the
            page.
          </p>
          <ProjectLinks>
            <a
              href="https://github.com/amaher112/note-taker.git"
              target="_blank"
            >
              <h5>Click here for GitHub repo</h5>
            </a>
            <a
              href="https://limitless-refuge-95387-9df5404df67f.herokuapp.com/"
              target="_blank"
            >
              <h5>Click here for live site</h5>
            </a>
          </ProjectLinks>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>
            <img
              src="/src/assets/social-network.png"
              alt="globe with four silouhette icons connected to the globe by lines"
              width="30%"
            />

            <h3>Social Network API</h3>
          </ProjectTitle>
          <p>
            The purpose of this project was to create a back-end social media
            application that handles users, thoughts and reactions. I was
            responsible for all the code and utilized Express and Mongoose.
          </p>
          <ProjectLinks>
            <a
              href="https://github.com/amaher112/social-network-api.git"
              target="_blank"
            >
              <h5>Click here for GitHub repo</h5>
            </a>
            {/* <h5>Click here for live site</h5> */}
          </ProjectLinks>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>
            <img
              src="/src/assets/pwa-screenshot.png"
              alt="pwa-text-editor-screenshot"
              width="50%"
            />

            <h3>PWA Text Editor</h3>
          </ProjectTitle>
          <p>
            This application allows a user to write text, snippets of code, or
            anything that the user wants to remember. They can also download the
            application for offline use. I was responsible for the PUT and GET
            methods, as well as setting up the webpack config and package.json
            scripts. I also added event listeners, and wrote code for a service
            worker.
          </p>
          <ProjectLinks>
            <a
              href="https://github.com/amaher112/pwa-text-editor.git"
              target="_blank"
            >
              <h5>Click here for GitHub repo</h5>
            </a>
            <a href="https://pwa-text-editor-b1t4.onrender.com" target="_blank">
              <h5>Click here for live site</h5>
            </a>
          </ProjectLinks>
        </ProjectBox>
      </ProjectContainer>
    </>
  );
}

export default Portfolio;
