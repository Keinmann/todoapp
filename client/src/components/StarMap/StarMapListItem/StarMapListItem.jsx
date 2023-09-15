import { ReactPropTypes } from "react";
import './StarMapListItem.style.css'
import StarImage from '../StarImage/StarImage';
import dateFormat from 'dateformat';


const StarMapListItem = ({ star, shadow, getData }) => {

    const deleteItem = async () => {
        try {
            const response = await fetch(`http://localhost:8000/stars/${star.id}`, {
                method: "DELETE"
            });
            const json = await response.json();
            console.log(json);
            if (json.status === 200) {
                await getData();
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="starmap-listitem-container">
            <div className="starmap-listitem-image-box">
                <StarImage star={star} width="200px" height="200px" color="rgb(220, 200, 200)" />
                {shadow && <StarImage star={shadow} width="200px" height="200px" color="rgb(100, 100, 100)" isShadow={true} />}
            </div>
            <div className="starmap-listitem-menu">
                <p>{dateFormat(star.date, 'dd.mm.yyyy HH:MM')}</p>
                <button className='starmap-listitem-delete' onClick={deleteItem} >
                    <svg viewBox="0 0 16 16" strokeWidth=".1px">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

StarMapListItem.propTypes = ReactPropTypes;

export default StarMapListItem;