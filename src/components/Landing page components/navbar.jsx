import SigninBtn from './SigninBtn.jsx'
import LoginBtn from './LoginBtn.jsx'
import Logo from './../layout/logo.jsx'


export default function Nav() {
    return (
        <nav
            class="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100 fixed-top"
        >
            <div class="container align-items-center">
                <a class="navbar-brand d-flex align-items-center gap-3" href="#">
                    <Logo />
                    <h5 className='fw-bold mt-2'>EduCompete</h5>
                </a>
                <button
                    class="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav m-auto mt-2 mt-lg-0 gap-4">
                        <li class="nav-item">
                            <a class="nav-link fw-semibold active" href="#home" aria-current="page"
                            >Home
                                <span class="visually-hidden">(current)</span></a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-semibold" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-semibold" href="#how-it-works">How It Works</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-semibold" href="#timeline">Timeline</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-semibold" href="#rules">Rules</a>
                        </li>
                    </ul>
                    <div className='mt-3 mt-lg-0 d-flex flex-column flex-lg-row gap-4'>
                        <LoginBtn />
                        <SigninBtn />
                    </div>
                </div>
            </div>
        </nav>
    )
}