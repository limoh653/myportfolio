
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import About from './components/About';
import Project from './components/project';
import ContactSection from './components/conatactSection';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Intro />
      <About />
      <Project />
      <ContactSection />
    </div>
  );
}

export default App;
