// @ts-nocheck

import { useNavigate } from "react-router-dom";
import UpIcon from "./UpIcon";

export default function About() {
  const navegation = useNavigate();
  
  const cardsAbouts = [
    {
      id: 1,
      description:
        "Como desenvolvedor estou em busca de um ambiente de trabalho focado no desenvolvimento e progresso!",
    },
    {
      id: 2,
      description:
        `Aplicar minha formação como
        desenvolvedor para o aperfeiçoamento
        de minhas “HardSkills” e “SoftSkills”,
        visando a senioridade!`,
    },
    {
      id: 3,
      description:
        `Aprimorar minhas noções de liderança e
        trabalho em equipe, projetando uma
        futura posição gerencial`,
    },
  ];

  return (
    <div className="">
      <UpIcon />
      <div className="flex screen justify-center flex-col items-center text-center mx-5">
        <h1 className="text-8xl text-white font-medium">Olá,</h1>
        <p className="text-4xl text-white font-extralight">
        Deixe compartilhar um pouco sobre mim!
        </p>
        <a href="#scrolling-one">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white mt-14 animate-bounce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </a>
      </div>

      <div
        className="flex screen justify-center flex-col items-center text-center bg__sections px-5"
        id="scrolling-one"
      >
        <h2 className="text-6xl text-white mb-7 font-medium">
          Meu nome é Lucas Domingues!
        </h2>
        <p className="text-3xl text-white font-extralight">
        Eu tenho experiência em UX/UI no Front End e no Back End,
<br /> envolvendo a criação e manipulação de APIs, servidores e
bancos de dados!
        </p>
        <a href="#scrolling-two">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white mt-14 animate-bounce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </a>
      </div>

      <div
        className="flex screen__personalization justify-center flex-col items-center text-center mx-5"
        id="scrolling-two"
      >
        <h2 className="text-6xl text-white font-medium mb-16">Meu Foco!</h2>

        <div className="">
          <ul className="max-md:flex-col max-lg:flex-col flex">
            {cardsAbouts.map((element) => {
              return <li key={element.id} className="github__repo p-12 max-md:my-5 max-lg:my-5 max-md:p-7 rounded mx-6 max-md:mx-0 text-3xl text-white font-extralight">
                  {element.description}
              </li>
            })}
          </ul>
        </div>
        <div className="text-white my-20">
          <button className="px-8 py-3 mt-1 max-md:mt-5 border rounded font-semibold text-lg">Minhas Tech's</button>
          <button onClick={()=> navegation("/projects")} className="px-8 py-3 mt-1 ml-4 bg-indigo-700 max-md:mt-5 rounded text-lg">Meus Projetos</button>
        </div>
      </div>
    </div>
  );
}
