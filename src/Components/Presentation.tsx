import {useNavigate} from 'react-router-dom';
import GithubPreview from "../Components/GithubPreview";

export default function Presentation() {
  const navegation = useNavigate();

//   document.addEventListener("DOMContentLoaded", function() {
//     const test = document.getElementsByClassName('button');
//     console.log(test);
    
//     const observer = new IntersectionObserver(async(entries)=> {
//       console.log(entries);
      
//       entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//           entry.target.classList.add('show');
//           entry.target.classList.add('showY');
//         } else {
//           entry.target.classList.remove('show');
//           entry.target.classList.remove('showY');
//         }
//       });
//     });
  
//     const hiddenElements = document.querySelectorAll('.hidden__manual');
//     const hiddenElementsY = document.querySelectorAll('.hidden__manualY');
//     hiddenElements.forEach((el) => observer.observe(el));
//     hiddenElementsY.forEach((el) => observer.observe(el));
// });
  
  return (
    <div className="max-md:mt-10 h-screen max-md:grid-flow-row max-md:px-6 px-6 max-lg:grid-flow-row max-md:auto-cols-auto grid-flow-col auto-cols-max grid content-center justify-between">
    <article className="text-white mr-10 max-md:mr-0">
      <div className=''>
      <h1 className="text-6xl max-md:text-5xl fadeIn">Olá</h1>
        <h2 className="text-4xl max-md:text-3xl fadeIn">Eu sou Lucas Domingues</h2>
        <p className="text-4xl max-md:text-3xl max-md:mt-3 leading-loose fadeIn">Desenvolvo back-end e front-end <span className="blink text-3xl">|</span></p>
      </div>

        <div className="buttons">
          <button onClick={()=> navegation("/resume")} className="px-8 py-3 mt-1 max-md:mt-5 border rounded font-semibold text-lg button hidden__manual">Resumo</button>
          <button className="px-8 py-3 mt-1 ml-4 bg-indigo-700 max-md:mt-5 rounded text-lg button hidden__manual">Me chame!</button>
        </div>
    </article>
    <article className="ml-10 max-md:ml-0">
      <GithubPreview />
    </article>
    </div>
  )
}
