import './StarMap.style.css';

import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import StarMapHeader from './StarMapHeader/StarMapHeader';
import StarMapListItem from './StarMapListItem/StarMapListItem';

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

    useEffect(() => getData, []);

    const scrollOnWheel = (event) => {
        event.currentTarget.scrollBy({
            left: event.deltaY * 1.5,
            behavior: "smooth"
        });
    };

    const sortedStars = stars?.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className='starmap-container'>
            <StarMapHeader getData={getData} />
            <div className='starmap-content'>
                <div className='starmap-list' onWheel={scrollOnWheel}>
                    {sortedStars?.map((star, index) => <StarMapListItem key={star.id} star={star} shadow={sortedStars[index + 1]} getData={getData} />)}
                </div>
            </div>
        </div>
    );
}

export default StarMap;