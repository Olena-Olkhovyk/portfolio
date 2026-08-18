import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Reviews from './sections/Reviews.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

function App() {

  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App;
