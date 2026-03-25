import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { instructions } from "../../data/mockData";

function RulesSection() {
    return (
        <section id="rules" className="py-5 bg-light-subtle">
            <div className="container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <span className="text-primary text-uppercase fw-semibold small">
                        Guidelines
                    </span>
                    <h2 className="fw-bold mt-3 mb-3">Rules & Instructions</h2>
                </motion.div>

                {/* Card with Rules */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card shadow-sm border p-4 mx-auto w-75 rounded-5"
                >
                    {/* Card Header */}
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <div className="d-flex align-items-center justify-content-center rounded"
                            style={{ width: "40px", height: "40px", backgroundColor: "rgba(13, 110, 253, 0.1)" }}>
                            <AlertCircle className="text-primary" size={20} />
                        </div>
                        <h5 className="fw-bold mb-0">Competition Rules</h5>
                    </div>

                    {/* Rules List */}
                    <ol className="list-unstyled mt-2">
                        {instructions.map((rule, i) => (
                            <li key={i} className="d-flex mb-3">
                                <span
                                    className="d-flex align-items-center justify-content-center rounded-circle text-primary p-3 fw-semibold me-3"
                                    style={{ width: "28px", height: "28px", backgroundColor: "rgba(13, 110, 253, 0.1)" }}
                                >
                                    {i + 1}
                                </span>
                                <p className="mb-0 text-muted">{rule.title}</p>
                            </li>
                        ))}
                    </ol>
                </motion.div>

            </div>
        </section>
    );
};

export default RulesSection;