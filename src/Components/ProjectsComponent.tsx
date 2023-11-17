// @ts-nocheck
import imageProject from "../assets/istockphoto-1384751322-612x612.jpg";
import imageProject1 from "../assets/18954499_6057485.jpg";
import imageProject2 from "../assets/istockphoto-1399901182-612x612.jpg";
import imageProject3 from "../assets/699de060-bbe2-4bd9-9b63-fa90231877ce.jpg";
import imageProject4 from "../assets/WEB-DEVELOPER-WEB-DESIGNER.png";
import imageProject5 from "../assets/depositphotos_441034334-stock-photo-website-design-concept-3d-rendering.jpg";

export default function ProjectsComponent() {
  const arrMyProjects = [
    {
        id: 1,
      image: imageProject,
      name: "lorem impsum",
      description: "lorem impsumlorem impsumlorem impsum",
      link: "",
    },
  ];
  return (
    <div>
      <ul>
        {arrMyProjects.map((element) => {
          return (
            <li key={parseInt(Math.random())} className="text-white w-1/2">
              <div id="image">
                <img src={element.image} alt={element.name} />
              </div>
              <div id="content">
                <span className="text-3xl span_col">Projeto {element.id}</span>
                <h3 className="font-bold text-4xl">{element.name}</h3>
                <p className="font-extralight text-2xl">{element.description}</p>
                <a href={element.link} className="font-bold">Leia mais</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
