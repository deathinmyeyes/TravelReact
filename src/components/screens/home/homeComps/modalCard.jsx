import { useState } from 'react';
import MainCard1, {MainCard2} from './card';

export default function MainModalsCard() {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  const openModal1 = () => setIsModal1Open(true);
  const openModal2 = () => setIsModal2Open(true);

  const closeModal1 = () => setIsModal1Open(false);
  const closeModal2 = () => setIsModal2Open(false);


  return (
    <>
      <div className="main__card-block">
        <div className="main__card-1">
          <div className="main__card-1_text">
            <h2>Городской парк "Звездный"</h2>
            <p>
              Оазис зелени и спокойствия в центре города, где можно отдохнуть от городской суеты,
              прогуляться по ухоженным аллеям, посмотреть научно-популярные выставки и поучаствовать
              в экскурсиях по звездному небу.
            </p>
            <button onClick={openModal1} id="openModal1">
              Узнать подробнее
            </button>
          </div>
          <img src='/img/home_images/card1.png' alt="img" />
        </div>
        <div className="main__card-2">
          <img src='/img/home_images/card2.png' alt="img" />
          <div className="main__card-2_text">
            <h2>Выставочный центр "Метеорит"</h2>
            <p>
              Уникальное место, посвященное метеориту, упавшему на территорию Челябинска в 2013 году.
              Здесь можно узнать об истории столкновения, посмотреть экспозиции и узнать об
              интересных фактах.
            </p>
            <button onClick={openModal2} id="openModal2">
              Узнать подробнее
            </button>
          </div>
        </div>
      </div>

      <div className={`main__modals ${isModal1Open ? 'active' : ''}`}>
        <MainCard1 closeModal1={closeModal1}/>
      </div>

      <div className={`main__modals ${isModal2Open ? 'active' : ''}`}>
        <MainCard2 closeModal2={closeModal2} />
      </div>
    </>
  );
}