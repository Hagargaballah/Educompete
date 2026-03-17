import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../components/layout/logo';
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function Signin() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agree: false
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    // Regex
    const emailRE = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const phoneRE = /^\d{11}$/;
    const passwordRE = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
        // مسح الخطأ لو دخل صح
        if (errors[name]) setErrors({});
    };

    const validate = () => {
        // أول خطأ يظهر بس
        if (!formData.name.trim())
            return setErrors({ name: "Enter your name" });
        if (formData.name.trim().length < 3)
            return setErrors({ name: "Name must be at least 3 letters" });

        if (!formData.email.trim())
            return setErrors({ email: "Enter your email" });
        if (!emailRE.test(formData.email))
            return setErrors({ email: "Invalid email" });

        if (!formData.phone.trim())
            return setErrors({ phone: "Enter your phone number" });
        if (!phoneRE.test(formData.phone))
            return setErrors({ phone: "Invalid Phone Number" });

        if (!formData.password)
            return setErrors({ password: "Enter your password" });
        if (!passwordRE.test(formData.password))
            return setErrors({ password: "Password must have 1 lowercase, 1 uppercase, 1 number, min 8 chars" });

        if (!formData.confirmPassword)
            return setErrors({ confirmPassword: "Confirm your password" });
        if (formData.confirmPassword !== formData.password)
            return setErrors({ confirmPassword: "Passwords do not match" });

        if (!formData.agree)
            return setErrors({ agree: "You must agree to terms & conditions" });

        setErrors({});
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        // Payload للباك اند
        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password
        };

        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success) {
                alert("Account created successfully!");
                window.location.href = "/login";
            } else {
                setErrors({ server: data.message || "Error creating account" });
            }
        } catch {
            setErrors({ server: "Server error, try again later" });
        }
    };

    return (
        <section className="signin-page bg-light px-3 pb-4" style={{ minHeight: "100vh" }}>
            <Link to="/" className="text-decoration-none text-black fw-bold py-3 d-flex gap-2 align-items-center">
                <ArrowLeft className="mt-1" />
                back
            </Link>

            <section className="text-center mt-3">
                <Logo />
                <h2 className="mt-3 fw-bold">EduCmpete</h2>
                <p className="text-muted">Create your student account</p>
            </section>

            <form onSubmit={handleSubmit} className="mt-4 border border-2 shadow-lg bg-white p-5 pb-3 m-auto rounded-4" style={{ maxWidth: "600px" }}>

                {/* Name */}
                <div>
                    <label className="form-label fw-bold">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`form-control bg-light ${errors.name ? "border-danger" : ""}`}
                    />
                    {errors.name && <p className="text-danger mt-2 fw-bold">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="mt-4">
                    <label className="form-label fw-bold">Email Address</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`form-control bg-light ${errors.email ? "border-danger" : ""}`}
                    />
                    {errors.email && <p className="text-danger mt-2 fw-bold">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="mt-4">
                    <label className="form-label fw-bold">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className={`form-control bg-light ${errors.phone ? "border-danger" : ""}`}
                    />
                    {errors.phone && <p className="text-danger mt-2 fw-bold">{errors.phone}</p>}
                </div>

                {/* Password */}
                <div className="mt-4 position-relative">
                    <label className="form-label fw-bold">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className={`form-control bg-light ${errors.password ? "border-danger" : ""}`}
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
                    {errors.password && <p className="text-danger mt-2 fw-bold">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div className="mt-4 position-relative">
                    <label className="form-label fw-bold">Confirm Password</label>
                    <input
                        type={showConfirm ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className={`form-control bg-light ${errors.confirmPassword ? "border-danger" : ""}`}
                    />
                    <span
                        onClick={() => setShowConfirm(!showConfirm)}
                        style={{
                            position: "absolute",
                            top: "38px",
                            right: "15px",
                            cursor: "pointer"
                        }}
                    >
                        {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                    {errors.confirmPassword && <p className="text-danger mt-2 fw-bold">{errors.confirmPassword}</p>}
                </div>

                {/* Checkbox */}
                <div className="mt-4 d-flex align-items-center">
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                    />
                    <label htmlFor="agree" className="form-label fw-bold ms-2">
                        I agree to <a href="#" className="text-decoration-none">Terms & Conditions</a>
                    </label>
                </div>
                {errors.agree && <p className="text-danger mt-2 fw-bold">{errors.agree}</p>}

                {/* Server error */}
                {errors.server && <p className="text-danger mt-3 text-center">{errors.server}</p>}

                {/* Submit button */}
                <button type="submit" className="btn btn-primary w-100 mt-3">
                    Create Account
                </button>

                <p className="text-muted mt-4 text-center">
                    Already have an account? <Link to="/login" className="fw-bold text-decoration-none">Login</Link>
                </p>
            </form>

        </section>
    );
}