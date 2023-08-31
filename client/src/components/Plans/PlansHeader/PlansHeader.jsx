import PlansModal from '../PlansModal/PlansModal';
import { ReactPropTypes } from 'react';
import { useState } from 'react';
import './PlansHeader.style.css';

const PlansHeader = ({ getData }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='plansheader-container'>
            <p>my plans</p>
            <button className='plansheader-button' onClick={() => { setShowModal(true) }}>Add</button>
            {showModal && <PlansModal mode={'create'} setShowModal={setShowModal} getData={getData} />}
        </div >
    );
};

PlansHeader.propTypes = ReactPropTypes;

export default PlansHeader;