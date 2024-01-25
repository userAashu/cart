
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import SignUp from './components/SignUp';
import Login from './components/login';
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import PrivetRouts from './components/PrivetRouts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
     <Routes>
      <Route element = {<PrivetRouts /> }>
      <Route path='/' element ={<Home />} />
      <Route path='/product' element ={<AddProduct />} />
      <Route path='/about' element ={<h1>This is about page</h1>} />
      <Route path='/contect' element ={<h1>This is home contect page</h1>} />
      <Route path='/profile' element ={<h1>This is home profile page</h1>} />
      <Route path='/logout' element ={<h1>This is logout page</h1>} />
      </Route>
      <Route path='/SignUp' element ={<SignUp />} />
      <Route path='/Login' element ={<Login />} />
     </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;


 {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
