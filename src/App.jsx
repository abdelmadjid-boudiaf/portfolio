
import ScrollToTop from "./components/ScrollToTop";
import Contacts from "./container/Contacts";
import Footer from "./container/Footer";
import Header from "./container/Header";
import Hero from "./container/Hero";
import Projects from "./container/Projects";
import Skills from "./container/Skills";
function App() {
 
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
