// @ts-nocheck


import { Routes, Route } from 'react-router-dom';
import './App.css';
import Resume from './Pages/Resume';
import Initial from './Pages/Initial';

function App() {  
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<Initial />} />
        <Route path='resume' element={<Resume />} />
      </Routes>
    </main>
  );
}

export default App;
