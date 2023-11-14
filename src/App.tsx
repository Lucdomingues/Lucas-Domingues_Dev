// @ts-nocheck


import {Route, Routes} from 'react-router-dom';
import Initial from './Pages/Initial';
import Resume from './Pages/Resume';
import './App.css';

function App() {
  return (
    <main className='main'>
      <Routes>
        <Route exact path='/' element={<Initial />}/>
        <Route exact path='/resume' element={<Resume />}/>
      </Routes>
    </main>
  );
}

export default App;
