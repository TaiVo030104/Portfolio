import './App.css';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { darkTheme } from './utils/Themes.js';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects'
import ProjectDetails from "./components/ProjectsDetail";
import Footer from './components/Footer';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(47, 102, 208, 1) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Main />
          <Wrapper>
            <Skills />
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Contact/>
          </Wrapper>
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
          <Footer/>
        </Body>
    
      </Router>
    </ThemeProvider>
  );
}

export default App;
