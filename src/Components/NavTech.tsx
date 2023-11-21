export default function NavTech() {
  return (
    <div className="flex flex-col justify-center items-center screen mx-7">
        <div>
        <h1 className="text-white text-center font-bold text-5xl max-md:mb-5 max-md:text-3xl max-[750px]:m-0 m-14">Minhas experiências e conhecimentos adiquiridos por meio de estudos e projetos voltados para a metodologia ágil</h1>
        </div>
        <div>
        <nav className="flex max-[750px]:flex-col max-[750px]:mt-10 text-white">
            <a href="#front-end" className="mr-5 max-[750px]:mb-5 font-extralight text-2xl hover:underline hover:underline-offset-4">Front End</a>
            <a href="#back-end" className="mr-5 max-[750px]:mb-5 font-extralight text-2xl hover:underline hover:underline-offset-4">Back End</a>
            <a href="#banco-de-dados" className="mr-5 max-[750px]:mb-5 font-extralight text-2xl hover:underline hover:underline-offset-4">Banco de Dados</a>
            <a href="#outros" className="mr-5 max-[750px]:mb-5 font-extralight text-2xl hover:underline hover:underline-offset-4">Outros</a>
        </nav>
        </div>   
    </div>
  );
};
