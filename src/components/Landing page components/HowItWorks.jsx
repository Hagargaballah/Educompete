import { motion } from "framer-motion";
import {steps} from '../../data/mockData'
import './../../Styles/Landing Page style/HowItWorks.css'



function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-5 bg-light">
            <div className="container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <span className="text-secondary text-uppercase fw-semibold small">
                        Process
                    </span>

                    <h2 className="fw-bold mt-3 mb-3">
                        How It Works
                    </h2>

                    <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                        A simple four-step process from registration to recognition.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="row g-4 text-center position-relative">
                    {steps.map((s, i) => {
                        const Icon = s.icon;

                        return (
                            <div key={s.step} className="col-md-6 col-lg-3 position-relative">

                                {/* Line (Desktop only) */}
                                {i < steps.length - 1 && (
                                    <div className="step-line d-none d-lg-block"></div>
                                )}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                >
                                    {/* Icon Box */}
                                    <div className="step-icon rounded-4 d-flex align-items-center justify-content-center mx-auto mb-3 position-relative">
                                        <Icon size={36} className="text-white" />

                                        {/* Step Number */}
                                        <span className="step-badge bg-warning position-absolute fw-bold rounded-circle d-flex align-items-center justify-content-center">
                                            {s.step}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h5 className="fw-bold">{s.title}</h5>

                                    {/* Description */}
                                    <p className="text-muted small mx-auto" style={{ maxWidth: "250px" }}>
                                        {s.description}
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

export default HowItWorksSection;