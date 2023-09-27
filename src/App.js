import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div>
      <p>Test</p>
      <Routes>
        <Route path = '/' element = {<LandingPage />}/>
        <Route path='/home' element = {<Home />} />
      </Routes>
    </div>
  );
}

export default App;
