import './App.css'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import EditorPage from './pages/EditorPage'
import Home from './pages/home'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editor/:roomId' element={<EditorPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
