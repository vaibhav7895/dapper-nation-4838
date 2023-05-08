
import './App.css';
import Footer from './Components/Footer';

import Navbar from './Components/Navbar';
import WithSubnavigation from './Components/Navbar';
import Contact from './Pages/Contact';




import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Footer/>
      {/* <Contact/> */}
    </div>
   
  );
}

export default App;
