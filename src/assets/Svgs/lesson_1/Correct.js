import React from 'react';
import Svg, {Ellipse, Path} from 'react-native-svg';

const Correct = ({width, height, color}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 66 66" fill="none">
      <Ellipse cx={33} cy={33} rx={21} ry={21} fill="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 0C14.775 0 0 14.775 0 33s14.775 33 33 33 33-14.775 33-33S51.225 0 33 0zm14.304 27.42a3 3 0 10-4.608-3.84l-12.9 15.477-6.675-6.678a3 3 0 00-4.242 4.242l9 9a3.001 3.001 0 004.425-.201l15-18z"
        fill="#77CAE5"
      />
    </Svg>
  );
};

export {Correct};
