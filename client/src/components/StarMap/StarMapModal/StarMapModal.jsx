import './StarMapModal.style.css';
import { ReactPropTypes } from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

const StarMapModal = ({ setShowModal, getData }) => {
    const [cookies, setCookie, removeCookie] = useCookies(null);

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
        date: new Date().toJSON()
    });

    async function postData(e) {
        e.preventDefault();

        try {
            // console.log("creating", data);
            const response = await fetch('http://localhost:8000/stars', {
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
                    <label className='starmap-modal-label'>
                        Let's take 12 spheres of your life. <br />
                        Please, drag the buttons as you feel they have to be placed. <br />
                        Don't think too much.
                    </label>
                    <div className='starmap-modal-input-box'>
                        <label className='starmap-modal-label'>Your relations with your family and relatives.</label>
                        <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                            name="family"
                            value={data.family}
                            onChange={handleChange} />
                        <label className='starmap-modal-label'>Your activity at business or job</label>
                        <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                            name="job"
                            value={data.job}
                            onChange={handleChange} />
                        <label className='starmap-modal-label'>Your feeling of skills practice</label>
                        <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                            name="implementation"
                            value={data.implementation}
                            onChange={handleChange} />
                        <label className='starmap-modal-label'>Your feeling of getting new knowledge, studying something</label>
                        <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                            name="study"
                            value={data.study}
                            onChange={handleChange} />
                        <label className='starmap-modal-label'>Your feeling of having enough money for your life</label>
                        <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                            name="money"
                            value={data.money}
                            onChange={handleChange} />
                        <label className='starmap-modal-label'>Your feeling of your cultural and mental development</label>
                        <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                            name="soul"
                            value={data.soul}
                            onChange={handleChange} />
                        <label className='starmap-modal-label'>Your feeling of having enough time for hobbies and art</label>
                        <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                            name="hobby"
                            value={data.hobby}
                            onChange={handleChange} />
                        <label className='starmap-modal-label'>Your feeling of getting enough rest</label>
                        <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                            name="rest"
                            value={data.rest}
                            onChange={handleChange} />
                        <label className='starmap-modal-label'>Your feeling of being beautiful and stylish</label>
                        <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                            name="image"
                            value={data.image}
                            onChange={handleChange} />
                        <label className='starmap-modal-label'>Your feeling of being physically and mentally healthy</label>
                        <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                            name="health"
                            value={data.health}
                            onChange={handleChange} />
                        <label className='starmap-modal-label'>Your feeling of helping somebody in need. Volunteering</label>
                        <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                            name="help"
                            value={data.help}
                            onChange={handleChange} />
                        <label className='starmap-modal-label'>Your relationships with friends or people you're in love with</label>
                        <input className='modal-input input-range' required type="range" id="range" min={0} max={100}
                            name="friends"
                            value={data.friends}
                            onChange={handleChange} />
                        <label>Remember: created conclusions can't be changed</label>
                    </div>
                    <input type="submit" className="input-submit" onClick={postData} />
                </form>
            </div>
        </div>
    );
};

StarMapModal.propTypes = ReactPropTypes;

export default StarMapModal;