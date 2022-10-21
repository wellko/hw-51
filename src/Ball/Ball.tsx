import React from 'react';

interface BallProps {
    number?:number
}

const Ball: React.FC<BallProps> = props => {
    return (
        <div className="ball">
            <p>
                {props.number}
            </p>
        </div>
    );
}

export default Ball;
