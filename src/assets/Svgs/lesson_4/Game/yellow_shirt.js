import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Text} from 'react-native';
import {FontStyle, fullScreen, Sizes} from '../../../RootStyles';
import * as Animatable from 'react-native-animatable';
import {Correct} from '../../lesson_1/Correct';

const Yellow_shirt = ({width, height, color, text}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 185 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.304 4.613C31.362 16.115 14.188 33.481 4.644 54.222c9.838 3.24 24.856 10.279 32.79 15.756 6.053 28.673 1 65.567-6.806 96.537 39.569 8.104 80.323 4.877 115.739-.787 2.69-28.6 4.25-62.75.714-85.841 7.909-9.561 23.443-16.985 32.285-20.989-6.937-20.336-19.955-34.284-33.242-46.76-40.92 25.092-59.267 30.389-97.815-7.525h-.005z"
        fill="#FFE600"
      />
      <Path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.435 69.979c6.052 28.674 1 65.567-6.807 96.537a220.718 220.718 0 0016.712 2.768c8.127-7.232 14.963-19.02 17.296-25.884 6.882-20.228 33.223 22.864 50.997 26.305 10.568-1.006 20.852-2.396 30.721-3.976 1.005-10.686 1.945-22.216 2.544-33.67-25.172 11.092-50.786-6.815-63.161-26.966-1.707-2.781-19.342-40.014-6.828-35.322 4.095 1.537 11.06 1.71 4.194-4.002C67.627 52.885 59.105 30.649 48.29 4.613c-1.925.688-6.39 2.37-5.994 5.252 2.405 17.344 14.342 41.296 17.37 55.74 3.148 15.013 4.389 27.179-2.675 29.112-12.73 3.482-11.356-29.233-19.433-43.54-.644 9.136-1.094 11.477-.14 18.807l.018-.005z"
        fill="#111"
      />
      <Path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.55 66.895c1.706 1.137 3.366 2.05 5.072 3.186-1.192-8.05-.378-11.99-.085-17.832.369-7.31-1.254-7.945-2.667-2.265-1.372 5.514-1.98 11.9-2.32 16.906v.005zM151.729 75.48c-1.327 1.559-2.998 3.083-4.325 4.641-1.006-7.566-2.478-13.607-4.239-20.899-1.264-5.227.171-5.764 2.801-1.198 2.837 4.928 4.669 12.648 5.763 17.456zM89.314 52.418c7.138 3.493 14.958 3.175 21.979-1.788 4.679-3.306 9.287-5.535 3.606 3.478-7.261 11.523-19.134 11.99-27.565 3.065-6.856-7.258-3.44-7.412 1.98-4.755z"
        fill="#111"
      />
      {text ? (
        <Animatable.View
          animation={'bounceInDown'}
          style={{
            position: 'absolute',
            left: fullScreen.height < 800 ? Sizes.size50 : Sizes.size80,
            top: -Sizes.size50,
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

export {Yellow_shirt};
