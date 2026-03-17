import Sidebar from "../../components/layout/navigation"
import { FileText, CheckCircle, Clock, BarChart3 } from "lucide-react";
import StatsCard from "../../components/ui/StatsCard";
import ReviewProgress from "../../components/judge/DashBoard/ReviewProgress";
import AssignedProjects from "../../components/judge/DashBoard/AssignedProjects";
import JudgingGuidelines from "../../components/judge/DashBoard/JudgingGuidelines";
import { mockJudges, mockProjects } from "../../data/mockData";
import '../../Styles/judge/judge.css'


export default function JudgeDashbord() {

    const currentJudge = mockJudges[0];

    const assignedProjects = mockProjects.filter(project =>
        currentJudge.assignedProjects.includes(project.id)
    );
    // total Assigned projects
    const totalAssigned = currentJudge.assignedProjects.length;
    // num of reviewed and pending projects
    const reviewed = assignedProjects.filter(p => p.status === "reviewed").length;
    const pending = assignedProjects.length - reviewed;
    // Avg. Score
    const avgScore =
        assignedProjects
            .filter(p => p.score)
            .reduce((sum, p) => sum + p.score, 0) / reviewed || 0;
    // progress
    const progress = (reviewed / totalAssigned) * 100;

    return (
        <section className="container-fluid">
            <section className="row">
                {/* Sidebar */}
                <Sidebar role="judge" />
                {/* DashBoard */}
                <section className="DashBoard col py-4 px-5 px-lg-4 ms-4 ms-md-5 ms-lg-0">
                    {/* Welcome message */}
                    <div className="mb-4">
                        <h2 className="fw-bold">
                            Welcome, {currentJudge.name}
                        </h2>
                        <p className="text-muted">
                            Review and score assigned projects
                        </p>
                    </div>
                    {/* Stats Cards */}
                    <section className="container">
                        <section className="row justify-content-evenly gap-4 gap-lg-0 mb-4">
                            <StatsCard
                                title="Assigned Projects"
                                value={totalAssigned}
                                icon={FileText}
                                class_Color="FileText"
                            />
                            <StatsCard
                                title="Reviewed"
                                value={reviewed}
                                icon={CheckCircle}
                                class_Color="CheckCircle"
                            />
                            <StatsCard
                                title="Pending"
                                value={pending}
                                icon={Clock}
                                class_Color="Clock"
                            />
                            <StatsCard
                                title="Avg. Score Given"
                                value={avgScore.toFixed(1)}
                                icon={BarChart3}
                                class_Color="BarChart3"
                            />
                        </section>
                    </section>
                    {/* Progress */}
                    <ReviewProgress
                        reviewed={reviewed}
                        total={totalAssigned}
                        progress={progress}
                    />
                    {/* Projects */}
                    <AssignedProjects projects={assignedProjects} role="judge" viewPath="/judge/review" />
                    {/* Guidelines */}
                    <JudgingGuidelines />
                </section>
            </section>
        </section>
    )
}