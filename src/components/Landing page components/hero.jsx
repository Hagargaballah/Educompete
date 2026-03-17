import { motion } from "framer-motion";
import { mockCompetition } from "../../data/mockData";
import heroImg from '../../assets/images/hero_bg-removebg-preview.png'

export default function HeroSection() {

    const title = mockCompetition.name;

    return (

        <section
            style={{
                minHeight: "90vh",
                background:
                    "linear-gradient(135deg, #eef2ff, #ffffff)",
            }}
            className="d-flex align-items-center mt-5 mt-md-0 py-5 py-lg-0 "
        >

            <div className="container">

                <div className="row align-items-center">

                    {/* Image */}

                    <div className="col-lg-6 text-center">

                        <motion.img
                            src={heroImg}
                            className="img-fluid"
                            style={{ width: "550px" }}

                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        />

                    </div>

                    {/* Text */}

                    <motion.div
                        className="col-lg-6"

                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >

                        <h1
                            style={{
                                fontWeight: "700",
                                fontSize: "48px",
                                lineHeight: "1.2"
                            }}
                        >
                            {title}
                        </h1>

                        <p
                            className="mt-3 text-muted"
                            style={{ fontSize: "18px" }}
                        >
                            Showcase your creativity, build innovative projects,
                            and compete with the brightest students.
                        </p>

                        <p
                            className="fw-bold mt-3"
                            style={{
                                fontSize: "20px",
                                color: "#2563eb"
                            }}
                        >
                            Register now — Don't miss your chance to shine!
                        </p>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}