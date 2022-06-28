import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Mannequin_vulnerable = ({
  width,
  height,
  wrong_press,
  select_area,
  right_press,
  disabled,
  setVulnerableAreas,
}) => {
  return (
    <>
      <Svg
        width={width || 355}
        height={height || 420}
        viewBox="0 0 355 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M211.977 184C212.492 188.726 212.73 192.05 212.73 192.05C212.73 196.05 209.73 197.05 209.73 197.05C219.73 202.05 212.73 212.05 212.73 212.05C214.73 211.05 216.76 214.07 216.76 214.07C220.79 221.09 232.73 282.05 232.73 282.05C233.73 285.05 230.73 287.05 230.73 287.05C257.73 285.05 273.73 299.05 273.73 299.05L301.73 312.01V314.05C303.73 311.05 311.73 316.05 311.73 316.05C309.73 307.05 315.73 305.05 315.73 305.05C322.73 302.05 324.73 329.38 324.73 329.38C324.73 329.38 326.73 339.05 326.73 345.05C326.73 351.05 324.73 355.05 324.73 355.05C319.73 358.05 317.73 353.05 314.73 348.05C311.73 343.05 310.73 327.05 310.73 327.05C303.73 333.05 296.73 326.05 296.73 326.05L292.73 325.05L267.73 317.05C234.73 312.05 225.73 299.05 225.73 299.05C215.73 297.05 218.73 290.05 218.73 290.05C216.73 289.05 215.73 285.05 215.73 285.05C204.73 263.05 195.73 221.05 195.73 221.05V216.05C188.73 209.05 193.73 201.05 193.73 201.05L187.73 202.05C191.73 209.05 187.73 216.05 187.73 216.05C189.73 216.05 188.73 220.05 188.73 220.05C179.73 259.05 175.8 262.92 175.8 262.92L167.73 293.05C167.73 295.05 165.73 296.05 165.73 296.05L167.73 298.05C175.73 307.05 178.73 334.05 178.73 334.05C177.73 340.05 184.73 372.05 184.73 372.05L183.73 373.05C191.73 380.05 183.73 385.05 183.73 385.05C183.73 385.05 186.73 386.05 191.73 389.05C196.73 392.05 189.73 397.05 189.73 397.05L181.59 397.15C177.45 400.24 160.73 402.05 160.73 402.05C146.73 403.05 148.73 399.05 148.73 399.05C153.73 389.05 174.73 388.05 174.73 388.05C164.73 383.05 171.73 377.05 171.73 377.05C171.73 377.05 170.73 365.05 160.73 344.05C150.73 323.05 153.73 299.05 153.73 299.05C149.73 293.05 153.73 290.05 153.73 290.05L152.73 287.05L155.73 269.05C155.73 258.05 163.73 227.05 163.73 227.05C166.73 214.05 169.73 213.05 169.73 213.05C167.73 207.05 171.73 202.05 171.73 202.05L169.73 200.05C168.801 195.037 168.356 190.335 168.245 186M211.977 184C210.995 175.01 209.007 160.949 205.73 155.05C205.73 155.05 203.73 152.05 202.73 152.05C201.73 152.05 208.73 144.05 201.73 137.05V102.47C201.73 102.47 206.73 105.05 209.73 104.05C209.73 104.05 221.73 124.05 231.73 128.05C231.73 128.05 240.73 133.05 242.73 138.05C242.73 138.05 247.73 145.05 254.73 139.05C254.73 139.05 258.73 136.05 257.73 133.05L260.73 134.05C260.73 134.05 281.73 118.05 292.73 97.0498L293.73 95.0498C293.73 95.0498 300.73 93.0498 298.73 87.0498C298.73 87.0498 316.73 74.0498 316.73 61.0498C316.73 61.0498 317.01 52.0498 300.87 61.0498C300.87 61.0498 289.73 69.0498 288.73 80.0498C288.73 80.0498 282.73 82.0498 282.73 87.0498C282.73 87.0498 258.73 102.05 250.73 120.05C250.73 120.05 228.73 94.0498 220.73 92.0498C220.73 92.0498 217.73 73.0498 199.73 87.0498C199.73 87.0498 194.73 80.0498 189.73 81.0498C189.73 81.0498 192.73 75.8698 189.73 73.9598C189.73 73.9598 198.73 38.0498 183.73 30.0498C168.73 22.0498 162.73 35.0498 162.73 35.0498C162.73 35.0498 156.73 52.4198 162.73 62.2298C162.73 62.2298 168.73 77.0498 169.73 77.0498C170.73 77.0498 166.73 80.0498 170.73 84.0498C170.73 84.0498 160.73 89.0498 161.73 97.0498C161.73 97.0498 148.73 89.0498 142.73 103.05C142.73 103.05 123.73 108.05 115.73 116.05C115.73 116.05 106.73 123.05 104.73 124.05C104.73 124.05 100.73 122.05 97.7298 128.05C97.7298 128.05 73.7298 142.05 64.7298 158.05C64.7298 158.05 60.7298 158.05 58.7298 164.05C58.7298 164.05 40.7298 162.05 36.7298 183.05C36.7298 183.05 32.7298 194.05 54.7298 185.05C54.7298 185.05 62.7298 179.05 64.7298 173.05C64.7298 173.05 70.7298 172.05 71.7298 169.05C71.7298 169.05 99.7298 158.05 107.73 138.05C107.73 138.05 144.73 128.05 149.73 118.05C149.73 118.05 163.73 115.05 162.73 109.05L170.73 142.05C170.73 142.05 167.73 152.05 173.73 155.05C173.73 155.05 167.761 166.987 168.245 186M211.977 184L168.245 186"
          stroke-width="0.9"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={({nativeEvent}) =>
            wrong_press({
              x: Math.floor(nativeEvent.pageX),
              y: Math.floor(nativeEvent.pageY),
            })
          }
        />
        <Path
          d="M191.33 49.1499C191.05 43.5099 189.92 38.0399 187.23 34.1499H162.23C161.89 34.6999 161.73 35.0499 161.73 35.0499C161.73 35.0499 159.42 41.7299 159.1 49.1499H191.33Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Eyes', true);
          }}
          onLayout={event => {
            setVulnerableAreas('Eyes_left', {
              color: 'Red',
              x: Math.floor(event.nativeEvent.layout.x + 10),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
        <Path
          d="M191.33 49.1499C191.05 43.5099 189.92 38.0399 187.23 34.1499H162.23C161.89 34.6999 161.73 35.0499 161.73 35.0499C161.73 35.0499 159.42 41.7299 159.1 49.1499H191.33Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Eyes', true);
          }}
          onLayout={event => {
            setVulnerableAreas('Eyes_right', {
              color: 'Red',
              x: Math.floor(
                event.nativeEvent.layout.x +
                  event.nativeEvent.layout.width -
                  10,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
        <Path
          d="M191.38 54.1499H159.24C159.54 57.0499 160.29 59.8599 161.74 62.2399C161.74 62.2399 163.11 65.6199 164.65 69.1499H189.75C190.44 65.4099 191.24 59.9099 191.39 54.1499H191.38Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Nose');
          }}
          onLayout={event => {
            setVulnerableAreas('Nose', {
              color: 'Red',
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
        <Path
          d="M163.37 89.1499H207.74V82.2299C205.26 82.8199 202.3 84.2799 198.74 87.0499C198.74 87.0499 193.74 80.0499 188.74 81.0499C188.74 81.0499 191.55 76.1799 188.97 74.1499H166.93C167.77 75.8599 168.45 77.0499 168.74 77.0499C169.74 77.0499 165.74 80.0499 169.74 84.0499C169.74 84.0499 166.05 85.8999 163.37 89.1499Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Throat');
          }}
          onLayout={event => {
            setVulnerableAreas('Throat', {
              color: 'Red',
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 3,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />

        <Path
          d="M131.73 129.44C139.58 126.07 146.73 122.07 148.74 118.06C148.74 118.06 149.83 117.83 151.38 117.36L145.04 97.9497C143.82 99.1797 142.69 100.85 141.74 103.06C141.74 103.06 133.18 105.32 125.13 109.22L131.74 129.45L131.73 129.44Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Arm', true);
          }}
          onLayout={event => {
            setVulnerableAreas('Arm_left', {
              color: 'yellow',
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />

        <Path
          d="M223.62 94.0298L209.45 105.2C211.18 107.94 215.88 115.08 221.28 120.79L238.29 107.38C233.39 102.26 227.84 96.8898 223.61 94.0298H223.62Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Arm', true);
          }}
          onLayout={event => {
            setVulnerableAreas('Arm_right', {
              color: 'yellow',
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />

        <Path
          d="M167.69 133.63L200.73 128.88V110.27L163.33 115.65L167.69 133.63Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Ribs', true);
          }}
          onLayout={event => {
            setVulnerableAreas('Ribs_left', {
              color: 'orange',
              x: Math.floor(event.nativeEvent.layout.x + 10),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
        <Path
          d="M167.69 133.63L200.73 128.88V110.27L163.33 115.65L167.69 133.63Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Ribs', true);
          }}
          onLayout={event => {
            setVulnerableAreas('Ribs_right', {
              color: 'orange',
              x: Math.floor(
                event.nativeEvent.layout.x +
                  event.nativeEvent.layout.width -
                  10,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
        <Path
          d="M200.73 137.05V134.41L168.99 138.98L169.73 142.05C169.73 142.05 168.23 147.05 169.48 151.03L203.72 146.1C204.19 143.4 203.82 140.12 200.74 137.04L200.73 137.05Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Solar_plexus');
          }}
          onLayout={event => {
            setVulnerableAreas('Solar_plexus', {
              color: 'orange',
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />

        <Path
          d="M162.46 228.15C161.64 231.39 159.16 241.4 157.23 251.15H179.57C181.2 246 183.27 238.63 185.82 228.15H162.46Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Thigh', true);
          }}
          onLayout={event => {
            setVulnerableAreas('Thigh_right', {
              color: 'yellow',
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
        <Path
          d="M220.08 228.15H196.35C197.68 233.76 199.77 242.13 202.39 251.15H225.35C223.62 243.14 221.76 234.89 220.07 228.15H220.08Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Thigh', true);
          }}
          onLayout={event => {
            setVulnerableAreas('Thigh_left', {
              color: 'yellow',
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
        <Path
          d="M166.73 298.05L164.73 296.05C164.73 296.05 166.73 295.05 166.73 293.05L171.8 274.15H153.89L151.74 287.05L152.74 290.05C152.74 290.05 148.74 293.05 152.74 299.05C152.74 299.05 152.02 304.81 152.46 313.15H173.66C171.97 307.17 169.69 301.38 166.74 298.05H166.73Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Knee', true);
          }}
          onLayout={event => {
            setVulnerableAreas('Knee_right', {
              color: 'orange',
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(
                event.nativeEvent.layout.y +
                  event.nativeEvent.layout.height / 2,
              ),
            });
          }}
        />
        <Path
          d="M229.73 287.05C229.73 287.05 232.73 285.05 231.73 282.05C231.73 282.05 230.61 276.31 228.93 268.15H207.79C209.96 274.32 212.3 280.18 214.73 285.05C214.73 285.05 215.73 289.05 217.73 290.05C217.73 290.05 214.73 297.05 224.73 299.05C224.73 299.05 227.38 302.86 235.03 307.15H263.73V293.41C256.38 289.78 244.76 285.94 229.73 287.05V287.05Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Knee', true);
          }}
          onLayout={event => {
            setVulnerableAreas('Knee_left', {
              color: 'orange',
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(
                event.nativeEvent.layout.y +
                  event.nativeEvent.layout.height / 2,
              ),
            });
          }}
        />

        <Path
          d="M185.49 382.15H168.38C168.53 383.99 169.83 386.1 173.74 388.05C173.74 388.05 152.74 389.05 147.74 399.05C147.74 399.05 145.74 403.05 159.74 402.05C159.74 402.05 176.46 400.24 180.6 397.15L188.74 397.05C188.74 397.05 195.74 392.05 190.74 389.05C185.74 386.05 182.74 385.05 182.74 385.05C182.74 385.05 184.44 383.98 185.49 382.15Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Foot', true);
          }}
          onLayout={event => {
            setVulnerableAreas('Foot_left', {
              color: 'orange',
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
        <Path
          d="M314.73 305.05C314.73 305.05 308.73 307.05 310.73 316.05C310.73 316.05 307.57 314.08 304.73 313.36V329.41C306.33 329.2 308.03 328.51 309.73 327.06C309.73 327.06 310.73 343.06 313.73 348.06C316.73 353.06 318.73 358.06 323.73 355.06C323.73 355.06 325.73 351.06 325.73 345.06C325.73 339.06 323.73 329.39 323.73 329.39C323.73 329.39 321.73 302.06 314.73 305.06V305.05Z"
          stroke-width="0.59"
          disabled={disabled}
          stroke-miterlimit="10"
          onPress={() => {
            right_press('Foot', true);
          }}
          onLayout={event => {
            setVulnerableAreas('Foot_right', {
              color: 'orange',
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(
                event.nativeEvent.layout.y +
                  event.nativeEvent.layout.height / 2,
              ),
            });
          }}
        />
      </Svg>
    </>
  );
};

export {Mannequin_vulnerable};
