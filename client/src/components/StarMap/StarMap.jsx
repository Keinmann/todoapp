import './StarMap.style.css';

import { useState } from 'react';
import { ReactPropTypes } from 'react';

import StarMapHeader from './StarMapHeader/StarMapHeader';
import StarMapListItem from './StarMapListItem/StarMapListItem';
import StarMapDetail from './StarMapDetail/StarMapDetail';

function StarMap({ sortedStars, getData }) {
    const [targetStar, setTargetStar] = useState(null);
    const [targetShadow, setTargetShadow] = useState(null);

    const scrollOnWheel = (event) => {
        event.currentTarget.scrollBy({
            left: event.deltaY * 1.5,
            behavior: "smooth"
        });
    };

    return (
        <div className='starmap-container'>
            <StarMapHeader getData={getData} />
            <div className='starmap-content'>
                <div className='starmap-list' onWheel={scrollOnWheel}>
                    {sortedStars?.map((star, index) => <StarMapListItem key={star.id} star={star} shadow={sortedStars[index + 1]} getData={getData} setTargetStar={setTargetStar} setTargetShadow={setTargetShadow} />)}
                </div>
                <StarMapDetail star={targetStar} shadow={targetShadow} />
            </div>
        </div>

    );
}

StarMap.propTypes = ReactPropTypes;

export default StarMap;