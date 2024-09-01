import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Copyright from './Components/Copyright/Copyright';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />  
      <About />
      <Projects />
      <Contact />
      <Copyright/>
    </div>
  );
}

export default App;
