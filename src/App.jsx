import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import "tailwindcss";
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Details from './components/Dashboard/Details';
import StudentList from './components/Dashboard/Student/StudentList';
import AddStudent from './components/Dashboard/Student/AddStudent';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Navigate to ="/admin-dashboard" />}></Route>
      <Route path='/login' element = {<Login/>}></Route>
      <Route path='/admin-dashboard' element = {<AdminDashboard/>
    }>
      <Route index element={<Details/>}></Route>
      <Route path='/admin-dashboard/courses' element={<Details/>}></Route>

      <Route path='/admin-dashboard/students' element={<StudentList/>}></Route>
      <Route path='/admin-dashboard/addstudent' element={<AddStudent />}></Route>
      </Route>
      </Routes></BrowserRouter>
  )
}

export default App
