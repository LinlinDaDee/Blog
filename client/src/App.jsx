import {BrowerRouter, Routes, Route} from  'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/Sign_up';
import SignIn from './pages/Sign_in';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';


export default function App() {
  return (
    <BrowerRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowerRouter>
  )
}
