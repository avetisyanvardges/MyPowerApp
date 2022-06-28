import * as React from 'react';
import Svg, {ClipPath, Defs, Ellipse, G, Path} from 'react-native-svg';

const Youtube = ({width, height, color}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 72 72" fill="none">
      <Ellipse cx={36} cy={36.0001} rx={30} ry={30} fill="#0B2B3E" />
      <G
        clipPath="url(#clip0_1185_4888)"
        stroke="#EF7D90"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M49.008 31l-7 5 7 5V31zM40.008 29h-11a2 2 0 00-2 2v10a2 2 0 002 2h11a2 2 0 002-2V31a2 2 0 00-2-2z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1185_4888">
          <Path
            fill="#fff"
            transform="translate(26.008 24)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export {Youtube};
