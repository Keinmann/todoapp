import { ReactPropTypes } from "react";

const StarImage = ({ star, width, height, color = "rgb(130, 130, 130)", isShadow = false, enableAxis = false }) => {
    const toRad = (degree) => {
        return degree * Math.PI / 180;
    }

    const getCX = (degree, value = 100) => {
        return 100 + Math.sin(toRad(degree)) * value;
    };
    const getCY = (degree, value = 100) => {
        return 100 + Math.cos(toRad(degree)) * value;
    };

    const cx1 = getCX(180, star.family);
    const cy1 = getCY(180, star.family);
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
        <svg className={isShadow ? "shadow" : ""} viewBox="0 0 200 200" fill={color !== '' ? color : "rgb(130, 130, 130)"} stroke={color !== '' ? color : "rgb(130, 130, 130)"} width={width} height={height}>
            {enableAxis &&
                <>
                    <line stroke="rgba(130, 130, 130, 0.1)" x1={100} y1={100} x2={getCX(180)} y2={getCY(180)} />
                    <line stroke="rgba(130, 130, 130, 0.1)" x1={100} y1={100} x2={getCX(150)} y2={getCY(150)} />
                    <line stroke="rgba(130, 130, 130, 0.1)" x1={100} y1={100} x2={getCX(120)} y2={getCY(120)} />
                    <line stroke="rgba(130, 130, 130, 0.1)" x1={100} y1={100} x2={getCX(90)} y2={getCY(90)} />
                    <line stroke="rgba(130, 130, 130, 0.1)" x1={100} y1={100} x2={getCX(60)} y2={getCY(60)} />
                    <line stroke="rgba(130, 130, 130, 0.1)" x1={100} y1={100} x2={getCX(30)} y2={getCY(30)} />
                    <line stroke="rgba(130, 130, 130, 0.1)" x1={100} y1={100} x2={getCX(0)} y2={getCY(0)} />
                    <line stroke="rgba(130, 130, 130, 0.1)" x1={100} y1={100} x2={getCX(-30)} y2={getCY(-30)} />
                    <line stroke="rgba(130, 130, 130, 0.1)" x1={100} y1={100} x2={getCX(-60)} y2={getCY(-60)} />
                    <line stroke="rgba(130, 130, 130, 0.1)" x1={100} y1={100} x2={getCX(-90)} y2={getCY(-90)} />
                    <line stroke="rgba(130, 130, 130, 0.1)" x1={100} y1={100} x2={getCX(-120)} y2={getCY(-120)} />
                    <line stroke="rgba(130, 130, 130, 0.1)" x1={100} y1={100} x2={getCX(-150)} y2={getCY(-150)} />
                </>}
            <circle cx={cx1} cy={cy1} r="1px" />
            <circle cx={cx2} cy={cy2} r="1px" />
            <circle cx={cx3} cy={cy3} r="1px" />
            <circle cx={cx4} cy={cy4} r="1px" />
            <circle cx={cx5} cy={cy5} r="1px" />
            <circle cx={cx6} cy={cy6} r="1px" />
            <circle cx={cx7} cy={cy7} r="1px" />
            <circle cx={cx8} cy={cy8} r="1px" />
            <circle cx={cx9} cy={cy9} r="1px" />
            <circle cx={cx10} cy={cy10} r="1px" />
            <circle cx={cx11} cy={cy11} r="1px" />
            <circle cx={cx12} cy={cy12} r="1px" />

            <line x1={cx1} y1={cy1} x2={cx2} y2={cy2} />
            <line x1={cx2} y1={cy2} x2={cx3} y2={cy3} />
            <line x1={cx3} y1={cy3} x2={cx4} y2={cy4} />
            <line x1={cx4} y1={cy4} x2={cx5} y2={cy5} />
            <line x1={cx5} y1={cy5} x2={cx6} y2={cy6} />
            <line x1={cx6} y1={cy6} x2={cx7} y2={cy7} />
            <line x1={cx7} y1={cy7} x2={cx8} y2={cy8} />
            <line x1={cx8} y1={cy8} x2={cx9} y2={cy9} />
            <line x1={cx9} y1={cy9} x2={cx10} y2={cy10} />
            <line x1={cx10} y1={cy10} x2={cx11} y2={cy11} />
            <line x1={cx11} y1={cy11} x2={cx12} y2={cy12} />
            <line x1={cx12} y1={cy12} x2={cx1} y2={cy1} />


            {/* <text x={cx1} y={cy1} strokeWidth={0.01} fontSize={5}>family {star.family}</text>
                 <text x={cx2} y={cy2} strokeWidth={0.01} fontSize={5}>job {star.job}</text>
                 <text x={cx3} y={cy3} strokeWidth={0.01} fontSize={5}>implementation {star.implementation}</text>
                 <text x={cx4} y={cy4} strokeWidth={0.01} fontSize={5}>study {star.study}</text>
                 <text x={cx5} y={cy5} strokeWidth={0.01} fontSize={5}>money {star.money}</text>
                 <text x={cx6} y={cy6} strokeWidth={0.01} fontSize={5}>soul {star.soul}</text>
                 <text x={cx7} y={cy7} strokeWidth={0.01} fontSize={5}>hobby {star.hobby}</text>
                 <text x={cx8} y={cy8} strokeWidth={0.01} fontSize={5}>rest {star.rest}</text>
                 <text x={cx9} y={cy9} strokeWidth={0.01} fontSize={5}>image {star.image}</text>
                 <text x={cx10} y={cy10} strokeWidth={0.01} fontSize={5}>health {star.health}</text>
                 <text x={cx11} y={cy11} strokeWidth={0.01} fontSize={5}>help {star.help}</text>
                 <text x={cx12} y={cy12} strokeWidth={0.01} fontSize={5}>friends {star.friends}</text> */}
        </svg>
    );
};

StarImage.propTypes = ReactPropTypes;

export default StarImage;