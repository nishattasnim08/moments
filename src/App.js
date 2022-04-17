import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Common/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
