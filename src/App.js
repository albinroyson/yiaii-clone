
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";

import Landingpage from './Componets/screens/Landingpage';
import Register from './Componets/screens/Register';
import Joinnow from './Componets/includes/modals/Joinnow';
import StartinPage from './Componets/screens/StartinPage';
import Profileheader from './Componets/includes/Profileheader';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Landingpage/>} />
        <Route path="/register" element={ <Register />} />
        <Route path="" element={ <Joinnow />} />
        <Route path="/profile" element={ <StartinPage />} />
      </Routes>
  </BrowserRouter>
     
      
  );
}
export default App;
