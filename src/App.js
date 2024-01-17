import react from 'react'
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Login from './components/Login';
import Studenthp from './components/students/Studenthp';
import Managerhp from './components/manager/Managerhp';
import Teacherhp from './components/teachers/Teacherhp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTeacher from './components/manager/AddTeacher';
import AddStudent from './components/manager/AddStudent';
import EditTeacher from './components/manager/EditTeacher';
import EditStudent from './components/manager/EditStudent';
import Schedule from './components/students/Schedule';
import Marks from './components/students/Marks';
import YourTeachers from './components/students/YourTeachers';
import Homeworks from './components/students/Homeworks';
import UpdateTeacher from './components/manager/UpdateTeacher';
import UpdateStudent from './components/manager/UpdateStudent';
import AddSubject from './components/manager/AddSubject';
import AddParent from './components/manager/AddParent';
import EditParent from './components/manager/EditParent';
import MarkForm from './components/teachers/setmark/MarkForm';
import AttendanceTable from './components/teachers/attendence/AttendanceTable';
import UpStudent from './components/manager/UpStudent';
import CreateQuiz from './components/teachers/Quiz/CreateQuiz';
import QuizName from './components/teachers/Quiz/QuizName';
import QuizzesTable from './components/teachers/Quiz/QuizzesTable';
import AllSubjects from './components/manager/AllSubjects';
import Quiz from './components/students/Quiz';
import AllQuizzes from './components/students/AllQuizzes';
import Logout from './components/Logout';

function App() {
 
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Cover />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Studenthp' element={<Studenthp />} />
      <Route path='/Managerhp' element={<Managerhp />} />
      <Route path='/Teacherhp' element={<Teacherhp />} />
      <Route path='/Add-teacher' element={<AddTeacher />} />
      <Route path='/Add-student' element={<AddStudent/>} />
      <Route path='/Add-parent' element={<AddParent/>} />
      <Route path='/Edit-teacher' element={<EditTeacher />} />
      <Route path='/Edit-student' element={<EditStudent />} />
      <Route path='/Edit-parent' element={<EditParent />} />
      <Route path='/schedule' element={<Schedule />} />
      <Route path='/Marks' element={<Marks />} />
      <Route path='/Teachers' element={<YourTeachers />} />
      <Route path='/Homework' element={<Homeworks />} />
      <Route path='/Update-teacher/:id' element={<UpdateTeacher />} />
      <Route path='/Update-student/:id' element={<UpStudent />} />
      <Route path='/All-subjects' element={<AllSubjects />} />
      <Route path='/Student-schedule' element={<AddSubject />}/>
      <Route path='/Set-Mark' element={<MarkForm />} />
      <Route path='/Attendance' element={<AttendanceTable />} />
      <Route path='/Create-Quiz' element={<CreateQuiz />} />
      <Route path='/Quiz-Name/:id' element={<QuizName />} />
      <Route path='/Quizzes-Table' element={<QuizzesTable />} />
      <Route path='/All-Quizzes' element={<AllQuizzes />} />
      <Route path='/Quiz/:id/:sectionid' element={<Quiz />} />
      <Route path='/Logout' element={<Logout />} />



    </Routes>
    </Router>
  );
};

export default App;
