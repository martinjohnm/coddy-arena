import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Problem } from "./pages/user/Problem"
import { Login } from "./pages/user/Login"
import ProtectedRoute from "./protection/protectUser"
import { UserLayout } from "./pages/user/UserLayout"
import AuthUserRoute from "./protection/authUser"
import { Landing } from "./pages/user/Landing"
import { Problems } from "./pages/user/Problems"
import { Contest } from "./pages/user/Contest"
import { DashboardPageAdmin } from "./pages/admin/DashboardPageAdmin"
import { AdminLayout } from "./pages/admin/AdminLayout"
import { ProblemsPageAdmin } from "./pages/admin/ProblemsPageAdmin"
import { ContestsPageAdmin } from "./pages/admin/ContestsPageAdmin"
import { ReportsPageAdmin } from "./pages/admin/ReportsPageAdmin"
import { UsersPageAdmin } from "./pages/admin/UsersPageAdmin"





function App() {

  return (

    <AuthApp/>

  )
}

function AuthApp () {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout/>}>
        <Route index element={<ProtectedRoute><Landing/></ProtectedRoute>}/>
        <Route path="/problems" element={<ProtectedRoute><Problems/></ProtectedRoute>}/>
        <Route path="/contests" element={<ProtectedRoute><Contest/></ProtectedRoute>}/>
        <Route path="/problem/:id" element={<ProtectedRoute><Problem/></ProtectedRoute>}/>
        
      </Route>
      <Route path="/login" element={<AuthUserRoute><Login/></AuthUserRoute>}/>
      <Route path="/login/failed" element={<Login/>}/>
      

      <Route path="/" element={<AdminLayout/>}>
        <Route path="/admin-dashboard" element={<DashboardPageAdmin/>}/>
        <Route path="/admin-problems" element={<ProblemsPageAdmin/>}/>
        <Route path="/admin-users" element={<UsersPageAdmin/>}/>
        <Route path="/admin-contests" element={<ContestsPageAdmin/>}/>
        <Route path="/admin-reports" element={<ReportsPageAdmin/>}/>
      </Route>

    </Routes>
  </BrowserRouter>
  )
}

export default App
