import './App.css';
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Nav from "./components/nav/nav";
import Project from "./components/project/project";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navber";

function WebContent() {
  return (
    <>
      <Navbar />
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;
