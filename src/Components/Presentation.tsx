import {redirect} from 'react-router-dom';
import GithubPreview from "../Components/GithubPreview";

export default function Presentation() {
  window.onload = function () {
    const observer = new IntersectionObserver((entries)=> {
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          entry.target.classList.add('showY');
        } else {
          entry.target.classList.remove('show');
          entry.target.classList.remove('showY');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.hidden__manual');
    const hiddenElementsY = document.querySelectorAll('.hidden__manualY');
    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElementsY.forEach((el) => observer.observe(el));
   } 

  

  return (
    <div className="container max-md:mt-10 h-screen max-md:grid-flow-row max-md:px-6 px-6 max-lg:grid-flow-row max-md:auto-cols-auto grid-flow-col auto-cols-max grid content-center justify-around">
    <article className="text-white">
      <div>
      <h1 className="text-6xl max-md:text-5xl fadeIn">Hello</h1>
        <h2 className="text-4xl max-md:text-3xl fadeIn">I am Lucas Domingues</h2>
        <p className="text-4xl max-md:text-3xl max-md:mt-3 leading-loose fadeIn">I develop back end and front end <span className="blink text-3xl">|</span></p>
      </div>

        <div className="buttons">
          <button onClick={()=> redirect('/')} className="px-8 py-3 mt-1 max-md:mt-5 border rounded font-semibold text-lg button hidden__manual">Resume</button>
          <button className="px-8 py-3 mt-1 ml-4 bg-indigo-700 max-md:mt-5 rounded text-lg button hidden__manual">Let's Talk</button>
        </div>
    </article>
    <article className="">
      <GithubPreview />
    </article>
    </div>
  )
}
