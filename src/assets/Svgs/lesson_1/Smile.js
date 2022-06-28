import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Smile = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.008 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
        stroke="#50555C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.008 14s1.5 2 4 2 4-2 4-2M9.008 9h.01M15.008 9h.01"
        stroke="#50555C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {Smile};
