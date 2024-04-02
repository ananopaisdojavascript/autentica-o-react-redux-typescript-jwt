import { Fragment } from 'react/jsx-runtime';
import { Routes, Route } from 'react-router';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {

  return (
    <Fragment>
     <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
     </Routes>
    </Fragment>
  )
}

export default App
