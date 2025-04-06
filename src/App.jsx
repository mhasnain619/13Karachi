import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveDrawer from './Components/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Profile from './Components/Profile/Profile';
import "@fontsource/montserrat";  // Defaults to weight 400
import "@fontsource/montserrat/700.css"; // Specify bold weight
import './index.css';  // Ensure global styles are applied
import ContactPage from './Pages/Contact/Contact';
import LoginPage from './Access/Login/Login';
import SignupPage from './Access/Signup/Signup';
import StudentRegistrationForm from './Pages/Students/StudentRegistration';
import DataTable from './Pages/Students/StudentList';
// import TeacherRegistrationForm from './Pages/Teachers/TeacherRegistration';
// import TeacherList from './Pages/Teachers/TeachertList';
// import SubjectRegistrationForm from './Pages/Subjects/AddSubject';
// import AddSubject from './Pages/Subjects/SubjectList';
// import SyllabusForm from './Pages/Syllabus/SyllabusForm';
// import SyllabusList from './Pages/Syllabus/SyllabusList';
// import ClassList from './Pages/Class/ClassList';
// import ClassForm from './Pages/Class/ClassForm';
// import AdmissionForm from './Pages/Admission/AdmissionForm';
// import SchoolTeacherRegistration from './Pages/School/SchoolTeacherRegistration';
// import SchoolStudentRegistration from './Pages/School/StudentRegistration';
// import FeesStructureCard from './Pages/Fees/FeesStructure';
// import FeeVoucher from './Pages/Fees/FeesVoucher';
// import FeeSubmission from './Pages/Fees/FeesSubmission';
import UserProfile from './Components/Profile/Profile';
import StudentList from './Pages/Students/StudentList';
// import SubjectList from './Pages/Subjects/SubjectList';
// import ExamScheduleCard from './Pages/Exam/ExamSchedule';
// import ExamResultCard from './Pages/Exam/ExamResult';
// import UpdateClass from './Pages/Class/UpdateClass';
// import UpdateStudent from './Pages/Students/UpdateStudent';
// import Updateteacher from './Pages/Teachers/UpdateTeacher';
// import UpdateSubject from './Pages/Subjects/UpdateSubject';
// import UpdateSyllabus from './Pages/Syllabus/UpdateSyllabus';
// import AuthRoute from './Components/ProtectedRoutes/AuthRoute';
// import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoute';

// Material UI Theme
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* Access */}

        {/* <Route element={<AuthRoute />}> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* </Route> */}

        {/* Protected Route */}

        {/* <Route element={<ProtectedRoute />}> */}

        {/* dashboard */}
        <Route path="/*" element={<ResponsiveDrawer />}>

          {/* profile */}
          <Route path="profile" element={<UserProfile />} />


          {/* student Routes */}
          <Route path="student/student-registration" element={<StudentRegistrationForm />} />
          <Route path="student/student-list" element={<StudentList />} />
          {/* <Route path="student/student-list/:id" element={<UpdateStudent />} /> */}



          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </ThemeProvider >
  );
}

export default App;
