import { motion } from "framer-motion";
import './../../Styles/Landing Page style/aboutSection.css'
import {goals} from '../../data/mockData'



function AboutSection() {
    return (
        <section id="about" className="py-5 px-2 bg-light-subtle">
            <div className="container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <span className="text-primary fw-semibold text-uppercase small">
                        About the Competition
                    </span>

                    <h2 className="fw-bold mt-3 mb-3">
                        Empowering Young Innovators
                    </h2>

                    <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                        Our competition provides a platform for students to showcase their
                        STEM projects, receive expert feedback, and compete for recognition
                        at the national level.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="row g-4">
                    {goals.map((goal, i) => {
                        const Icon = goal.icon;
                        return (
                            <div className="col-md-6 col-lg-3" key={goal.title}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="card rounded-4 h-100 border-0 shadow-sm text-center p-4 hover-card"
                                >

                                    {/* Icon */}
                                    <div className="icon-box mb-3 d-flex justify-content-center">
                                        <div className="icon-wrapper d-flex align-items-center justify-content-center">
                                            <Icon size={24} className="icon" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h5 className="fw-bold">{goal.title}</h5>

                                    {/* Description */}
                                    <p className="text-muted small">
                                        {goal.description}
                                    </p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default AboutSection;