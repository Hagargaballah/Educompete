import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { timeline } from "./../../data/mockData";

function TimelineSection() {

    // function to pick icon and color based on status
    const getIconProps = (status) => {
        switch (status) {
            case "completed":
                return { icon: CheckCircle, color: "bg-success", iconColor: "text-white" };
            case "upcoming":
                return { icon: Calendar, color: "bg-primary", iconColor: "text-white" };
            default:
                return { icon: Clock, color: "bg-secondary", iconColor: "text-white" };
        }
    };

    return (
        <section id="timeline" className="py-5 bg-light">
            <div className="container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <span className="text-secondary text-uppercase fw-semibold small">Schedule</span>
                    <h2 className="fw-bold mt-3 mb-3">Competition Timeline</h2>
                </motion.div>

                {/* Timeline Items */}
                <div className="d-flex flex-column align-items-start mx-auto" style={{ maxWidth: "600px" }}>
                    {timeline.map((item, i) => {
                        const { icon: Icon, color, iconColor } = getIconProps(item.status);
                        return (
                            <motion.div
                                key={item.event}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.20 }}
                                className="d-flex gap-3 mb-4 position-relative"
                            >
                                {/* Icon + line */}
                                <div className="d-flex flex-column align-items-center">
                                    <div className={`d-flex align-items-center justify-content-center rounded-circle ${color}`} style={{ width: "50px", height: "50px" }}>
                                        <Icon size={24} className={iconColor} />
                                    </div>
                                    {i < timeline.length - 1 && <div className="bg-secondary mt-2" style={{ width: "2px", flexGrow: 1 }} />}
                                </div>

                                {/* Text */}
                                <div>
                                    <span className="text-primary small fw-semibold">
                                        {new Date(item.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                                    </span>
                                    <h5 className="fw-bold mt-1">{item.event}</h5>
                                    <p className="text-muted small mb-0">{item.status === "completed" ? "Completed" : "Upcoming"}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;