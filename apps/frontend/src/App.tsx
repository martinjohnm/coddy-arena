import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"





function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route/>
              <Route/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
