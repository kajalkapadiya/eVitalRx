import "./App.css";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sucess from "./components/Sucess";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sucess />
      <Courses />
      <Community />
      <Testimonial />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
