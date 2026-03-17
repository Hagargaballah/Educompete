import React, { useState, useEffect } from "react";
// icons
import {
    LayoutDashboard,
    Users,
    FileText,
    Trophy,
    Award,
    Settings,
    ClipboardList,
    GraduationCap,
    LogOut,
    Menu,
    X,
    Upload
} from 'lucide-react';
import { Link } from "react-router-dom";
import Logo from './../layout/logo';



export default function Sidebar({ role }) {
    const [expanded, setExpanded] = useState(false);
    const [screenSize, setScreenSize] = useState('desktop'); // 'mobile', 'tablet', 'desktop'

    const navigationItems = {
        student: [
            { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/studentDashbord" },
            { id: "team", label: "My Team", icon: Users, path: "/MyTeam" },
            { id: "submit", label: "Submit Project", icon: Upload, path: "/SubmitProject" },
            { id: "announcements", label: "Announcements", icon: ClipboardList, path: "" },
        ],
        judge: [
            { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/JudgeDashBoard" },
            { id: "projects", label: "Assigned Projects", icon: FileText, path: "" },
            { id: "rubrics", label: "Rubrics", icon: ClipboardList, path: "/Judge/RubricPreview" },
        ],
        admin: [
            { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/AdminDhashBoard" },
            { id: "teams", label: "Teams", icon: Users, path: "/Admin/TeamsManagement" },
            { id: "projects", label: "Projects", icon: FileText, path: "/Admin/projectsManagement" },
            { id: "judges", label: "Judges", icon: GraduationCap, path: "/Admin/JudgeManagement" },
            { id: "rubrics", label: "Rubrics", icon: ClipboardList, path: "/Admin/Rubrics" },
            { id: "ranking", label: "Rankings", icon: Trophy, path: "/LiveRankings" },
            { id: "certificates", label: "Certificates", icon: Award, path: "/CertificateManagement" },
            { id: "settings", label: "Settings", icon: Settings, path: "/Admin/CompetitionSetup" },
        ],
    };

    // تحديد نوع الشاشة
    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            if (w < 768) setScreenSize('mobile');
            else if (w < 992) setScreenSize('tablet');
            else setScreenSize('desktop');
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // تحديد col حسب screenSize و expanded
    let sidebarColClass = "col-lg-3 col-xl-2"; // default desktop
    if (screenSize === 'mobile') {
        sidebarColClass = expanded ? "col-7 col-lg-2" : "col-1 col-lg-2";
    } else if (screenSize === 'tablet') {
        sidebarColClass = expanded ? "col-3 col-lg-2" : "col-1 col-lg-2";
    }

    return (
        <aside
            className={`bg-white shadow-sm border min-vh-100 d-flex flex-column align-items-center align-items-lg-start px-4 position-fixed z-3 ${sidebarColClass}`}
        >
            {/* toggle */}
            {screenSize !== 'desktop' && (
                <button
                    className="btn btn-light m-2 p-1 d-md-block d-lg-none"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? <X /> : <Menu />}
                </button>
            )}

            {/* logo */}
            <div className="d-none d-lg-flex gap-2 align-items-center mt-4 border-bottom border-2 w-100 pb-3 ps-2">
                <Logo />
                <h5 className="mt-3 fw-bold">EduCompete</h5>
            </div>

            <ul className="list-unstyled mt-4 d-flex flex-column gap-3 ms-lg-4">
                {navigationItems[role]?.map((item, index) => (
                    <li key={index} className="mb-3">
                        <Link
                            className="d-flex align-items-center gap-3 text-decoration-none text-dark"
                            to={item.path}
                        >
                            <item.icon />
                            <span className={`${expanded || screenSize === 'desktop' ? "d-inline" : "d-none"} fw-bold`}>
                                {item.label}
                            </span>
                        </Link>
                    </li>
                ))}
                {/* LogoutBtn */}
                <Link to="/" className="mt-4 text-decoration-none d-flex align-items-center gap-3 text-danger border-top border-2 pt-4 fw-bold">
                    <LogOut />
                    <span className={`${expanded || screenSize === 'desktop' ? "d-inline" : "d-none"}`}>
                        Logout
                    </span>
                </Link>
            </ul>
        </aside>
    );
}