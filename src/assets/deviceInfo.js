import {Dimensions, PixelRatio, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const deviceInfo = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
  appVersion: DeviceInfo.getVersion(),
  hasNotch: DeviceInfo.hasNotch(),
  OS: Platform.OS,
  ios: Platform.OS === 'ios',
  android: Platform.OS === 'android',
  small_screen: Dimensions.get('window').height < 780,
  mdpi: PixelRatio.get() > 1 && PixelRatio.get() <= 2,
  xhdpi: PixelRatio.get() > 2 && PixelRatio.get() <= 3,
  xxhdpi: PixelRatio.get() >= 3 && PixelRatio.get() <= 3.5,
};
