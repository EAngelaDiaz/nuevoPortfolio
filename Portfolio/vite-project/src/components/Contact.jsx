import React from "react";

const redesLinks = [
    {
      href:"https://github.com/EAngelaDiaz",
      icon:"/images/social.png",
      alt:"GitHub"
    },
    {
      href:"https://www.linkedin.com/in/angela-estrella-diaz-15b593287",
      icon:"/images/linkedin.png",
      alt:"LinKedIn"
    },
    {
        href:"https://x.com",
        icon:"/images/xx.png",
        alt:"Twitter"
    },
    {
        href:"https://www.instagram.com",
        icon:"/images/instagram.jpg",
        alt:"Intagram"
    }
    
  ]

const Contact = () => {
    return (
        <section id="contacto" className="section">
            <div className="container md:grid md:grid-cols-2 md:items-stretch">
                <div className="mb-12 md:mb-0 md:flex md:flex-col">
                   <h2 className="headline-2 md:max-w-[12ch] reveal-up">Contáctame</h2>
                   <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] md:max-w-[30ch] reveal-up">Por cualquier consulta estoy a su disposición!</p>
                   <div className="flex items-center gap-2 mt-auto">
                    {redesLinks.map(({href, icon}, key) => (
                        <a key={key} href={href} target="_blank" className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/50 rounded-lg transition-[background-color, color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up">
                            <img src={icon} width={30} height={30} className=""></img>
                        </a>
                    ))}
                   </div>
                </div>
                <form action="https://getform.io/f/bejykwra" method="POST" className="md:pl-10 xl:pl-20">
                    <div className="sm:grid sm:items-center sm:grid-cols-2 sm:gap-2">
                        <div className="mb-4">
                            <label htmlFor="name" className="label reveal-up">Nombre:</label>
                            <input type="text" name="name" id="name" autoComplete="name" required placeholder="Estrella Diaz" className="text-field reveal-up"></input>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="label reveal-up">Email:</label>
                            <input type="email" name="email" id="email" autoComplete="email" required placeholder="estrella@email.com" className="text-field reveal-up"></input>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="label reveal-up">Mensaje:</label>
                        <textarea name="message" id="message" placeholder="Escribe tu consulta aqui!" required className="text-field resize-y min-h-32 max-h-80 reveal-up"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up">Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Contact