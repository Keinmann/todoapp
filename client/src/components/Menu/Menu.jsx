import './Menu.style.css';
import { useCookies } from 'react-cookie';

const Menu = () => {

    const [cookies, setCookie, removeCookie] = useCookies(null);

    const logOut = () => {
        removeCookie('Email');
        removeCookie('AuthToken');
        window.location.reload();
    };

    return (
        <div className='menu-container'>
            <div className='menu-logo'>

            </div>
            <div className='menu-button-box'>
                <button className='menu-option'>
                    plans
                </button>
                <button className='menu-option'>
                    dreams
                </button>
                <button className='menu-option'>
                    notes
                </button>
                <button className='menu-option'>
                    star map
                </button>

            </div>
            <div className='menu-button-box'>
                <button className='menu-option logout' onClick={logOut}>Log out</button>
            </div>

        </div>
    );
}

export default Menu;