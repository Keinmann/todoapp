import './NotesModal.style.css';
import { ReactPropTypes } from 'react';
import { useCookies } from 'react-cookie';
import { useState } from 'react';

const NotesModal = ({ mode, setShowModal, getData, note }) => {

    const editMode = mode === "edit" ? true : false;
    const [cookies, ,] = useCookies(null);
    const [data, setData] = useState({
        user_email: editMode ? note.user_email : cookies["Email"],
        title: editMode ? note.title : "",
        content: editMode ? note.content : '',
        date: editMode ? note.date.replace('T', ' ').replace('Z', '') : new Date().toJSON().replace('T', ' ').replace('Z', '')
    });

    async function postData(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/notes', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.status === 200) {
                getData();
                setShowModal(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function putData(e) {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/notes/${note.id}`, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.status === 200) {
                setShowModal(false);
                getData();
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (obj) => {
        const { name, value } = obj.target;

        setData(data => ({
            ...data,
            [name]: value
        }));
    };

    return (
        <div className="overlay">
            <div className="modal">
                <div className="form-title-container">
                    <h3>Let's {mode} your note</h3>
                    <button onClick={() => { setShowModal(false) }}>x</button>
                </div>
                <form action="">
                    <input
                        className='modal-input'
                        required
                        maxLength={30}
                        placeholder="Your note goes here"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                    />
                    <br />
                    <textarea
                        wrap='soft'
                        maxLength={300}
                        required
                        name="content"
                        className="modal-input description"
                        value={data.content}
                        onChange={handleChange}
                    >

                    </textarea>
                    <input type="submit" className="input-submit" onClick={editMode ? putData : postData} />
                </form>
            </div>
        </div>
    );
};

NotesModal.propTypes = ReactPropTypes;

export default NotesModal;