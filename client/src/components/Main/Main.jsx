import './Main.style.css'
import Menu from '../Menu/Menu';
import { useState } from 'react';
import Plans from '../Plans/Plans'



const Main = () => {
    const [showPlans, setShowPlans] = useState(false);
    const [showDreams, setShowDreams] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [showStarMap, setShowStarMap] = useState(false);

    return (
        <div className='main-container'>
            <Menu setShowPlans={setShowPlans} setShowDreams={setShowDreams} setShowNotes={setShowNotes} setShowStarMap={setShowStarMap} />
            <div className='main-content'>
                {showPlans && <Plans />}
                {showDreams && <>Dreams</>}
                {showNotes && <>Notes</>}
                {showStarMap && <>StarMap</>}
            </div>
        </div>
    );
};

export default Main;