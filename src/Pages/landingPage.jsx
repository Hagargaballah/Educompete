import Nav from './../components/LandingPageCmponents/navbar'
import HeroSection from '../components/LandingPageCmponents/hero'
import AboutSection from '../components/LandingPageCmponents/aboutSection'
import HowItWorksSection from '../components/LandingPageCmponents/HowItWorks'
import TimelineSection from '../components/LandingPageCmponents/Timeline'
import RulesSection from '../components/LandingPageCmponents/Rules'
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