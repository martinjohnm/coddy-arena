import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { Problems } from "./pages/Problems"
import { Contest } from "./pages/Contest"





function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/problems" element={<Problems/>}/>
              <Route path="/contests" element={<Contest/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
