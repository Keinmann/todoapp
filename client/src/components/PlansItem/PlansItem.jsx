import './PlansItem.style.css';
import PropTypes from 'prop-types';

const PlansItem = (props) => {
    const { plan, getData } = props;
    return (
        <div className='plansitem-container' >
            <div className='info-container'>
                <div className='plansitem-title'>{plan.title}</div>
                <div className='plansitem-date'>{plan.date}</div>
            </div>
            <div className='plansitem-button-box'>
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    );
};

PlansItem.propTypes = {
    plan: PropTypes.object,
    getData: PropTypes.func
}

export default PlansItem;