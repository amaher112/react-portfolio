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
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectImg = styled.a`

`

function Portfolio() {
  return (
    <>
      <h2>
        Here is a sample of projects I have completed during the bootcamp:
      </h2>
      <ProjectContainer>
        <ProjectBox>
        <img src="/src/assets/adventure-awaits-screenshot.png" alt='adventure-awaits-screenshot' width="50%" height="50%" />
        <ProjectDescription>
            <h3>Adventure Awaits</h3>
            
           
            <p>
              A React, single-page application that allows a user to create
              trips and packing lists. The user can also find hotels and
              restaurants by typing in the city of their choice.
            </p>
          </ProjectDescription>
        </ProjectBox>
        <ProjectBox>
            <img src="/src/assets/weather-dashboard-screenshot.png" alt="weather-dashboard-screenshot" width="50%" height="50%"  />
        <ProjectDescription>
            <h3>Weather Dashboard</h3>
            <p>Shows the current weather of a given city and 5-day forecast. This dashboard will save your city searches and allow you to get the weather for those cities again.</p>
        </ProjectDescription>
        </ProjectBox>
      </ProjectContainer>
    </>
  );
}

export default Portfolio;
