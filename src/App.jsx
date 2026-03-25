import './App.css'
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/landingPage'; // landing page
import Login from './Pages/Registration/login'; // login page
import Signin from './Pages/Registration/signin'; // singin page
// student
import StudentDashboard from './Pages/student/StudentDashboard'
import MyTeam from './Pages/student/MyTeam';
import SubmitProject from './Pages/student/Submit Project';
// judge
import JudgeDashBoard from './Pages/judge/JudgeDashboard';
import AssignedProject from './Pages/judge/AssignedProject';
import RubricPreview from './Pages/judge/RubricPreview';
// Admin
import AdminDashboard from './Pages/Admin/AdminDashboard';
import RubricsPage from './Pages/Admin/RubricsPage';
import RankingsPage from './Pages/Admin/RankingsPage';
import CertificateManagement from './Pages/Admin/CertificateManagement';
import TeamsManagement from './Pages/Admin/TeamsManagement';
import ProjectManagement from "./Pages/Admin/ProjectManagement";
import AdminProjectView from "./Pages/Admin/AdminProjectView";
import JudgeManagement from './Pages/Admin/JudgeManagement';
import CompetitionSetup from './Pages/Admin/CompetitionSetup';


function App() {
  

  return (
    <Routes>
      {/* student */}
      <Route path="/" element={<Landing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/studentDashbord" element={<StudentDashboard />} />
      <Route path="/MyTeam" element={<MyTeam />} />
      <Route path="/SubmitProject" element={<SubmitProject />} />
      {/* judge */}
      <Route path="/JudgeDashBoard" element={<JudgeDashBoard />} />
      <Route path="/judge/review/:projectId" element={<AssignedProject />} />
      <Route path="/Judge/RubricPreview" element={<RubricPreview />} />
      {/* Admin */}
      <Route path="/AdminDhashBoard" element={<AdminDashboard />} />
      <Route path="/Admin/Rubrics" element={<RubricsPage />} />
      <Route path="/LiveRankings" element={<RankingsPage />} />
      <Route path="/CertificateManagement" element={<CertificateManagement />} />
      <Route path="/Admin/TeamsManagement" element={<TeamsManagement />} />
      <Route path="/Admin/projectsManagement" element={<ProjectManagement />} />
      <Route path="/admin/projects/:projectId" element={<AdminProjectView />} />
      <Route path="/Admin/JudgeManagement" element={<JudgeManagement />} />
      <Route path="/Admin/CompetitionSetup" element={<CompetitionSetup />} />
    </Routes>
  )
}

export default App
