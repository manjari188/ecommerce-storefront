import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
