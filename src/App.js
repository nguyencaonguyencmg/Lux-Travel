import logo from './logo.svg';
import './App.css';
import Header from './pages/header';
import RouterPage from './pages/RouterPage';
// import {connect} from "react-redux";
import { useDispatch} from 'react-redux';

import * as action from './action/roomlist/action';

function App() {
  return (
    <RouterPage />
  );
}

export default App;
