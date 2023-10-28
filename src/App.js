import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Error from './Screens/Error'
import Cart from './Screens/Cart'
import ForgotPassword from './Screens/ForgotPassword'
import Verify from './Screens/Verify'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
