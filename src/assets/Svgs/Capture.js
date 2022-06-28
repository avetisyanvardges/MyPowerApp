import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Sizes} from '../RootStyles';

const Capture = ({width, height, color}) => {
  return (
    <Svg
      width={width || Sizes.size15}
      height={height || Sizes.size15}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M5.5 6.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" fill="#BD3150" />
      <Path
        d="M14 2a2 2 0 012 2v6a2 2 0 01-2 2H2a2 2 0 01-2-2V4a2 2 0 012-2h1.172a2 2 0 001.414-.586l.828-.828A2 2 0 016.828 0h2.344a2 2 0 011.414.586l.828.828A2 2 0 0012.828 2H14zm-.5 2a.5.5 0 100-1 .5.5 0 000 1zm-9 2.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z"
        fill="#BD3150"
      />
    </Svg>
  );
};

export {Capture};
