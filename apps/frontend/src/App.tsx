import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Landing } from "./pages/user/Landing"
import { Problems } from "./pages/user/Problems"
import { Contest } from "./pages/user/Contest"
import { Problem } from "./pages/user/Problem"
import { Login } from "./pages/user/Login"
import { DashboardPageAdmin } from "./pages/admin/DashboardPageAdmin"
import { ProblemsPageAdmin } from "./pages/admin/ProblemsPageAdmin"
import { UsersPageAdmin } from "./pages/admin/UsersPageAdmin"
import { ContestsPageAdmin } from "./pages/admin/ContestsPageAdmin"
import { ReportsPageAdmin } from "./pages/admin/ReportsPageAdmin"





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

              <Route path="/admin-dashboard" element={<DashboardPageAdmin/>}/>
              <Route path="/admin-problems" element={<ProblemsPageAdmin/>}/>
              <Route path="/admin-users" element={<UsersPageAdmin/>}/>
              <Route path="/admin-contests" element={<ContestsPageAdmin/>}/>
              <Route path="/admin-reports" element={<ReportsPageAdmin/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
