import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
  margin: 10px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export default function Header() {
  
  return (
    <> 
     <style>{`
      body, html, h1 {
        margin: 0;
        padding: 0;
      }
    `}</style>
    <header style={{width: '100%', height: '125px', backgroundColor: '#242424'}}> 
    <h1>Anne-Michele Maher</h1>
    {/* <h2>Full Stack Web Developer</h2> */}
    <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px', fontSize: '18px' ,}}>
        <Link className="nav-link text-light" to="/">
          About Me
        </Link>
        <Link className="nav-link text-light" to="/portfolio">
          Portfolio
        </Link>
        <Link className="nav-link text-light" to="/contact">
        Contact
      </Link>
      <Link className="nav-link text-light" to="/resume">
      Resume
    </Link>
    </nav>
    </header>
    </>
      
    
  );
}
