import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import NewVideo from './pages/NewVideo';
import Home from './pages/Home';

function App () {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/new-video" element={<NewVideo />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
