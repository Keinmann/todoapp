import './PlansModal.style.css';
import { useState } from 'react';
import { ReactPropTypes } from 'react';

const PlansModal = ({ mode, setShowModal, getData, plan }) => {

    const editMode = mode === "edit" ? true : false;

    const [data, setData] = useState({
        user_email: editMode ? plan.user_email : 'keinmann@mail.ru',
        title: editMode ? plan.title : "",
        progress: editMode ? plan.progress : 0,
        date: editMode ? plan.date.replace('T', ' ').replace('Z', '') : new Date().toJSON().replace('T', ' ').replace('Z', '')
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
                console.log("created");
                setShowModal(false);
                getData();
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
                        required
                        maxLength={30}
                        placeholder="Your plan goes here"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="">Drag to select your current progress</label>
                    <input
                        required
                        type="range"
                        id="range"
                        min={0}
                        max={100}
                        name="progress"
                        value={data.progress}
                        onChange={handleChange} />
                    <input type="submit" className={mode} onClick={editMode ? putData : postData} />
                </form>
            </div>
        </div>
    );
}

PlansModal.propTypes = ReactPropTypes;

export default PlansModal;