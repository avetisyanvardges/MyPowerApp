import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Rotate_phone = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 108 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M40.5 4.5h-27a9 9 0 00-9 9V72a9 9 0 009 9h27a9 9 0 009-9V13.5a9 9 0 00-9-9zm0 63h-27v-54h27v54zm54-9h-36v9h36v27h-54V90H27v4.5a9 9 0 009 9h58.5a9 9 0 009-9v-27a9 9 0 00-9-9zm9-13.5l-18-9 8.595-4.095A33.822 33.822 0 0063 11.25V4.5A40.5 40.5 0 01103.5 45z"
        fill="#fff"
      />
    </Svg>
  );
};

export {Rotate_phone};
