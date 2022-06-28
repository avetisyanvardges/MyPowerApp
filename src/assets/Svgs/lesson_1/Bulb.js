import React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';

const Bulb = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G filter="url(#filter0_d_941_3250)" stroke="#0B2B3E">
        <Path
          d="M41.495 49.5h7.009-7.01zM45 28.5V30v-1.5zm9.546 3.954l-1.06 1.06 1.06-1.06zM58.5 42H57h1.5zM33 42h-1.5H33zm3.514-8.486l-1.06-1.06 1.06 1.06zm3.182 13.79a7.5 7.5 0 1110.608 0l-.822.82A5.062 5.062 0 0048 51.704v.796a3 3 0 01-6 0v-.797a5.064 5.064 0 00-1.482-3.579l-.822-.82z"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Rect
          x={23.25}
          y={21.25}
          width={42.5}
          height={42.5}
          rx={21.25}
          strokeWidth={2.5}
          shapeRendering="crispEdges"
        />
      </G>
    </Svg>
  );
};

export {Bulb};
