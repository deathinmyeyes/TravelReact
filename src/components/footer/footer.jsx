export default function Footer () {
    return (
        <>
            <footer class="footer" id="footer">
                <div class="container">
                    <div class="footer__wrapper">
                        <div class="footer__logo-wrapper">
                            <div class="footer__logo">
                                <img src="./img/header_images/logo.svg" alt="logo"/>
                                <p>TRAVEL.guide</p>
                            </div>
                            <div class="footer__logo-text">
                                <p>Мы специализируемся на туристических услугах и предлагаем уникальные путешествия по различным городам РФ. </p>
                            </div>
                        </div>
                        <div class="footer__navigation">
                            <div class="footer__service-list">
                                <p>Сервис</p>
                                <li>Консультация</li>
                                <li>Поддержка</li>
                                <li>Развитие</li>
                            </div>
                            <div class="footer__company-list">
                                <p>Компания</p>
                                <li>Услуги</li>
                                <li>Особенности</li>
                                <li>Блог</li>
                                <li>Обратная связь</li>
                            </div>
                        </div>
                    </div>
                    <hr color="#195581"/>
                    <div class="footer__copyright">
                        <p>Copyright <span>TRAVEL.guide</span></p>
                        <div class="footer__copyright-policy">
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