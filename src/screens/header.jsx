import Logo from "../components/header/logo/logo";
import Navigation from "../components/header/navigation/navigation";
import { Link } from "react-router-dom";
import Authorization from "../components/header/auth/auth";

export default function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/main">
                        <Logo />
                    </Link>
                    <Navigation />
                    <Authorization />
                </div>
                <hr color="#ABABAB"></hr>
            </div>
        </header>
    )
}