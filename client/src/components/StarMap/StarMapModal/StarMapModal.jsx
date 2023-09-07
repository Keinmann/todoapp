import './StarMapModal.style.css';
import { ReactPropTypes } from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

function StarMapModal({ setShowModal, getData }) {
    const [cookies, ,] = useCookies(null);

    const [data, setData] = useState({
        user_email: cookies["Email"],
        family: 0,
        job: 0,
        implementation: 0,
        study: 0,
        money: 0,
        soul: 0,
        hobby: 0,
        rest: 0,
        image: 0,
        health: 0,
        help: 0,
        friends: 0,
        date: new Date().toJSON().replace('T', ' ').replace('Z', '')
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
                    <h3>Let's create a star</h3>
                    <button onClick={() => { setShowModal(false) }}>x</button>
                </div>
                <form action="">

                    <label>Drag to select your current progress</label>
                    <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                        name="family"
                        value={data.family}
                        onChange={handleChange} />
                    <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                        name="job"
                        value={data.job}
                        onChange={handleChange} />
                    <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                        name="implementation"
                        value={data.implementation}
                        onChange={handleChange} />
                    <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                        name="study"
                        value={data.study}
                        onChange={handleChange} />
                    <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                        name="money"
                        value={data.money}
                        onChange={handleChange} />
                    <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                        name="soul"
                        value={data.soul}
                        onChange={handleChange} />
                    <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                        name="hobby"
                        value={data.hobby}
                        onChange={handleChange} />
                    <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                        name="rest"
                        value={data.rest}
                        onChange={handleChange} />
                    <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                        name="image"
                        value={data.image}
                        onChange={handleChange} />
                    <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                        name="health"
                        value={data.health}
                        onChange={handleChange} />
                    <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                        name="help"
                        value={data.help}
                        onChange={handleChange} />
                    <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                        name="friends"
                        value={data.friends}
                        onChange={handleChange} />
                    <input type="submit" className="input-submit" onClick={postData} />
                </form>
            </div>
        </div>
    );
}

StarMapModal.propTypes = ReactPropTypes;

export default StarMapModal;