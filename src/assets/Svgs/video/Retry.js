import React from 'react';
import Svg, {Ellipse, Path} from 'react-native-svg';

const Retry = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 73 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Ellipse cx={36.0059} cy={36.0001} rx={30} ry={30} fill="#0B2B3E" />
      <Path
        d="M47.577 37.427c-.231 5.96-5.15 10.877-11.109 11.109a11.562 11.562 0 01-11.802-9.296c-.251-1.177.694-2.276 1.89-2.276.906 0 1.697.637 1.89 1.543a7.708 7.708 0 009.102 6.017c3.009-.578 5.439-3.008 6.018-6.017a7.715 7.715 0 00-7.56-9.257v3.452c0 .868-1.042 1.292-1.64.675l-5.4-5.38a.955.955 0 010-1.37l5.381-5.38c.617-.599 1.659-.174 1.659.694v3.452a11.591 11.591 0 0111.571 12.034z"
        fill="#EF7D90"
      />
    </Svg>
  );
};

export {Retry};
