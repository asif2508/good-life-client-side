import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import Thinking from './components/Thinking/Thinking';
import Decisions from './components/Decisions/Decisions';
import Influencing from './components/Influencing/Influencing';
import Conflict from './components/Conflict/Conflict';
import Driving from './components/Driving/Driving';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/habits' element={<RequiredAuth><Home></Home></RequiredAuth>}></Route>
        <Route path='/decisions' element={<RequiredAuth><Decisions></Decisions> </RequiredAuth>}></Route>
        <Route path='/thinking' element={<RequiredAuth> <Thinking></Thinking></RequiredAuth>}></Route>
        <Route path='/influencing' element={<RequiredAuth> <Influencing></Influencing> </RequiredAuth>}></Route>
        <Route path='/conflict' element={<RequiredAuth> <Conflict></Conflict> </RequiredAuth>}></Route>
        <Route path='/driving' element={<RequiredAuth> <Driving></Driving> </RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
