import React from 'react';
import Svg, {Ellipse, Path} from 'react-native-svg';

const Play = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 73 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Ellipse cx={36.0059} cy={36} rx={30} ry={30} fill="#0B2B3E" />
      <Path
        d="M30.006 43.4a1 1 0 001.494.87l14.227-8.09a1 1 0 000-1.74L31.5 26.35a1 1 0 00-1.494.87V43.4z"
        fill="#EF7D90"
      />
    </Svg>
  );
};

export {Play};
