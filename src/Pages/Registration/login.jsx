import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../components/layout/logo';
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    // regex
    const emailRE = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const passwordRE = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
        if (errors[name]) setErrors({}); // مسح الخطأ لو دخل صح
    };

    const validate = () => {
        // أول خطأ يظهر بس
        if (!formData.email.trim())
            return setErrors({ email: "Enter your email" });
        if (!emailRE.test(formData.email))
            return setErrors({ email: "Not valid email" });

        if (!formData.password)
            return setErrors({ password: "Enter your password" });
        if (!passwordRE.test(formData.password))
            return setErrors({ password: "Password must be 8 characters, include uppercase, lowercase, and number" });

        setErrors({});
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (data.success) {
                window.location.href = "/dashboard";
            } else {
                setErrors({ server: data.message || "Invalid email or password" });
            }

        } catch {
            setErrors({ server: "Server error, try again later" });
        }
    };

    return (
        <section className="login-page px-3 bg-light" style={{ minHeight: "100vh" }}>

            <Link to="/" className="text-decoration-none text-black fw-bold py-3 d-flex gap-2 align-items-center">
                <ArrowLeft className="mt-1" />
                back
            </Link>

            <section className="text-center mt-3">
                <Logo />
                <h2 className="mt-3 fw-bold">Welcome Back</h2>
                <p className="text-muted">Login to your account</p>
            </section>

            <form
                onSubmit={handleSubmit}
                className="mt-5 border border-2 shadow-lg p-5 m-auto rounded-4 bg-white"
                style={{ maxWidth: "500px" }}
            >

                {/* Email */}
                <div>
                    <label className="form-label fw-bold">Email Address</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        className={`form-control bg-light ${errors.email ? "border-danger" : ""}`}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-danger fw-bold mt-2">{errors.email}</p>}
                </div>

                {/* Password */}
                <div className="mt-4 position-relative">
                    <label className="form-label fw-bold">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        className={`form-control bg-light ${errors.password ? "border-danger" : ""}`}
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: "absolute",
                            top: "38px",
                            right: "15px",
                            cursor: "pointer"
                        }}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                    {errors.password && <p className="text-danger fw-bold mt-2">{errors.password}</p>}
                </div>

                {/* Remember */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3">
                    <div>
                        <input
                            type="checkbox"
                            name="remember"
                            checked={formData.remember}
                            onChange={handleChange}
                        />
                        <label className="form-label fw-bold ms-1">Remember me</label>
                    </div>
                    <a href="#" className="text-decoration-none fw-bold">Forgot password?</a>
                </div>

                {/* Server Error */}
                {errors.server && <p className="text-danger text-center fw-bold mt-3">{errors.server}</p>}

                {/* Submit */}
                <button type="submit" className="btn btn-primary fw-bold text-white w-100 mt-3">Login</button>

                <p className="text-muted mt-4 text-center">
                    Don’t have an account?
                    <Link to="/Signin" className="fw-bold text-decoration-none ms-1">Create Account</Link>
                </p>

            </form>

            <p className="text-center text-muted mt-4 small pb-4">By logging in, you agree to our Terms & Privacy Policy</p>

        </section>
    );
}