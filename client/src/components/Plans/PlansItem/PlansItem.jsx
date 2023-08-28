import './PlansItem.style.css';
import PropTypes from 'prop-types';
import { ReactPropTypes } from 'react';

const PlansItem = (props) => {

    const deleteItem = async () => {
        console.log("deleting", plan);
    };

    const editItem = async () => {
        console.log("editing", plan);
    };

    const { plan, getData } = props;
    return (
        <div className='plansitem-wrapper' >
            <div className='info-box'>
                <p className='info-title'>{plan.title}</p>
                <p className='info-date'>{plan.date}</p>
            </div>
            <div className='button-box'>
                <button className='edit' onClick={editItem}>edit</button>
                <button className='delete' onClick={deleteItem}>delete</button>
            </div>
        </div>
    );
};

PlansItem.propTypes = ReactPropTypes;
// {
//     plan: ReactPropTypes,
//     getData: ReactPropTypes
// }

export default PlansItem;