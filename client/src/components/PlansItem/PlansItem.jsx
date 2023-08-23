import './PlansItem.style.css';

const PlansItem = () => {

    return (
        <div className='plansitem-container'>
            <div className='info-container'>
                <div className='plansitem-title'> TITLE </div>
                <div className='plansitem-date'>01.01.2023</div>
            </div>

            <div className='plansitem-button-box'>
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    );
};

export default PlansItem;