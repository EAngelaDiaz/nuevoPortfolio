import React from "react";
import SkillCard from "./SkillCard";

const skillItems = [
    {
        imgSrc: "/images/javascript.png",
        label: "JavaScript",
        desc: "Interaction"
    },
    {
        imgSrc: "/images/css.png",
        label: "CSS",
        desc: "User Interface"
    },
    {
        imgSrc: "/images/node.jpg",
        label: "NodeJS",
        desc: "Web Server"
    },
    {
        imgSrc: "/images/express.png",
        label: "ExpressJS",
        desc: "Node Framework"
    },
    {
        imgSrc: "/images/tailwind.jpg",
        label: "TailwindCSS",
        desc: "User Interface"
    },
    {
        imgSrc: "/images/postgres.png",
        label: "PostgreSQL",
        desc: "Database"
    },
    {
        imgSrc: "/images/react.png",
        label: "React",
        desc: "Framework"
    },
    {
        imgSrc: "/images/figma.png",
        label: "Figma",
        desc: "Design Tool"
    }


]

const Skill = () => {
    return (
        <section id="tecnologías" className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Herramientas
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Descubra las potentes herramientas y tecnologías que utilizo para crear sitios web y aplicaciones excepcionales y de alto rendimiento.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]">
                   {skillItems.map(({imgSrc, label, desc}, key) => (
                    <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"></SkillCard>
                   ))}
                </div>
            </div>
        </section>
    )
}

export default Skill