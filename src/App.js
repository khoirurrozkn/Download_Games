import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Hero from './pages/Hero'

function App() {
  return(
    <BrowserRouter>
      <div id='app'>
        <Routes>
          <Route exact path='/' element={<Hero />}></Route>

          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App