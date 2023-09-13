import { ReactPropTypes } from "react";
import './StarMapListItem.style.css'
import StarImage from '../StarImage/StarImage';


const StarMapListItem = ({ star, getData, shadow }) => {

    return (
        <div className="starmap-listitem-container">
            <StarImage star={star} width="200px" height="200px" color="rgb(220, 200, 200)" />
            {shadow && <StarImage star={shadow} width="200px" height="200px" color="rgb(100, 100, 100)" isShadow={true} />}
        </div>
    );
};

StarMapListItem.propTypes = ReactPropTypes;

export default StarMapListItem;