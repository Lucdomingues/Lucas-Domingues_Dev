// @ts-nocheck
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


export default function UpIcon() {
  const {hiddenUpDown, setHiddenUpDown} = useContext(ThemeContext);

  const upDown = document.getElementById('up');

  const setHiddenEventScrollButton = () => {
     window.scrollY > 400 ? setHiddenUpDown(true) : setHiddenUpDown(false);
     hiddenButtonScroll();
  };

  const hiddenButtonScroll = () => {
    hiddenUpDown ? upDown.style.display = 'block' : upDown.style.display = 'none';
  };

  window.addEventListener('scroll', setHiddenEventScrollButton)
  
  return (
    <a href="#" className="hidden" id="up">
        <div className="p-3 bg-indigo-700 w-12 flex justify-center rounded fixed bottom-0 right-0 m-5 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
  </svg>
  </div>
    </a>
  );
};
