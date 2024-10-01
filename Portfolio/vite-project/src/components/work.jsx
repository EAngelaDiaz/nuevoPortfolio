import React from "react";
import ProjectCard from "./ProjectCard";

const worksItems = [
    {
        imgSrc: "/images/carpeta.jpg",
        title:"Proyecto 1",
        tags:['API', 'Development'],
        link:"https://github.com/EAngelaDiaz"
    },
    {
        imgSrc: "/images/carpeta.jpg",
        title:"Proyecto 2",
        tags:['API', 'Development'],
        link:"https://github.com/EAngelaDiaz"
    },
    {
        imgSrc: "/images/carpeta.jpg",
        title:"Proyecto 3",
        tags:['API', 'Development'],
        link:"https://github.com/EAngelaDiaz"
    },
    {
        imgSrc: "/images/carpeta.jpg",
        title:"Proyecto 4",
        tags:['API', 'Development'],
        link:"https://github.com/EAngelaDiaz"
    },
]

const Work = () => {
    return(
    <section id="proyectos" className="section">
        <div className="container">
           
           <h2 className="headline-2 mb-8 reveal-up">Mis proyectos destacados</h2>
           <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]">
            {worksItems.map(({imgSrc, title, tags, link}, key) => (
                <ProjectCard
                key={key} imgSrc={imgSrc} title={title} tags={tags} link={link} classes="reveal-up"></ProjectCard>
            ))}
           </div>

        </div>
    </section>
    )
}

export default Work;