import './NotesItem.style.css';
import { ReactPropTypes, useState } from 'react';
import dateFormat from 'dateformat';

import NotesModal from '../NotesModal/NotesModal';

const NotesItem = ({ note, getData }) => {

    const [showModal, setShowModal] = useState(null);

    const deleteItem = async () => {
        try {
            const response = await fetch(`http://localhost:8000/notes/${note.id}`, {
                method: "DELETE"
            });
            const json = await response.json();
            if (json.status === 200) {
                await getData();
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='notes-item'>
            <div className='notes-item-title'>
                {note.title}
            </div>

            <div className='notes-item-content'>
                {note.content}
            </div>
            <div className='notes-item-footer'>
                <p className='notes-item-date'>
                    {dateFormat(note.date, 'dd.mm.yyyy hh:MM')}
                </p>
                <div className='notes-item-button-box'>
                    <button className='notes-item-edit' onClick={() => { setShowModal(true) }}>
                        <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" >
                            <path strokeWidth="1px"
                                d="m23.356.09c-2.827.31-11.429,1.251-18.133,7.974h0c-1.51,1.515-2.317,3.611-2.214,5.752.083,1.729.733,3.32,1.843,4.602L.016,23.277l.709.705,4.828-4.853c.077.068.147.142.227.208,1.348,1.114,3.008,1.659,4.689,1.659,2.106,0,4.244-.855,5.838-2.521,4.249-4.437,6.877-10.604,7.601-17.839l.062-.614-.613.067Zm-7.771,17.694c-2.506,2.616-6.533,2.96-9.167.781-.056-.046-.105-.098-.159-.145l3.403-3.42h8.179c-.693.987-1.435,1.928-2.255,2.784Zm-4.928-3.784l4.956-4.981,5.36-.017c-.67,1.79-1.489,3.463-2.458,4.998h-7.858Zm10.681-5.999l-6.142.02-9.638,9.687c-.933-1.103-1.479-2.465-1.55-3.94-.089-1.86.612-3.682,1.923-4.998h0C11.957,2.727,19.624,1.529,22.846,1.153c-.282,2.423-.794,4.711-1.509,6.847Z" />
                        </svg>
                    </button>
                    <button className='notes-item-delete' onClick={deleteItem}>
                        <svg viewBox="0 0 16 16" strokeWidth=".1px">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </button>
                </div>
            </div>
            {showModal && <NotesModal mode={'edit'} setShowModal={setShowModal} getData={getData} note={note} />}
        </div >
    );
};

NotesItem.propTypes = ReactPropTypes;

export default NotesItem;