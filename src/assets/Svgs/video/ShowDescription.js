import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ShowDescription = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.25 2.25h4.5v4.5M6.75 15.75h-4.5v-4.5M15.75 2.25L10.5 7.5M2.25 15.75L7.5 10.5"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {ShowDescription};
