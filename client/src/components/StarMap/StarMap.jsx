import './StarMap.style.css';

import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import StarMapHeader from './StarMapHeader/StarMapHeader';

function StarMap() {

    const [cookies, , removeCookie] = useCookies(null);
    const [stars, setStars] = useState(null);

    const getData = async () => {
        try {
            const authToken = cookies["AuthToken"];
            const userEmail = cookies["Email"];
            if (!userEmail || !authToken) {
                removeCookie("AuthToken");
                removeCookie("Email");
                window.location.reload();
                return;
            }
            const response = await fetch(`http://localhost:8000/stars/${userEmail}`);
            const json = await response.json();
            setStars(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => { getData(); });

    const sortedStars = stars?.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div className='starmap-container'>
            <StarMapHeader />
        </div>
    );
}

export default StarMap;