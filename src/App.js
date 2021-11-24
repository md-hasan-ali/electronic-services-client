import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './pages/AboutUs/About';
import Home from './pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home></Home>}>
          </Route>

          <Route path='/home' element={<Home></Home>}>
          </Route>

          <Route path='/about' element={<About></About>}>
          </Route>

          <Route path='/contact' element={<Contact></Contact>}>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
