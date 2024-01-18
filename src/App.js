import HomePage from './Pages/HomePage/HomePage'
import './assets/css/bootstrap.min.css'
import './assets/css/icofont.css'
import './assets/css/style.css'
import './assets/css/swiper.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App