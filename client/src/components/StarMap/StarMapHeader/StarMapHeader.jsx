import './StarMapHeader.style.css';
import { useState } from 'react';
import StarMapModal from '../StarMapModal/StarMapModal';
import { ReactPropTypes } from 'react';

function StarMapHeader({ getData }) {
    const [showModal, setShowModal] = useState(null);

    return (
        <div className='starmapheader-container'>
            <p>STARMAP</p>
            <button className='starmapheader-button' onClick={() => { setShowModal(true) }}>
                ADD
            </button>
            {showModal && <StarMapModal getData={getData} setShowModal={setShowModal} />}
        </div>
    );
}

StarMapHeader.propTypes = ReactPropTypes;

export default StarMapHeader;