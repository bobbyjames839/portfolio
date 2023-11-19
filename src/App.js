import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Nav } from './components/Nav';
import { useState } from 'react';

function App() {

  const [emailForm, setEmailForm] = useState(false);
  const [emailText, setEmailText] = useState(false)

  return (
    <div className='App'>
      <Router>
        <Nav setEmailForm={setEmailForm} setEmailText={setEmailText}/>
        <Routes>
          <Route path='/' element={<Home emailText={emailText} emailForm={emailForm} setEmailText={setEmailText} setEmailForm={setEmailForm}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
