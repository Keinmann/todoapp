import './StarMapHeader.style.css';
import { useState } from 'react';
import StarMapModal from '../StarMapModal/StarMapModal';

function StarMapHeader() {
    const [showModal, setShowModal] = useState(null);

    return (

        <>
            {showModal && <StarMapModal />}
        </>

    );
}

export default StarMapHeader;