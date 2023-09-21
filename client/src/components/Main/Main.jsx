import './Main.style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import Menu from '../Menu/Menu';
import Plans from '../Plans/Plans'
import Notes from '../Notes/Notes';
import StarMap from '../StarMap/StarMap';
import StarImage from '../StarMap/StarImage/StarImage';

const Main = () => {
    const [cookies, , removeCookie] = useCookies(null);
    const [showPlans, setShowPlans] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [showStarMap, setShowStarMap] = useState(false);
    const [sortedStars, setSortedStars] = useState(null);

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

    return (
        <>
            <div className='main-background'>
                {sortedStars?.map((star) => <StarImage color="rgba(130,130,130,0.6)" key={star.id} star={star} width="200px" height="200px" isAtBackground={true} />)}
            </div>
            <div className='main-container'>
                <Menu setShowPlans={setShowPlans} setShowNotes={setShowNotes} setShowStarMap={setShowStarMap} />
                <div className='main-content'>
                    {showPlans && <Plans />}
                    {showNotes && <Notes />}
                    {showStarMap && <StarMap sortedStars={sortedStars} getData={getData} />}
                </div>
            </div>
        </>

    );
};

export default Main;