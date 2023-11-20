// @ts-nocheck

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Resume from './Pages/Resume';
import Initial from './Pages/Initial';
import Contact from './Pages/Contact';
import Techs from './Pages/Techs';

function App() {  
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<Initial />} />
        <Route path='resumo' element={<Resume />} />
        <Route path='techs' element={<Techs />} />
        <Route path='contato' element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
