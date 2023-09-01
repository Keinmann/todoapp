import './NotesItem.style.css';
import { ReactPropTypes } from 'react';
import dateFormat from 'dateformat';

const NotesItem = ({ note, getData }) => {

    return (
        <div className='notes-item'>
            <div className='notes-item-header'>
                <div className='notes-item-title'>
                    {note.title}
                </div>
                <div className='notes-item-button-box'>
                    <button className='notes-item-edit'>
                        <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" >
                            <path strokeWidth={1}
                                d="m23.356.09c-2.827.31-11.429,1.251-18.133,7.974h0c-1.51,1.515-2.317,3.611-2.214,5.752.083,1.729.733,3.32,1.843,4.602L.016,23.277l.709.705,4.828-4.853c.077.068.147.142.227.208,1.348,1.114,3.008,1.659,4.689,1.659,2.106,0,4.244-.855,5.838-2.521,4.249-4.437,6.877-10.604,7.601-17.839l.062-.614-.613.067Zm-7.771,17.694c-2.506,2.616-6.533,2.96-9.167.781-.056-.046-.105-.098-.159-.145l3.403-3.42h8.179c-.693.987-1.435,1.928-2.255,2.784Zm-4.928-3.784l4.956-4.981,5.36-.017c-.67,1.79-1.489,3.463-2.458,4.998h-7.858Zm10.681-5.999l-6.142.02-9.638,9.687c-.933-1.103-1.479-2.465-1.55-3.94-.089-1.86.612-3.682,1.923-4.998h0C11.957,2.727,19.624,1.529,22.846,1.153c-.282,2.423-.794,4.711-1.509,6.847Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='notes-item-content'>
                {note.content}
            </div>
            <div className='notes-item-date'>
                {dateFormat(note.date, 'dd.mm.yyyy')}
            </div>
        </div>
    );
};

NotesItem.propTypes = ReactPropTypes;

export default NotesItem;