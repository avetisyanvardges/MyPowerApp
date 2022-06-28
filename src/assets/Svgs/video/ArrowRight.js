import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowRight = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.45 1.5L6 6l-4.55 4.5"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {ArrowRight};
