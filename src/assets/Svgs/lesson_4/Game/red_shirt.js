import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';
import {Text} from 'react-native';
import {FontStyle, fullScreen, Sizes} from '../../../RootStyles';
import * as Animatable from 'react-native-animatable';
import {Correct} from '../../lesson_1/Correct';

const Red_shirt = ({width, height, color, text}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 208 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_1185_8690)" fillRule="evenodd" clipRule="evenodd">
        <Path
          d="M72.934 11.964C54.554 20.936 35.116 35.67 22.745 54.82c9.27 4.594 23.127 13.676 30.199 20.211 1.93 29.197-8.283 64.947-20.38 94.453 37.982 13.607 78.739 16.182 114.562 15.594 6.704-27.887 13.075-61.419 12.843-84.743 9.172-8.33 25.584-13.47 34.893-16.177-3.984-21.081-14.885-36.709-26.261-50.919-44.012 19.011-62.903 21.652-95.662-21.274h-.005z"
          fill="#F92E01"
        />
        <Path
          opacity={0.1}
          d="M52.944 75.033c1.93 29.196-8.281 64.946-20.38 94.452a220.23 220.23 0 0016.135 5.099c9.058-5.998 17.485-16.682 20.763-23.136 9.665-19.019 29.62 27.298 46.71 33.213 10.592.501 20.958.582 30.941.417 2.504-10.42 5.064-21.683 7.277-32.919-26.461 7.401-49.258-13.921-58.647-35.588-1.294-2.99-13.469-42.285-1.757-35.877 3.832 2.098 10.695 3.255 4.713-3.362-13.482-14.923-18.765-38.106-25.78-65.37-2.001.407-6.653 1.438-6.67 4.343-.074 17.483 8.344 42.844 9.296 57.55.99 15.283.497 27.483-6.76 28.395-13.082 1.64-7.098-30.5-13.062-45.783-1.928 8.939-2.705 11.189-2.797 18.568l.018-.002z"
          fill="#111"
        />
        <Path
          opacity={0.1}
          d="M48.55 71.293c1.526 1.365 3.038 2.502 4.564 3.867-.04-8.125 1.323-11.904 2.438-17.637 1.398-7.173-.116-8.03-2.317-2.616-2.137 5.256-3.641 11.48-4.684 16.381l-.001.005zM165.189 96.638c-1.533 1.353-3.401 2.623-4.934 3.975.076-7.62-.526-13.8-1.236-21.255-.511-5.346.984-5.673 2.939-.789 2.109 5.273 2.829 13.162 3.231 18.069zM106.728 65.014c6.565 4.462 14.343 5.255 21.989 1.342 5.093-2.605 9.965-4.156 3.073 3.948-8.81 10.362-20.616 9.144-27.692-.87-5.753-8.143-2.354-7.812 2.63-4.42z"
          fill="#111"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1185_8690">
          <Path
            fill="#fff"
            transform="rotate(8.141 8.892 181.74)"
            d="M0 0H183.805V175.725H0z"
          />
        </ClipPath>
      </Defs>
      {text ? (
        <Animatable.View
          animation={'bounceInDown'}
          style={{
            position: 'absolute',
            left: fullScreen.height < 800 ? Sizes.size90 : Sizes.size110,
            top: fullScreen.height < 800 ? -Sizes.size45 : -Sizes.size40,
            zIndex: 999,
          }}>
          <Correct width={Sizes.size50} height={Sizes.size50} />
        </Animatable.View>
      ) : null}
      {text ? (
        <Animatable.View
          animation={'zoomIn'}
          style={{
            width,
            height,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              width: '60%',
              ...FontStyle.body_2,
              letterSpacing: 0.25,
              textAlign: 'center',
            }}>
            {text}
          </Text>
        </Animatable.View>
      ) : null}
    </Svg>
  );
};

export {Red_shirt};
