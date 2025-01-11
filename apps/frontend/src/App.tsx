import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Problem } from "./pages/user/Problem"
import { Login } from "./pages/user/Login"
import ProtectedRoute from "./protection/protectUser"
import { UserLayout } from "./pages/user/UserLayout"
import { LandingComp } from "./components/user/LandingComp"
import { ProblemsComp } from "./components/user/ProblemsComp"
import { ContestComp } from "./components/user/ContestCompt"
import AuthUserRoute from "./protection/authUser"





function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLayout/>}>
              <Route index element={<ProtectedRoute><LandingComp/></ProtectedRoute>}/>
              <Route path="/problems" element={<ProtectedRoute><ProblemsComp/></ProtectedRoute>}/>
              <Route path="/contests" element={<ProtectedRoute><ContestComp/></ProtectedRoute>}/>
              <Route path="/problem/:id" element={<ProtectedRoute><Problem/></ProtectedRoute>}/>
              
            </Route>
            <Route path="/login" element={<AuthUserRoute><Login/></AuthUserRoute>}/>
            <Route path="/login/failed" element={<Login/>}/>
             
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

 {/* <Route path="/" element={<ProtectedRoute><Landing/></ProtectedRoute>}/>
              <Route path="/problems" element={<ProtectedRoute><Problems/></ProtectedRoute>}/>
              <Route path="/contests" element={<ProtectedRoute><Contest/></ProtectedRoute>}/>
              <Route path="/problem/:id" element={<ProtectedRoute><Problem/></ProtectedRoute>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/login/failed" element={<Login/>}/>

              <Route path="/admin-dashboard" element={<DashboardPageAdmin/>}/>
              <Route path="/admin-problems" element={<ProblemsPageAdmin/>}/>
              <Route path="/admin-users" element={<UsersPageAdmin/>}/>
              <Route path="/admin-contests" element={<ContestsPageAdmin/>}/>
              <Route path="/admin-reports" element={<ReportsPageAdmin/>}/> */}