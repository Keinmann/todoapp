import './Notes.style.css';
import { ReactPropTypes } from 'react';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import NotesHeader from './NotesHeader/NotesHeader';
import NotesItem from './NotesItem/NotesItem';

const Notes = () => {

    const [cookies, , removeCookie] = useCookies(null);
    const [notes, setNotes] = useState(null);

    const getData = async () => {
        try {
            const authToken = cookies["AuthToken"];
            const userEmail = cookies["Email"];
            if (!userEmail || !authToken) {
                removeCookie("AuthToken");
                removeCookie("Email");
                window.location.reload();
                return;
            }
            const response = await fetch(`http://localhost:8000/notes/${userEmail}`);
            const json = await response.json();
            setNotes(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => getData, []);

    const sortedNotes = notes?.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div className='notes-container'>
            <NotesHeader getData={getData} />
            <div className='notes-content'>
                {sortedNotes?.map((note) => <NotesItem key={note.id} note={note} getData={getData} />)}
            </div>

        </div>
    );
};

Notes.propTypes = ReactPropTypes;

export default Notes;