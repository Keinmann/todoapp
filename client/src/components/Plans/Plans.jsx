import './Plans.style.css';
import { useCookies } from 'react-cookie';
import PlansHeader from '../PlansHeader/PlansHeader';
import PlansItem from '../PlansItem/PlansItem';

const Plans = () => {

    return (
        <div className="plans-container">
            <PlansHeader></PlansHeader>
            <PlansItem></PlansItem>
        </div>
    );
};

export default Plans;