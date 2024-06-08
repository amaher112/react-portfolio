import styled from 'styled-components';

const StyledButton = styled.button`
// background-color: #535bf2;

`

function Resume() {
    return (
        <>
        {/* <img src='src/assets/maher-resume.png' alt='resume' width='40%' height='40%'></img> */}
        <StyledButton>
        <a href='assets/resume.pdf' download>Click here to download my resume</a>
        </StyledButton>
        </>
    )
}

export default Resume;