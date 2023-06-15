import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Hero from './pages/Hero'
import Category from './pages/Category'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Hero />}></Route>
        <Route exact path='category' element={<Category/>}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App