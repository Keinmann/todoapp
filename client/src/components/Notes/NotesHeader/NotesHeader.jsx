import './NotesHeader.style.css';
import { ReactPropTypes } from "react";
import { useState } from 'react';
import NotesModal from '../NotesModal/NotesModal';


const NotesHeader = ({ getData }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className='notesheader-container'>
            <p>MY NOTES</p>
            <button className='notesheader-button' onClick={() => { setShowModal(true) }}>
                ADD
            </button>
            {showModal && <NotesModal mode={'create'} setShowModal={setShowModal} getData={getData} />}
        </div>
    );
};

NotesHeader.propTypes = ReactPropTypes;

export default NotesHeader;