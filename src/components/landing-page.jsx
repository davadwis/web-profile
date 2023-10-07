import Navbar from "./navbar";
import Hero from "./hero-section";
import About from "./about";
import Footer from "./footer";
import Skills from "./skills";
import Portofolio from "./portofolio";
import Contact from "./contact";

const Home = () => {
 return(
    <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Portofolio />
        <Contact />
        <Footer />
    </>
 )
}
export default Home;