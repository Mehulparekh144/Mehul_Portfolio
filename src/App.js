import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  

  return (
    <div className="App">
      <Navbar/>
     
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Social/>
      <Footer/>
    </div>
  );
}

export default App;
