import './Main.style.css'
import Menu from '../Menu/Menu';
import { useState } from 'react';
import Plans from '../Plans/Plans'



const Main = () => {
    const [showPlans, setShowPlans] = useState(false);

    return (
        <div className='main-container'>
            <Menu setShowPlans={setShowPlans} />
            <div className='main-content'>
                {showPlans && <Plans />}
            </div>
        </div>
    );
};

export default Main;