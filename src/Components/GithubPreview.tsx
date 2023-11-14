// @ts-nocheck

export default function GithubPreview() {
  const arrGit = [
    {
      id: 1,
      nome: "Trybe Futebol Club",
      description: "O TFC é um site de informações sobre futebol...",
      url: "https://github.com/Lucdomingues/Trybe_Futebol_Club",
    },
    {
      id: 2,
      nome: "Blogs-Api",
      description: "Uma aplicação baseada no back-end utilizando Node.js...",
      url: "https://github.com/Lucdomingues/Blogs-Api",
    },
    {
      id: 3,
      nome: "Players and Dragons",
      description: "Fazendo uso dos paradigmas POO e SOLID...",
      url: "https://github.com/Lucdomingues/players-and-dragons",
    },
  ];

  return (
    <div className="container md:container max-md:mt-16 ml-8 max-md:ml-0">
      <div className="flex flex-col">
        <h1 className="text-white mb-7 text-5xl fadeIn">My Projects</h1>
        <ul>
          {arrGit.map((element) => {
            return (
              <a href={element.url} target="_blank">
                <li
                  key={element.id}
                  className="github__repo hidden__manualY h-24 py-4 px-12 rounded-lg shadow-lg mb-5 flex flex- justify-between items-center"
                >
                  <div>
                  <h3 className="text-white font-medium">{element.nome}</h3>
                  <p className="text-white font-extralight">
                    {element.description}
                  </p>
                  </div>
                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
