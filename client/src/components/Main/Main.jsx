import './Main.style.css'
import Menu from '../Menu/Menu';
import { useState } from 'react';
import Plans from '../Plans/Plans'
import Notes from '../Notes/Notes';
import StarMap from '../StarMap/StarMap';



const Main = () => {
    const [showPlans, setShowPlans] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [showStarMap, setShowStarMap] = useState(false);

    return (
        <div className='main-container'>
            <Menu setShowPlans={setShowPlans} setShowNotes={setShowNotes} setShowStarMap={setShowStarMap} />
            <div className='main-content'>
                {showPlans && <Plans />}
                {showNotes && <Notes />}
                {showStarMap && <StarMap />}
            </div>
        </div>
    );
};

export default Main;