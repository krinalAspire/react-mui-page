import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Page from './Page';

function App() {
  return (
   <>
   <Routes>
    {/* <Route path='/' element={<Page/>}/> */}
    <Route path='/' element={<Nav/>}/>
   </Routes>
   </>
  );
}

export default App;
