import './StarMapDetail.style.css'
import { ReactPropTypes } from 'react';

import StarImage from '../StarImage/StarImage';

const StarMapDetail = ({ star, shadow }) => {
    return (
        <div className='starmap-detail' >
            <div className='starmap-detail-image'>
                {star && <StarImage star={star} width='100%' enableAxis={true} enableMetrics={true} />}
                {shadow && <StarImage star={shadow} width='100%' isShadow={true} color='rgba(90, 90, 90, 0.3)' />}
            </div>
            <div className='starmap-detail-info'>
                {/* // | family | job | implementation | study | money | soul | hobby | rest | image | health | help | friends | */}
                {/* // |   31   |  52 |       42       |  48   |  39   |  30  |   66  |  54  |   62  |   43   |  64  |   58    | */}
                {star && <table>
                    <tr>
                        <th>Sphere of life</th>
                        <th>Actual</th>
                        <th>Previous</th>
                    </tr>
                    <tr key="family">
                        <th>Relations in family</th>
                        <td>{star.family}</td>
                        {shadow && <td>{shadow.family}</td>}
                    </tr>
                    <tr key="job">
                        <th>Job or business actvity</th>
                        <td>{star.job}</td>
                        {shadow && <td>{shadow.job}</td>}
                    </tr>
                    <tr key="implementation">
                        <th>Skills implementation</th>
                        <td>{star.implementation}</td>
                        {shadow && <td>{shadow.implementation}</td>}
                    </tr>
                    <tr key="study">
                        <th>Studying skills</th>
                        <td>{star.study}</td>
                        {shadow && <td>{shadow.study}</td>}
                    </tr>
                    <tr key="money">
                        <th>Financial state</th>
                        <td>{star.money}</td>
                        {shadow && <td>{shadow.money}</td>}
                    </tr>
                    <tr key="soul">
                        <th>Cultural(spiritual) development</th>
                        <td>{star.soul}</td>
                        {shadow && <td>{shadow.soul}</td>}
                    </tr>
                    <tr key="hobby">
                        <th>Hobby and Art</th>
                        <td>{star.hobby}</td>
                        {shadow && <td>{shadow.hobby}</td>}
                    </tr>
                    <tr key="rest">
                        <th>Rest, simply Rest</th>
                        <td>{star.rest}</td>
                        {shadow && <td>{shadow.rest}</td>}
                    </tr>
                    <tr key="image">
                        <th>Beauty and image</th>
                        <td>{star.image}</td>
                        {shadow && <td>{shadow.image}</td>}
                    </tr>
                    <tr key="health">
                        <th>Health and sport</th>
                        <td>{star.health}</td>
                        {shadow && <td>{shadow.health}</td>}
                    </tr>
                    <tr key="help">
                        <th>Volunteering, helping people</th>
                        <td>{star.help}</td>
                        {shadow && <td>{shadow.help}</td>}
                    </tr>
                    <tr key="friends">
                        <th>Relationships with friends or beloved</th>
                        <td>{star.friends}</td>
                        {shadow && <td>{shadow.friends}</td>}
                    </tr>
                </table>}
            </div>
        </div>
    );

};

StarMapDetail.propTypes = ReactPropTypes;

export default StarMapDetail;