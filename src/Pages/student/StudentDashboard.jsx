import './../../Styles/student/student.css'
import { Clock, Upload, Users, Award, CheckCircle } from 'lucide-react';
import Sidebar from "./../../components/layout/navigation";
import StatsCard from './../../components/ui/StatsCard.jsx'
import ProjectStatus from './../../components/student/Project Status.jsx'
import Timeline from '../../components/student/time line.jsx';
import TeamInfo from '../../components/student/Team Info.jsx';
import { mockTeams, mockProjects, requiredFiles, timeline, mockCompetition } from './../../data/mockData.js';

const today = new Date();
const endDate = new Date(mockCompetition.endDate);

const diffTime = endDate - today;
const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


export default function StudentDashboard() {
    // Simulate logged-in team
    const currentTeam = mockTeams[0];
    const currentProject = mockProjects.find((p) => p.teamId === currentTeam.id);


    return (
        <section className="container-fluid">
            <section className="row">
                {/* Sidebar */}
                <Sidebar role="student" />
                {/* DashBoard */}
                <section className="DashBoard col py-4 px-5 ms-4">
                    {/* Welcome message */}
                    <div className='ms-md-4 d-flex justify-content-between align-items-center'>
                        <div>
                            <h2>Welcome back, {currentTeam.name}!</h2>
                            <p className='text-muted'>Track your competition progress and submissions</p>
                        </div>
                        <div className='badge text-success'>
                            <CheckCircle size={20} />
                            <span className='ms-2'>Team {currentTeam.status}</span>
                        </div>
                    </div>
                    {/* Stats Cards */}
                    <section className='container mt-5'>
                        <section className='row justify-content-evenly gap-4 gap-lg-0'>
                            <StatsCard title="Team Members" value={currentTeam.members.length} icon={Users} class_Color="users" />
                            <StatsCard title="Files Uploaded" value={currentProject?.files.length || 0} icon={Upload} class_Color="Upload" />
                            <StatsCard timeClass="fs-5" title="Days Remaining" value={daysRemaining > 0
                                ? `${daysRemaining} Days Remaining`
                                : "Deadline Passed"} icon={Clock} class_Color="Clock" />
                            <StatsCard title="Current Rank" value={currentTeam.rank ? `#${currentTeam.rank}` : 'N/A'} icon={Award} class_Color="Award" />
                        </section>
                    </section>
                    {/* Project Status , time line */}
                    <section className='container ms-lg-3'>
                        <section className='row'>
                            {/* Project Status */}
                            <div className='col-12 col-lg-8'>
                                <ProjectStatus project={currentProject} requiredFiles={requiredFiles} />
                            </div>
                            {/* Project time line , team information */}
                            <div className="col-12 col-lg-4">
                                <Timeline timeline={timeline} />
                                <TeamInfo school={currentTeam.school} grade={currentTeam.grade} supervisor={currentTeam.supervisor} members={currentTeam.members} />
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}