import './StarMapDetail.style.css'
import { ReactPropTypes } from 'react';

import StarImage from '../StarImage/StarImage';

const StarMapDetail = ({ star }) => {
    return (
        <div className='starmap-detail'>
            <div className='starmap-detail-image'>
                Image here
                {star && <StarImage star={star} width='500px' />}
            </div>
            <div className='starmap-detail-info'>
                Info about Image here
            </div>
        </div>

    );

};

StarMapDetail.propTypes = ReactPropTypes;

export default StarMapDetail;