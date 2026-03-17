import Sidebar from "../../components/layout/navigation"
import StatsCard from "../../components/ui/StatsCard";
import SubmissionTrendChart from "../../components/Admin/Dashboard/SubmissionTrendChart";
import CategoryPieChart from "../../components/Admin/Dashboard/CategoryPieChart";
import RecentActivity from "../../components/Admin/Dashboard/RecentActivity";
import Announcements from "../../components/Admin/Dashboard/Announcements";
import TeamStatus from "../../components/Admin/Dashboard/TeamStatus";
import {
    Users,
    FileText,
    GraduationCap,
    Clock
} from "lucide-react";
import {
    getDashboardStats,
    submissionTrend,
    categoryDistribution,
    recentActivities,
    mockAnnouncements
} from "../../data/mockData";
import '../../Styles/Admin/Admin.css'



export default function AdminDashboard() {

    const stats = getDashboardStats();

    return (
        <section className="container-fluid">
            <section className="row">
                {/* Sidebar */}
                <Sidebar role="admin" />
                {/* DashBoard */}
                <section className="DashBoard col py-4 px-5 px-lg-4 ms-4 ms-md-5 ms-lg-0 bg-light">
                    <div className="container py-4">

                        <h2 className="mb-1 fw-bold">Admin Dashboard</h2>
                        <p className="text-muted mb-4">
                            Welcome back! Here's what's happening with your competition.
                        </p>

                        {/* stats */}
                        <div className="row justify-content-evenly gap-4 gap-lg-0 mb-5">
                            <StatsCard
                                title="Total Teams"
                                value={stats.totalTeams}
                                icon={Users}
                                class_Color="Users"
                            />
                            <StatsCard
                                title="Submitted Projects"
                                value={stats.submittedProjects}
                                icon={FileText}
                                class_Color="FileText"
                            />
                            <StatsCard
                                title="Active Judges"
                                value={stats.totalJudges}
                                icon={GraduationCap}
                                class_Color="GraduationCap"
                            />
                            <StatsCard
                                title="Pending Reviews"
                                value={stats.submittedProjects - stats.reviewsCompleted}
                                icon={Clock}
                                class_Color="Clock"
                            />
                        </div>

                        {/* charts */}
                        <div className="row g-3 mb-4">
                            <div className="col-lg-6">
                                <SubmissionTrendChart data={submissionTrend} />
                            </div>
                            <div className="col-lg-6">
                                <CategoryPieChart data={categoryDistribution} />
                            </div>
                        </div>

                        {/* activity */}
                        <div className="row g-3 mb-4">
                            <div className="col-lg-8">
                                <RecentActivity activities={recentActivities} />
                            </div>
                            <div className="col-lg-4">
                                <Announcements announcements={mockAnnouncements} />
                            </div>
                        </div>

                        {/* team status */}
                        <TeamStatus stats={stats} />

                    </div>
                </section>
            </section>
        </section>
    )
}