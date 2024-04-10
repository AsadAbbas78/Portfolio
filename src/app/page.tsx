import Image from "next/image";
import Hero from "./component/hero";
import { Contact } from "./component/contact";
import Project from "./component/project";
import About from "./component/about";
import Skill from "./component/skill";
import Navbar from "./component/navbar";
import Footer from "./component/footer";



export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    
    
    
   </div>
  );
}
