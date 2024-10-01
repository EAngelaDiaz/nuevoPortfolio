import React from "react";


const aboutItems = [
    {
        label: 'Proyectos armados',
        number: 45
    },
    {
        label: 'Años de experiencia',
        number: 10
    }
];

const About = () => {
    return (
        <section id="sobre mi" className="section">
          <div className="container">

            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    ¡Bienvenidos! Soy Estrella, una desarroladora web profesional con una habilidad especial para crear sitios web visualmente impactantes y altamente funcionales. Combinando creatividad y esperiencia técnica. Transformo tu visión en una obra maestra digital que sobresale tanto en apariencia como en rendimiento.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key ) => (
                            <div key={key}>
                              <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                              </div>
                              <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img src="/images/portafolio.png" alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]"></img>
                </div>
            </div>

          </div>
        </section>
    )

}

export default About