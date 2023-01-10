import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import Showpage from './components/Showpage';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/showpage' element={<Showpage />} />
        {/* <Route path='/Home/Updatelist/:id' element={<Home />} /> */}
      </Routes>
     </Router>
    </div>
  );
}

export default App;
