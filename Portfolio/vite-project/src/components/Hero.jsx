import React from "react";
import { ButtonPrimary, ButtonOutLine } from "./Button";


const Hero = () => {
    return(
      <section 
      id="home"
      className="pt-28 md:pt-36 sm:pt-40">

      <div className="container items-center md:grid md:grid-cols-2 md:gap-10">
         <div>
            <div className="flex items-center gap-3">
               <figure className="img-box w-9 h-9 rounded-lg">
                <img 
                src="/images/avatar-1.jpg" 
                width={40}
                height={40}
                alt="Estrella perfil"
                className="img-cover"
                ></img>
               </figure>
               <div className="flex item-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                   <span className="relative w-2 h-2 rounded-full bg-emerald-400 mt-1.5">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                   </span>
                   Disponible para trabajar
               </div>
            </div>
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[10ch] md:max-w-[15ch] mt-5 mb-8 md:mb-10">
                Construyendo sitios web modernos y escalables para el futuro
            </h2>
            <div className="flex items-center gap-3">
               <ButtonPrimary label="Descargar CV" icon="download"></ButtonPrimary>
               
               <ButtonOutLine href="#sobre mi" label="Desplazar" icon="arrow_downward"></ButtonOutLine>
            </div>
         </div>
         
         

         <div className="hidden md:block">
           <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img src="/images/hero-banner.png" 
            width={656}
            height={800}
            alt="Estrella Perfil" 
            className="w-full" 
            />
           </figure>
         </div>
      </div>
      </section>
    ) 
}

export default Hero