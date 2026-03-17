import Nav from './../components/Landing page components/navbar'
import HeroSection from '../components/Landing page components/hero'
import AboutSection from '../components/Landing page components/aboutSection'
import HowItWorksSection from '../components/Landing page components/HowItWorks'
import TimelineSection from '../components/Landing page components/Timeline'
import RulesSection from '../components/Landing page components/Rules'
import { useNavigate } from "react-router-dom";

export default function Landing_Page() {
// role select
    const navigate = useNavigate();
    const handleSelect = (role) => {
        localStorage.setItem("role", role);
        if (role === "student") navigate("/studentDashbord");
        if (role === "judge") navigate("/JudgeDashBoard");
        if (role === "admin") navigate("/AdminDhashBoard");
    };

    return (
        <>
            <Nav />
            <HeroSection />
            <AboutSection />
            <HowItWorksSection/>
            <TimelineSection />
            <RulesSection />
            {/* role buttons */}
            <div className="text-center mt-5">
                <h2>Select Role</h2>
                <button onClick={() => handleSelect("student")} className="btn btn-primary m-2">
                    Student
                </button>
                <button onClick={() => handleSelect("judge")} className="btn btn-success m-2">
                    Judge
                </button>
                <button onClick={() => handleSelect("admin")} className="btn btn-danger m-2">
                    Admin
                </button>
            </div>

        </>
    )
}