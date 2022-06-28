import React from 'react';
import Svg, {Path} from 'react-native-svg';

const OutlinePlay = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.994 15a7 7 0 100-14 7 7 0 000 14z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.994 10.191a.5.5 0 00.724.447l4.382-2.19a.5.5 0 000-.895L6.718 5.362a.5.5 0 00-.724.447v4.382z"
        fill="#fff"
      />
    </Svg>
  );
};

export {OutlinePlay};
