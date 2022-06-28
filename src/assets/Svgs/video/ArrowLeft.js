import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowLeft = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.25 13.5L6.75 9l4.5-4.5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {ArrowLeft};
