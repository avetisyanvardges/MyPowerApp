import {deviceInfo} from '../deviceInfo';
import {vScale} from './Scale';
import {PixelRatio} from 'react-native';

export const ratio = deviceInfo.deviceWidth / 375;
export const Sizes = {
  screenTitle: 20 * PixelRatio.get() > 20 ? 20 : 20 * PixelRatio.get(),
  size18_5: 18.5 * PixelRatio.get() > 18.5 ? 18.5 : 18.5 * PixelRatio.get(),
};
for (let i = 1; i < 600; i++) {
  Sizes[`size${i}`] = PixelRatio?.roundToNearestPixel(i);
}

export const BackgroundColors = {
  white: '#FFFFFF',
  spray_blue: '#77CAE5',
  primary_red: '#BD3150',
};

export const Colors = {
  white: '#ffffff',
  primary_red: '#BD3150',
  secondary_blue: '#0B2B3E',
  secondary_pink: '#EF7D90',
  bright_gray: '#50555C',
  light_gray: '#ACB8C2',
  black: '#111111',
};

export const Fonts = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
  semi_bold: 'Poppins-SemiBold',
  light: 'Poppins-Light',
};

export const FontStyle = {
  title: {
    fontSize: deviceInfo.deviceHeight < 800 ? Sizes.size23 : Sizes.size24,
    fontWeight: '600',
    lineHeight: 42,
  },
  text: {
    fontSize: deviceInfo.deviceHeight < 800 ? Sizes.size15 : Sizes.size16,
    fontWeight: '400',
    lineHeight: 28,
  },
  headline_3: {
    fontFamily: Fonts.regular,
    fontSize: deviceInfo.deviceHeight < 800 ? Sizes.size47 : Sizes.size46,
    fontWeight: '500',
    lineHeight: 56,
  },
  headline_4: {
    fontFamily: Fonts.medium,
    fontSize: deviceInfo.deviceHeight < 800 ? Sizes.size33 : Sizes.size34,
    fontWeight: '500',
    lineHeight: 56,
  },
  headline_5: {
    fontFamily: Fonts.medium,
    fontSize: deviceInfo.deviceHeight < 800 ? Sizes.size23 : Sizes.size24,
    fontWeight: '500',
    lineHeight: 42,
  },
  headline_6: {
    fontFamily: Fonts.semi_bold,
    fontSize: deviceInfo.deviceHeight < 800 ? Sizes.size20 : Sizes.size24,
    fontWeight: '600',
    lineHeight: 34,
  },
  subtitle_1: {
    fontFamily: Fonts.semi_bold,
    fontSize: deviceInfo.deviceHeight < 800 ? Sizes.size15 : Sizes.size16,
    fontWeight: '600',
    lineHeight: 28,
  },
  subtitle_2: {
    fontFamily: Fonts.semi_bold,
    fontSize: deviceInfo.deviceHeight < 800 ? Sizes.size13 : Sizes.size14,
    fontWeight: '600',
    lineHeight: 24,
  },
  body_1: {
    fontFamily: Fonts.regular,
    fontSize: deviceInfo.deviceHeight < 800 ? Sizes.size15 : Sizes.size16,
    fontWeight: '400',
    lineHeight: 28,
  },
  body_2: {
    fontFamily: Fonts.regular,
    fontSize: deviceInfo.deviceHeight < 800 ? Sizes.size13 : Sizes.size14,
    fontWeight: '400',
    lineHeight: 24,
  },
};

export const IconSize = {
  small: vScale(9),
  medium: vScale(18),
};

export const Padding = {
  horizontal: Sizes.size20,
};

export const Shadow = {
  shadowColor: Colors.black,
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.09,
  shadowRadius: 16,
  elevation: 11,
};

export const BorderStyles = {
  widths: {
    normal: 1,
    border2: 2,
    border3: 3,
  },
  radius: {
    xs: 8,
    s: 10,
    sm: 16,
    md: 30,
    lg: 60,
    circle: 90,
  },
  color: {
    gray: 'rgba(11, 43, 62,.2)',
  },
};

export const fullScreen = {
  width: deviceInfo.deviceWidth,
  height: deviceInfo.deviceHeight,
};
