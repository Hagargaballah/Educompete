import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/landingPage';
import Login from './Pages/Registration/login';
import Signin from './Pages/Registration/signin';

// student
import StudentDashboard from './Pages/student/StudentDashboard';
import MyTeam from './Pages/student/MyTeam';
import SubmitProject from './Pages/student/Submit Project';

// judge
import JudgeDashBoard from './Pages/judge/JudgeDashboard';
import AssignedProject from './Pages/judge/AssignedProject';
import RubricPreview from './Pages/judge/RubricPreview';

// admin
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
      {/* main */}
      <Route path="/" element={<Landing />} />

      {/* auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />

      {/* student */}
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/my-team" element={<MyTeam />} />
      <Route path="/submit-project" element={<SubmitProject />} />

      {/* judge */}
      <Route path="/judge-dashboard" element={<JudgeDashBoard />} />
      <Route path="/judge/review/:projectId" element={<AssignedProject />} />
      <Route path="/judge/rubric-preview" element={<RubricPreview />} />

      {/* admin */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin/rubrics" element={<RubricsPage />} />
      <Route path="/live-rankings" element={<RankingsPage />} />
      <Route path="/certificate-management" element={<CertificateManagement />} />
      <Route path="/admin/teams" element={<TeamsManagement />} />
      <Route path="/admin/projects" element={<ProjectManagement />} />
      <Route path="/admin/projects/:projectId" element={<AdminProjectView />} />
      <Route path="/admin/judges" element={<JudgeManagement />} />
      <Route path="/admin/setup" element={<CompetitionSetup />} />

      {/* 🔥 fallback لازم يكون آخر حاجة */}
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}

export default App;