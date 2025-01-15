import ChangeTheme from "./theme/theme";
import RegisterModal from "./authorization/register";
import LoginModal from "./authorization/login";


export default function Authorization() {
    return (
        <>
            <div className="header__button">
                <ChangeTheme />
            </div>
            <LoginModal />
            <RegisterModal />
        </>
    )
}