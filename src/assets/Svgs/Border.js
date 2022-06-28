import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Border = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 264 473"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M225 1h26c6.627 0 12 5.373 12 12v26M39 472H13c-6.627 0-12-5.373-12-12v-26M263 434v26c0 6.627-5.373 12-12 12h-26M1 39V13C1 6.373 6.373 1 13 1h26"
        stroke="#fff"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export {Border};
