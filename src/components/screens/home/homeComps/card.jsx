export default function MainCard1({ closeModal1 }) {
    return (
        <>
            <div className="main__window-1">
                <div className="main__modal1">
                    <div className="main__modal-more">
                        <img src='/img/home_images/card-modal1-1.png' alt="img" />
                        <p>
                            Городской парк "Звездный" - это уютное место для отдыха и релаксации среди природы.
                            Парк насчитывает большое количество зеленых насаждений, цветочных клумб и
                            живописных аллей для прогулок. Здесь также можно найти детские площадки, спортивные
                            площадки и столики для пикника, чтобы провести время семьей или друзьями. В парке
                            также проводятся различные мероприятия и фестивали, такие как концерты под открытым
                            небом и выставки современного искусства.
                        </p>
                    </div>
                </div>
                <button onClick={closeModal1} className="main__back" id="close1">
                    x
                </button>
            </div>
        </>
    );
}

export function MainCard2({ closeModal2 }) {
    return (
        <>
            <div className="main__window-2">
                <div className="main__modal2">
                    <div className="main__modal-more">
                        <img src='/img/home_images/card-modal2-1.png' alt="img" />
                        <p>
                            Выставочный центр "Метеорит" - это уникальное место для знакомства с историей
                            Челябинска и изучения метеоритов, которые упали на эту территорию. Здесь посетители
                            могут увидеть редкие экспонаты, такие как обломки метеоритов, фотографии с места
                            падения и интерактивные дисплеи, которые рассказывают об их происхождении.
                            Выставочный центр также проводит лекции и мастер-классы для всех возрастов, чтобы
                            расширить знания о космосе и астрономии.
                        </p>
                    </div>
                </div>
                <button onClick={closeModal2} className="main__back" id="close2">
                    x
                </button>
            </div>
        </>
    );
}