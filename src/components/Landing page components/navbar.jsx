import LoginBtn from './Login_Btn.jsx'
import Signin_Btn from './signin_Btn.jsx'


export default function Nav() {
    return (
        <nav className="bg-white shadow-lg py-3 px-5 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
                <a href="#">
                    <img className="img-fluid w-75" src="src\assets\images\Logo.png" alt="logo" />
                </a>
                <h1 className="mt-3 fw-bold fs-4">EduCompete</h1>
            </div>
            <div className='gap-4 align-items-center mt-3 d-none d-sm-flex'>
                <LoginBtn/>
                <Signin_Btn/>
            </div>
        </nav>
    )
}