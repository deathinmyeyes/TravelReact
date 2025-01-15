import Logo from "./logo/logo";
import Navigation from "./navigation/navigation";
import { Link } from "react-router-dom";
import Authorization from "./auth/auth";

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