import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Meals from '../src/components/Meals/Meals'
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import MealDetail from './components/MealDetail/MealDetail';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Meals></Meals>}></Route>
        <Route path='/home' element={<Meals></Meals>}></Route>
        <Route path='/meal/:id' element={<MealDetail></MealDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
