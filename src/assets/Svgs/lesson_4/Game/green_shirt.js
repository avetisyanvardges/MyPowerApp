import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Text} from 'react-native';
import {FontStyle, fullScreen, Sizes} from '../../../RootStyles';
import * as Animatable from 'react-native-animatable';
import {Correct} from '../../lesson_1/Correct';

const Green_shirt = ({width, height, color, text}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 189 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.664 8.508C32.066 20.458 15.4 38.266 6.444 59.231c9.913 2.962 25.105 9.57 33.18 14.816 6.839 28.45 2.816 65.412-4.119 96.538 39.736 6.99 80.342 2.639 115.549-3.997 1.893-28.619 2.504-62.745-1.668-85.694 7.632-9.762 22.939-17.602 31.657-21.844-7.491-20.104-20.877-33.664-34.492-45.746-40.164 26.178-58.337 31.974-97.882-4.796h-.005z"
        fill="#1AAD54"
      />
      <Path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.624 74.048c6.839 28.45 2.818 65.412-4.119 96.538 5.578.984 11.166 1.75 16.765 2.299 7.914-7.444 14.413-19.398 16.553-26.314 6.31-20.379 33.809 21.898 51.652 24.839 10.525-1.298 20.755-2.97 30.566-4.82.707-10.693 1.326-22.227 1.607-33.676-24.828 11.769-50.901-5.392-63.818-25.161-1.781-2.728-20.424-39.4-7.797-35.063 4.131 1.42 11.09 1.4 4.077-4.111C69.299 56.15 60.172 34.194 48.65 8.509c-1.904.74-6.315 2.542-5.84 5.408C45.692 31.16 58.276 54.734 61.7 69.066c3.56 14.897 5.137 27.004-1.862 29.13-12.616 3.828-12.151-28.862-20.613-42.916-.39 9.136-.774 11.485.382 18.774l.017-.006z"
        fill="#111"
      />
      <Path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.661 71.106c1.735 1.087 3.418 1.952 5.153 3.04-1.414-8.002-.71-11.957-.58-17.796.166-7.306-1.471-7.895-2.725-2.186-1.218 5.54-1.648 11.93-1.848 16.937v.005zM153.906 76.367c-1.282 1.592-2.909 3.16-4.191 4.752-1.213-7.523-2.851-13.512-4.811-20.74-1.408-5.183.01-5.758 2.763-1.274 2.97 4.84 5.013 12.493 6.239 17.262zM90.94 55.081c7.226 3.289 15.026 2.755 21.899-2.394 4.58-3.429 9.12-5.781 3.697 3.372-6.931 11.701-18.774 12.498-27.44 3.823-7.047-7.053-3.642-7.301 1.845-4.8z"
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

export {Green_shirt};
