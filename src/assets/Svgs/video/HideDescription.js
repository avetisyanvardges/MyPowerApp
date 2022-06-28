import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const HideDescription = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect y={0.000152588} width={24} height={24} rx={3} fill="#fff" />
      <Path
        d="M6 13.5h4.5V18M18 10.5h-4.5V6M13.5 10.5l5.25-5.25M5.25 18.75l5.25-5.25"
        stroke="#111"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {HideDescription};
