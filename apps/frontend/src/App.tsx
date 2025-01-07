import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { Problems } from "./pages/Problems"
import { Contest } from "./pages/Contest"
import { Problem } from "./pages/Problem"
import { Login } from "./pages/Login"





function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/problems" element={<Problems/>}/>
              <Route path="/contests" element={<Contest/>}/>
              <Route path="/problem/:id" element={<Problem/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
