import './MainMenu.style.css';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

const MainMenu = () => {

    const [cookies, setCookie] = useCookies(null);

    return (
        <div className='mainmenu-container'>
            {cookies["AuthToken"] && <>authorized!<br />{cookies['Email']}</>}
        </div>
    );

}

export default MainMenu;