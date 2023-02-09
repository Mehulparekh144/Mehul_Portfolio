import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  

  return (
    <div className="App">
      <Navbar/>
     
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Social/>
    </div>
  );
}

export default App;
