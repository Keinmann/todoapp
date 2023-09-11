import { ReactPropTypes } from "react";

const StarImage = ({ star }) => {
    // | family | job | implementation | study | money | soul | hobby | rest | image | health | help | friends | 
    // |   31   |  52 |       42       |  48   |  39   |  30  |   66  |  54  |   62  |   43   |  64  |   58    |
    return (

        <div className="starimage-container">
            <svg viewBox="0 0 201 201" fill="white">
                <circle cx="101" cy="101" r="1px" />
                <text x="101" y="101" color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>center</text>
                <circle cx={101 + (Math.sin(0) * star.family)} cy={101 + (Math.cos(-60) * star.family)} r="1px" />
                <text x={101 + (Math.sin(0) * star.family)} y={101 + (Math.cos(-60) * star.family)} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>family {star.family}</text>
                <circle cx={101 + (Math.sin(240) * star.job)} cy={101 - (Math.cos(240) * star.job)} r="1px" />
                <text x={101 + (Math.sin(-30) * star.job)} y={101 + (Math.cos(60) * star.job)} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>job {star.job}</text>
            </svg>
        </div>
    );
};

StarImage.propTypes = ReactPropTypes;

export default StarImage;