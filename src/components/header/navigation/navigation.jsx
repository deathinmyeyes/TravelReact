import { Link } from 'react-router-dom';
import ContactBtn from './navigationBtns/contact.jsx';
import RouteBtn from './navigationBtns/route.jsx';
import HomeBtn from './navigationBtns/home.jsx';

export default function Navigation () {
    return (
        <>
            <div className="header__nav">
                <ul className="header__list">
                    <li><Link to="/main"><HomeBtn /></Link></li>
                    <li><Link to="/routes"><RouteBtn /></Link></li>
                    <li><Link to="/contact"><ContactBtn /></Link></li>
                </ul>
            </div>
        </>
    )
}