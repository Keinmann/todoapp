import './NotesHeader.style.css';
import { ReactPropTypes } from "react";

const NotesHeader = () => {
    return (
        <div className='notes-header'>
            <p>
                MY NOTES
            </p>
            <button>
                ADD
            </button>
        </div>
    );
};

NotesHeader.propTypes = ReactPropTypes;

export default NotesHeader;