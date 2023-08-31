import { ReactPropTypes } from 'react';
import './Menu.style.css';
import { useCookies } from 'react-cookie';

Menu.propTypes = ReactPropTypes;

function Menu({ setShowPlans, setShowNotes, setShowStarMap }) {

    const [cookie, , removeCookie] = useCookies(null);

    const resetContent = () => {
        if (cookie["Email"] === '' || cookie["AuthToken"] === '') {
            window.location.reaload();
        }
        setShowPlans(false);
        setShowNotes(false);
        setShowStarMap(false);
    };

    const logOut = () => {
        removeCookie('Email');
        removeCookie('AuthToken');
        window.location.reload();
    };

    return (
        <div className='menu-container'>
            <div className='menu-logo'>
                {cookie["Email"]}
            </div>
            <div className='menu-button-box'>
                <button className='menu-option' onClick={() => { resetContent(); setShowPlans(true); }}>
                    plans
                </button>
                <button className='menu-option' onClick={() => { resetContent(); setShowNotes(true); }}>
                    notes
                </button>
                <button className='menu-option' onClick={() => { resetContent(); setShowStarMap(true); }}>
                    star map
                </button>

            </div>
            <div className='menu-button-box'>
                <button className='menu-option logout' onClick={logOut}>
                    Log out
                </button>
            </div>

        </div>
    );
}



export default Menu;