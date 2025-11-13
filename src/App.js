import { Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import Layout from './components/PortfolioLayout/Layout';
import HeroSection from './components/PortfolioLayout/HeroSection';
import Projects from './components/PortfolioLayout/Projects';
import Tech from './components/PortfolioLayout/Tech';
import About from './components/PortfolioLayout/About';
import Experience from './components/PortfolioLayout/Experience';
import Conatct from './components/PortfolioLayout/Conatct';

function App() {
  return (
    <div className="App">
      <Routes>
    
        <Route path='/' element={<Layout/>}>
         <Route path='/' element={<HeroSection />}></Route>
         <Route path='/projects' element={<Projects />}></Route>
         <Route path='/tech' element={<Tech />}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/Experience' element={<Experience/>}></Route>
         <Route path='/contact' element={<Conatct/>}></Route>

        </Route>
        </Routes>
          
         
      
    </div>
  );
}

export default App;
