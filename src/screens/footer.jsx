export default function Footer () {
    return (
        <>
            <footer className="footer" id="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__logo-wrapper">
                            <div className="footer__logo">
                                <img src="./img/header_images/logo.svg" alt="logo"/>
                                <p>TRAVEL.guide</p>
                            </div>
                            <div className="footer__logo-text">
                                <p>Мы специализируемся на туристических услугах и предлагаем уникальные путешествия по различным городам РФ. </p>
                            </div>
                        </div>
                        <div className="footer__navigation">
                            <div className="footer__service-list">
                                <p>Сервис</p>
                                <li>Консультация</li>
                                <li>Поддержка</li>
                                <li>Развитие</li>
                            </div>
                            <div className="footer__company-list">
                                <p>Компания</p>
                                <li>Услуги</li>
                                <li>Особенности</li>
                                <li>Блог</li>
                                <li>Обратная связь</li>
                            </div>
                        </div>
                    </div>
                    <hr color="#195581"/>
                    <div className="footer__copyright">
                        <p>Copyright <span>TRAVEL.guide</span></p>
                        <div className="footer__copyright-policy">
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                            <p>Cookies</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}