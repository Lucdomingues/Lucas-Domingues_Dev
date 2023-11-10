import image_initial from "../assets/DevOps.png";

export default function Presentation() {
  return (
    <div className="container h-screen max-md:grid-flow-row max-md:px-6 max-md:auto-cols-auto grid-flow-col auto-cols-max grid content-center justify-around">
    <article className="text-white">
        <h1 className="text-6xl max-md:text-5xl">Hello</h1>
        <h2 className="text-4xl max-md:text-3xl">I am Lucas Domingues</h2>
        <p className="text-4xl max-md:text-3xl max-md:mt-3 leading-loose">I develop back end and front end <span className="blink text-3xl">|</span></p>
    </article>
    <article className="">
        <img src={image_initial} alt="dev_fullstack"/>
    </article>
    </div>
  )
}
