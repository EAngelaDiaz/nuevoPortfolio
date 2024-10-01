import React from "react";
import { ButtonPrimary } from "./Button";

const itemsFooter = [
    {
        label:"Home",
        href:"#home"
    },
    {
        label:"Sobre mi",
        href:"#sobre mi"
    },
    {
        label:"Tecnologías",
        href:"#tecnologias"
    },
    {
        label:"Proyectos",
        href:"#proyectos"
    },
    {
        label:"Contáctame",
        href:"#contacto"
    },
]

const sociales = [
    {
        label:"Github",
        href:"https://github.com/EAngelaDiaz"
    },
    {
        label:"LinkedIn",
        href:"https://www.linkedin.com/in/angela-estrella-diaz-15b593287"
    },
    {
        label:"Instagram",
        href:"http://www.instagram.com"
    },
    {
        label:"Twitter",
        href:"http://x.com"
    },

]

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                  <div className="md:grid md:grid-cols-2">
                      <div className="mb-10">
                        <h2 className="headline-1 mb-8 md:max-w-[12ch] reveal-up">Trabajemos juntos hoy!</h2>
                        <ButtonPrimary href="mailto:angelaestrelladiaz@outlook.com" label="Comencemos" icon="chevron_right" classes="reveal-up"></ButtonPrimary>
                      </div>
                      <div className="grid grid-cols-2 gap-4 md:pl-20">
                        <div>
                            <p className="mb-2 reveal-up">Mapa del sitio</p>
                            <ul>
                                {itemsFooter.map(({label, href}, key) =>(
                                    <li key={key}>
                                        <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="mb-2 reveal-up">Redes sociales</p>
                            <ul>
                                {sociales.map(({label, href}, key) =>(
                                    <li key={key}>
                                        <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                      </div>
                </div>
                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="/" className="logo reveal-up">
                        <img src="/images/portafolio.png" width={40} height={40} alt=""></img>
                    </a>
                    <p className="text-zinc-500 text-sm reveal-up">
                        &copy; 2024 <span className="text-zinc-200">Mi portafolio personal</span>
                        </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer