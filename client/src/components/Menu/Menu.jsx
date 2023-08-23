import PropTypes from 'prop-types';
import './Menu.style.css';
import { useCookies } from 'react-cookie';
// setShowPlans={setShowPlans} showDreams={setShowDreams} setShowNotes={setShowNotes} setShowStarMap={setShowStarMap}
Menu.propTypes = {
    setShowPlans: PropTypes.func,
    setShowDreams: PropTypes.func,
    setShowNotes: PropTypes.func,
    setShowStarMap: PropTypes.func
};

function Menu({ setShowPlans, setShowDreams, setShowNotes, setShowStarMap }) {

    const [, , removeCookie] = useCookies(null);

    const resetContent = () => {
        setShowPlans(false);
        setShowDreams(false);
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
                logo
            </div>
            <div className='menu-button-box'>
                <button className='menu-option' onClick={() => { resetContent(); setShowPlans(true); }}>
                    plans
                </button>
                <button className='menu-option' onClick={() => { resetContent(); setShowDreams(true); }}>
                    dreams
                </button>
                <button className='menu-option' onClick={() => { resetContent(); setShowNotes(true); }}>
                    notes
                </button>
                <button className='menu-option' onClick={() => { resetContent(); setShowStarMap(true); }}>
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