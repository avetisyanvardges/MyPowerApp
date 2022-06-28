import React from 'react';
import Svg, {Defs, Ellipse, G, Path} from 'react-native-svg';

const Pause = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G filter="url(#filter0_d_941_4173)">
        <Ellipse cx={36} cy={35.9999} rx={30} ry={30} fill="#0B2B3E" />
        <Path
          d="M30 43.401a1 1 0 001.494.87l14.227-8.092a1 1 0 000-1.738L31.494 26.35a1 1 0 00-1.494.87V43.4z"
          fill="#EF7D90"
        />
        <G filter="url(#filter1_d_941_4173)">
          <Ellipse cx={36} cy={36.0001} rx={30} ry={30} fill="#0B2B3E" />
          <Path
            d="M34.328 25.333h-5.334v21.334h5.334V25.333zM44.995 25.333H39.66v21.334h5.334V25.333z"
            fill="#EF7D90"
          />
        </G>
      </G>
      <Defs />
    </Svg>
  );
};

export {Pause};
