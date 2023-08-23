import './Plans.style.css';
import { useCookies } from 'react-cookie';
import PlansHeader from '../PlansHeader/PlansHeader';
import PlansItem from '../PlansItem/PlansItem';
import { useState } from 'react';
import { useEffect } from 'react';

const Plans = () => {
    const [cookies, ,] = useCookies(null);
    const [plans, setPlans] = useState(null);

    const getData = async () => {
        try {
            const userEmail = cookies["Email"];
            const response = await fetch(`http://localhost:8000/plans/${userEmail}`);
            const json = await response.json();
            setPlans(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => { getData(); });

    const sortedPlans = plans?.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div className="plans-container">
            <PlansHeader />
            {
                sortedPlans?.map((plan) => <PlansItem key={plan.id} plan={plan} getData={getData} />
                )
            }
        </div>
    );
};

export default Plans;