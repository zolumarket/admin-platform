import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import ComponentC from './components/Login'


function App() {
  return (
    <div className="App">
       <ComponentC />
    </div>
  );
}

export default App;
