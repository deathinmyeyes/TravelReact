import ChangeTheme from "./theme/theme";
import { Link } from "react-router-dom";


export default function Authorization() {
    return (
        <>
            <div className="header__button">
                <ChangeTheme />
                <Link to='/login'>Авторизация</Link>
            </div>
        </>
    )
}