import './PlansItem.style.css';
import { ReactPropTypes } from 'react';
import { useState } from 'react';
import dateFormat from 'dateformat';
import PlansModal from '../PlansModal/PlansModal';



const PlansItem = ({ plan, getData }) => {

    const [showModal, setShowModal] = useState(false);
    const deleteItem = async () => {
        try {
            const response = await fetch(`http://localhost:8000/plans/${plan.id}`, {
                method: "DELETE"
            });
            const json = await response.json();
            if (json.status === 200) {
                await getData();
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <li className='plansitem-wrapper' >
            <div className='info-box'>
                <p className='info-title'>{plan.title}</p>
                <p className='info-date'>{dateFormat(plan.date, 'dd.mm.yyyy hh:MM')}</p>
            </div>
            <div className='button-box'>
                <button className='edit' onClick={() => { setShowModal(true) }}>edit</button>
                <button className='delete' onClick={deleteItem}>delete</button>
            </div>
            {showModal && <PlansModal mode={'edit'} setShowModal={setShowModal} getData={getData} plan={plan} />}
        </li>
    );
};

PlansItem.propTypes = ReactPropTypes;



export default PlansItem;