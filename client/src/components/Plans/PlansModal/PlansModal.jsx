
import { useState } from 'react';
import { ReactPropTypes } from 'react';
import { useCookies } from 'react-cookie';

const PlansModal = ({ mode, setShowModal, getData, plan }) => {
    const editMode = mode === "edit" ? true : false;
    const [cookies, ,] = useCookies(null);
    const [data, setData] = useState({
        user_email: editMode ? plan.user_email : cookies["Email"],
        title: editMode ? plan.title : "",
        progress: editMode ? plan.progress : 0,
        date: editMode ? plan.date : new Date().toJSON()
    });

    async function postData(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/plans', {
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
            const response = await fetch(`http://localhost:8000/plans/${plan.id}`, {
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
                    <h3>Let's {mode} your plan</h3>
                    <button onClick={() => { setShowModal(false) }}>x</button>
                </div>
                <form action="">
                    <input
                        className='modal-input'
                        required
                        maxLength={60}
                        placeholder="Your plan goes here"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                    />
                    <br />
                    <label>Drag to select your current progress</label>
                    <input
                        className='modal-input input-range'
                        required
                        type="range"
                        id="range"
                        min={0}
                        max={100}
                        name="progress"
                        value={data.progress}
                        onChange={handleChange} />
                    <input type="submit" className="input-submit" onClick={editMode ? putData : postData} />
                </form>
            </div>
        </div>
    );
}

PlansModal.propTypes = ReactPropTypes;

export default PlansModal;