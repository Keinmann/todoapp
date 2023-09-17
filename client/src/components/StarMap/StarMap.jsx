import './StarMap.style.css';

import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import StarMapHeader from './StarMapHeader/StarMapHeader';
import StarMapListItem from './StarMapListItem/StarMapListItem';
import StarMapDetail from './StarMapDetail/StarMapDetail';

function StarMap() {

    const [cookies, , removeCookie] = useCookies(null);
    const [sortedStars, setSortedStars] = useState(null);
    const [targetStar, setTargetStar] = useState(null);
    const [targetShadow, setTargetShadow] = useState(null);
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
            setSortedStars(json?.sort((a, b) => new Date(b.date) - new Date(a.date)));
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

    return (
        <div className='starmap-container'>
            <StarMapHeader getData={getData} />
            <div className='starmap-content'>
                <div className='starmap-list' onWheel={scrollOnWheel}>
                    {sortedStars?.map((star, index) => <StarMapListItem key={star.id} star={star} shadow={sortedStars[index + 1]} getData={getData} setTargetStar={setTargetStar} setTargetShadow={setTargetShadow} />)}
                </div>
                <StarMapDetail star={targetStar} shadow={targetShadow} />
            </div>
        </div>
    );
}

export default StarMap;