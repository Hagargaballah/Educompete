import './../../Styles/LandingPageStyle/signinBtn.css'
import { Link } from 'react-router-dom'

export default function LoginBtn() {
    return (
        <Link to ="/Login" className='text-decoration-none' >
            <button id='signin_btn' className="btn px-4 py-1 fw-bold border-2 rounded-pill">Login</button>
        </Link>
    )
}