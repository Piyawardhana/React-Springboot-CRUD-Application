import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import InsertEmployeeComponent from './components/InsertEmployeeComponent'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <Routes>
            <Route path='/employees' element={<ListEmployeeComponent />}></Route>
            <Route path='/add-employee' element={<InsertEmployeeComponent />}></Route>
        </Routes>
        <FooterComponent/>
      </Router>
    </div>
    
  );
}

export default App;
