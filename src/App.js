import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import {Routes, Route,BrowserRouter} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    
    <Routes>
        <Route path = '/' element = {<Login/>}/>
        <Route path = 'home/' element = {<Home/>}/>
      </Routes> 
     
    </BrowserRouter>
    
    </>
  );
}

export default App;
