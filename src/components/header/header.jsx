import Logo from "./logo/logo";
import Navigation from "./navigation/navigation";
import Authorization from "./auth/auth";
import { Link } from "react-router-dom";

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