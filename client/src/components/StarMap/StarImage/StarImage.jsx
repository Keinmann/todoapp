import { ReactPropTypes } from "react";

const StarImage = ({ star, width, height }) => {
    const toRad = (degree) => {
        return degree * Math.PI / 180;
    }

    const getCX = (degree, value) => {
        return 100 + Math.sin(toRad(degree)) * value;
    };

    const getCY = (degree, value) => {
        return 100 + Math.cos(toRad(degree)) * value;
    };
    const cx1 = getCX(180, star.family); const cy1 = getCY(180, star.family);
    const cx2 = getCX(150, star.job);
    const cy2 = getCY(150, star.job);
    const cx3 = getCX(120, star.implementation);
    const cy3 = getCY(120, star.implementation);
    const cx4 = getCX(90, star.study);
    const cy4 = getCY(90, star.study);
    const cx5 = getCX(60, star.money);
    const cy5 = getCY(60, star.money);
    const cx6 = getCX(30, star.soul);
    const cy6 = getCY(30, star.soul);
    const cx7 = getCX(0, star.hobby);
    const cy7 = getCY(0, star.hobby);
    const cx8 = getCX(-30, star.rest);
    const cy8 = getCY(-30, star.rest);
    const cx9 = getCX(-60, star.image);
    const cy9 = getCY(-60, star.image);
    const cx10 = getCX(-90, star.health);
    const cy10 = getCY(-90, star.health);
    const cx11 = getCX(-120, star.help);
    const cy11 = getCY(-120, star.help);
    const cx12 = getCX(-150, star.friends);
    const cy12 = getCY(-150, star.friends);

    // | family | job | implementation | study | money | soul | hobby | rest | image | health | help | friends | 
    // |   31   |  52 |       42       |  48   |  39   |  30  |   66  |  54  |   62  |   43   |  64  |   58    |
    return (
        <div className="starimage-container">
            <svg viewBox="0 0 200 200" fill="white" width={width} height={height}>
                <circle cx={cx1} cy={cy1} r="1px" />
                {/* <text x={cx1} y={cy1} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>family {star.family}</text> */}
                <line x1={cx1} y1={cy1} x2={cx2} y2={cy2} stroke="white" />
                <circle cx={cx2} cy={cy2} r="1px" />
                {/* <text x={cx2} y={cy2} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>job {star.job}</text> */}
                <line x1={cx2} y1={cy2} x2={cx3} y2={cy3} stroke="white" />
                <circle cx={cx3} cy={cy3} r="1px" />
                {/* <text x={cx3} y={cy3} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>implementation {star.implementation}</text> */}
                <line x1={cx3} y1={cy3} x2={cx4} y2={cy4} stroke="white" />
                <circle cx={cx4} cy={cy4} r="1px" />
                {/* <text x={cx4} y={cy4} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>study {star.study}</text> */}
                <line x1={cx4} y1={cy4} x2={cx5} y2={cy5} stroke="white" />
                <circle cx={cx5} cy={cy5} r="1px" />
                {/* <text x={cx5} y={cy5} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>money {star.money}</text> */}
                <line x1={cx5} y1={cy5} x2={cx6} y2={cy6} stroke="white" />
                <circle cx={cx6} cy={cy6} r="1px" />
                {/* <text x={cx6} y={cy6} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>soul {star.soul}</text> */}
                <line x1={cx6} y1={cy6} x2={cx7} y2={cy7} stroke="white" />
                <circle cx={cx7} cy={cy7} r="1px" />
                {/* <text x={cx7} y={cy7} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>hobby {star.hobby}</text> */}
                <line x1={cx7} y1={cy7} x2={cx8} y2={cy8} stroke="white" />
                <circle cx={cx8} cy={cy8} r="1px" />
                {/* <text x={cx8} y={cy8} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>rest {star.rest}</text> */}
                <line x1={cx8} y1={cy8} x2={cx9} y2={cy9} stroke="white" />
                <circle cx={cx9} cy={cy9} r="1px" />
                {/* <text x={cx9} y={cy9} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>image {star.image}</text> */}
                <line x1={cx9} y1={cy9} x2={cx10} y2={cy10} stroke="white" />
                <circle cx={cx10} cy={cy10} r="1px" />
                {/* <text x={cx10} y={cy10} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>health {star.health}</text> */}
                <line x1={cx10} y1={cy10} x2={cx11} y2={cy11} stroke="white" />
                <circle cx={cx11} cy={cy11} r="1px" />
                {/* <text x={cx11} y={cy11} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>help {star.help}</text> */}
                <line x1={cx11} y1={cy11} x2={cx12} y2={cy12} stroke="white" />
                <circle cx={cx12} cy={cy12} r="1px" />
                {/* <text x={cx12} y={cy12} color="white" stroke="#FFFFFF" strokeWidth={0.01} fontSize={5}>friends {star.friends}</text> */}
                <line x1={cx12} y1={cy12} x2={cx1} y2={cy1} stroke="white" />


            </svg>
        </div>
    );
};

StarImage.propTypes = ReactPropTypes;

export default StarImage;