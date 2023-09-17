import './StarMapDetail.style.css'
import { ReactPropTypes } from 'react';

import StarImage from '../StarImage/StarImage';

const StarMapDetail = ({ star, shadow }) => {
    return (
        <div className='starmap-detail'>
            <div className='starmap-detail-image'>
                {star && <StarImage star={star} width='100%' enableAxis={true} />}
                {shadow && <StarImage star={shadow} width='100%' isShadow={true} color='rgba(90, 90, 90, 0.3)' />}
            </div>
            <div className='starmap-detail-info'>
                {/* // | family | job | implementation | study | money | soul | hobby | rest | image | health | help | friends | */}
                {/* // |   31   |  52 |       42       |  48   |  39   |  30  |   66  |  54  |   62  |   43   |  64  |   58    | */}
                <table>
                    <tr>
                        <th>Sphere of life</th>
                        <th>Actual</th>
                        <th>Previous</th>
                    </tr>
                    <tr key="family">
                        <th>Relations in family</th>
                        {star && <th>{star.family}</th>}
                        {shadow && <th>{shadow.family}</th>}
                    </tr>
                    <tr key="job">
                        <th>Job or business actvity</th>
                        {star && <th>{star.job}</th>}
                        {shadow && <th>{shadow.job}</th>}
                    </tr>
                    <tr key="implementation">
                        <th>Skills implementation</th>
                        {star && <th>{star.implementation}</th>}
                        {shadow && <th>{shadow.implementation}</th>}
                    </tr>
                    <tr key="study">
                        <th>Studying skills</th>
                        {star && <th>{star.study}</th>}
                        {shadow && <th>{shadow.study}</th>}
                    </tr>
                    <tr key="money">
                        <th>Financial state</th>
                        {star && <th>{star.money}</th>}
                        {shadow && <th>{shadow.money}</th>}
                    </tr>
                    <tr key="soul">
                        <th>Cultural(spiritual) development</th>
                        {star && <th>{star.soul}</th>}
                        {shadow && <th>{shadow.soul}</th>}
                    </tr>
                    <tr key="hobby">
                        <th>Hobby and Art</th>
                        {star && <th>{star.hobby}</th>}
                        {shadow && <th>{shadow.hobby}</th>}
                    </tr>
                    <tr key="rest">
                        <th>Rest, simply Rest</th>
                        {star && <th>{star.rest}</th>}
                        {shadow && <th>{shadow.rest}</th>}
                    </tr>
                    <tr key="image">
                        <th>Beauty and image</th>
                        {star && <th>{star.image}</th>}
                        {shadow && <th>{shadow.image}</th>}
                    </tr>
                    <tr key="health">
                        <th>Health and sport</th>
                        {star && <th>{star.health}</th>}
                        {shadow && <th>{shadow.health}</th>}
                    </tr>
                    <tr key="help">
                        <th>Volunteering, helping people</th>
                        {star && <th>{star.help}</th>}
                        {shadow && <th>{shadow.help}</th>}
                    </tr>
                    <tr key="friends">
                        <th>Relationships with friends or beloved</th>
                        {star && <th>{star.friends}</th>}
                        {shadow && <th>{shadow.friends}</th>}
                    </tr>
                </table>
            </div>
        </div >

    );

};

StarMapDetail.propTypes = ReactPropTypes;

export default StarMapDetail;