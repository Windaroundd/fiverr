import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Layout from './HOC/Layout';
import ShowPage from './ShowPage/ShowPage';
import TitlePage from './TitlePage/TitlePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><HomePage/></Layout>}></Route>
        <Route path='/job' element={<Layout><ShowPage/></Layout>}></Route>
        <Route path='/title' element={<Layout><TitlePage/></Layout>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
