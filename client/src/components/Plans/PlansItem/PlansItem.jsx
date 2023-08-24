import './PlansItem.style.css';
import PropTypes from 'prop-types';

const PlansItem = (props) => {
    const { plan, getData } = props;
    return (
        <div className='plansitem-wrapper' >
            <div className='info-box'>
                <p className='info-title'>{plan.title}</p>
                <p className='info-date'>{plan.date}</p>
            </div>
            <div className='button-box'>
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
            </div>
        </div>
    );
};

PlansItem.propTypes = {
    plan: PropTypes.object,
    getData: PropTypes.func
}

export default PlansItem;