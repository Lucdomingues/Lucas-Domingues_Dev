// @ts-nocheck
import { useNavigate } from 'react-router-dom';


import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
import logo from '../assets/triangle_logo.png';

export default function Header() {
  const {menuSelect, setMenuSelect} = useContext(ThemeContext);
  const navigation = useNavigate();

  const menuToggle = (e) => {
    const menuOpen = document.getElementById('open');
    if(menuSelect) {
      setMenuSelect(false);
      menuOpen.style.display = 'flex';
      return e.currentTarget.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
    </svg>
    `;
    }
    setMenuSelect(true);
    menuOpen.style.display = 'none';
    return e.currentTarget.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
  </svg>
  `;  
  };

  return (
    <header id="header">
      <section className="flex justify-between container mx-auto mt-8 max-md:px-6 px-6 content-center max-md:justify-center text-white fadeIn">
        <article className="child__header animate-bounce max-md:hidden" id="logo__header">
          <button onClick={() => navigation('/')}>
          <img src={logo} alt="logo-header"/>
          </button>
        </article>
        <article className="child__header flex justify-center" id="menu">
        <button onClick={ menuToggle }><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
</svg>
</button>
        <button onClick={ menuToggle }></button>
        <div className='hidden fixed top-16 bg-white text-black rounded justify-center fadeIn' id='open'>
          <nav className='p-8'>
            <ul>
              <li className='mb-4 cursor-pointer' onClick={()=> navigation('/resume')}><span className='font-medium'>Resumo</span><br /><span className='font-extralight'>Deixe compartilhar um pouco sobre mim!</span></li>
              <li className='mb-4'><span className='font-medium'>Analitycs</span><br /><span className='font-extralight'>Get a bestearn understening</span></li>
            </ul>
          </nav>
        </div>
        </article>
      </section>
    </header>
  );
}
