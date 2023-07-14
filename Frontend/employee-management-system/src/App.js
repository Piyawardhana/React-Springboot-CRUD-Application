import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import InsertEmployeeComponent from './components/InsertEmployeeComponent'
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <Routes>
            <Route path='/' element={<ListEmployeeComponent />} exact />
            <Route path='/employees' element={<ListEmployeeComponent />} exact />
            <Route path='/add-employee' element={<InsertEmployeeComponent />} exact />
            <Route path='/update-employee/:id' element={<UpdateEmployeeComponent />} exact />
        </Routes>
        <FooterComponent/>
      </Router>
    </div>
    
  );
}

export default App;
