import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Common/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import ServiceCheckOut from './Pages/ServiceCheckOut/ServiceCheckOut';
import Footer from './Pages/Common/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <SignIn></SignIn> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service/:serviceId" element={<ServiceCheckOut />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
