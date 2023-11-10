import logo from '../assets/triangle_logo.png';
import menu from '../assets/menu.png';

export default function Header() {
  return (
    <header id="header">
      <section className="flex justify-between container mx-auto mt-8 max-md:px-6 content-center text-white">
        <article className="child__header animate-bounce" id="logo__header">
        <img src={logo} alt="logo-header"/>
        </article>
        <article className="child__header" id="menu">
        <img src={menu} alt="menu-header" className='w-6'/>
        </article>
      </section>
    </header>
  );
}
