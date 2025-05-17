import {Link, useLocation, useNavigate} from 'react-router-dom';
import '../component/NavBar.css';
import logo from "../assets/icons8-react-native-64.png";

const routes = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/contact", name: "Contact" }
];

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate()

    const isActive = (to: string) => {
        return to === location.pathname;
    };

    const loginPage = () =>{
        navigate("/login")

    }

    console.log('location :', location.pathname);

    return (
        <nav className="navbar">
            <img alt="React Logo" src={logo} className="logo" />

            <div className="nav-links">
                {routes.map((route, index) => (
                    <Link
                        key={index}
                        to={route.to}
                        className={`after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-400 after:transition-all after:duration-300
              ${isActive(route.to) ? `bg-black text-white` : ``}`}
                    >
                        {route.name}
                    </Link>
                ))}
            </div>

            <div className="nav-buttons">
                <a href="../pages/DashBoard.tsx">
                    <button id="dashboard">Dashboard</button>
                </a>
                <button id="login" onClick={loginPage}>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
