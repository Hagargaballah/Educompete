import {Upload } from "lucide-react";
import { Link } from "react-router-dom";

export default function SubmitBtn() {
    return (
        <Link to ="/SubmitProject" className='text-white text-decoration-none d-flex gap-3 align-items-center btn btn-primary fw-bold mt-2 mt-md-0'>
            <Upload size={18} />
            <span>Submit Project</span>
        </Link>
    )
}