import React from 'react';
import Svg, {Circle} from 'react-native-svg';

const Right_checkmark = ({x, y}) => {
  return (
    <Svg style={{position: 'absolute', zIndex: 0}}>
      <Circle cx={x} cy={y} r={'20'} fill={'red'} />
    </Svg>
  );
};

export {Right_checkmark};
