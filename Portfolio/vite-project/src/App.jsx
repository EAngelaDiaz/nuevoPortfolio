import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/skill";
import Work from "./components/work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);




const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        ease: 'power2.out'
      })
    })
  });

    return(
        
        <ReactLenis root>
       <Header/>
       <main>
         <Hero></Hero>
         <About></About>
         <Skill></Skill>
         <Work></Work>
         <Contact></Contact>
         <Footer></Footer>
       </main>
       </ReactLenis>
    ) 
}

export default App
