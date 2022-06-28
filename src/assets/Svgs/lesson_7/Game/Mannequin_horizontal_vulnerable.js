import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Mannequin_horizontal_vulnerable = ({
  width,
  height,
  wrong_press,
  select_area,
  right_press,
  disabled,
  setVulnerableAreas,
  eyes,
  nose,
  throat,
  hand,
  ribs,
  solar_plexus,
  groin,
  thigh,
  knee,
  foot,
}) => {
  return (
    <Svg
      style={{zIndex: 999}}
      width={width || 355}
      height={height || 420}
      viewBox="0 0 355 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M219.121 177.943C219.564 181.588 219.768 184.153 219.768 184.153C219.768 187.238 217.19 188.01 217.19 188.01C225.782 191.867 219.768 199.581 219.768 199.581C221.486 198.81 223.23 201.139 223.23 201.139C226.693 206.555 236.951 253.581 236.951 253.581C237.81 255.895 235.233 257.438 235.233 257.438C258.43 255.895 272.176 266.695 272.176 266.695L296.233 276.693V278.267C297.951 275.953 304.824 279.81 304.824 279.81C303.106 272.867 308.261 271.324 308.261 271.324C314.275 269.01 315.993 290.093 315.993 290.093C315.993 290.093 317.712 297.553 317.712 302.181C317.712 306.81 315.993 309.895 315.993 309.895C311.697 312.21 309.979 308.353 307.402 304.495C304.824 300.638 303.965 288.295 303.965 288.295C297.951 292.924 291.937 287.524 291.937 287.524L288.5 286.753L267.021 280.581C238.669 276.724 230.937 266.695 230.937 266.695C222.345 265.153 224.923 259.753 224.923 259.753C223.205 258.981 222.345 255.895 222.345 255.895C212.895 238.924 205.162 206.524 205.162 206.524V202.667C199.148 197.267 203.444 191.095 203.444 191.095L198.289 191.867C201.726 197.267 198.289 202.667 198.289 202.667C200.007 202.667 199.148 205.753 199.148 205.753C191.416 235.838 188.039 238.824 188.039 238.824L181.106 262.067C181.106 263.61 179.388 264.381 179.388 264.381L181.106 265.924C187.979 272.867 190.557 293.695 190.557 293.695C189.697 298.324 195.712 323.01 195.712 323.01L194.852 323.781C201.726 329.181 194.852 333.038 194.852 333.038C194.852 333.038 197.43 333.81 201.726 336.124C206.021 338.438 200.007 342.295 200.007 342.295L193.014 342.373C189.457 344.756 175.092 346.153 175.092 346.153C163.064 346.924 164.782 343.838 164.782 343.838C169.078 336.124 187.12 335.353 187.12 335.353C178.528 331.495 184.543 326.867 184.543 326.867C184.543 326.867 183.683 317.61 175.092 301.41C166.5 285.21 169.078 266.695 169.078 266.695C165.641 262.067 169.078 259.753 169.078 259.753L168.219 257.438L170.796 243.553C170.796 235.067 177.669 211.153 177.669 211.153C180.247 201.124 182.824 200.353 182.824 200.353C181.106 195.724 184.543 191.867 184.543 191.867L182.824 190.324C182.027 186.457 181.644 182.829 181.549 179.486M219.121 177.943C218.278 171.008 216.569 160.16 213.754 155.61C213.754 155.61 212.036 153.295 211.176 153.295C210.317 153.295 216.331 147.124 210.317 141.724V115.048C210.317 115.048 214.613 117.038 217.19 116.267C217.19 116.267 227.5 131.695 236.092 134.781C236.092 134.781 243.824 138.638 245.543 142.495C245.543 142.495 249.838 147.895 255.852 143.267C255.852 143.267 259.289 140.953 258.43 138.638L261.007 139.41C261.007 139.41 279.05 127.067 288.5 110.867L289.359 109.324C289.359 109.324 295.374 107.781 293.655 103.153C293.655 103.153 309.12 93.124 309.12 83.0954C309.12 83.0954 309.361 76.1526 295.494 83.0954C295.494 83.0954 285.923 89.2669 285.064 97.7526C285.064 97.7526 279.909 99.2954 279.909 103.153C279.909 103.153 259.289 114.724 252.416 128.61C252.416 128.61 233.514 108.553 226.641 107.01C226.641 107.01 224.064 92.3526 208.599 103.153C208.599 103.153 204.303 97.7526 200.007 98.524C200.007 98.524 202.585 94.528 200.007 93.0546C200.007 93.0546 207.74 65.3526 194.852 59.1811C181.965 53.0097 176.81 63.0383 176.81 63.0383C176.81 63.0383 171.655 76.438 176.81 84.0057C176.81 84.0057 181.965 95.4383 182.824 95.4383C183.683 95.4383 180.247 97.7526 183.683 100.838C183.683 100.838 175.092 104.695 175.951 110.867C175.951 110.867 164.782 104.695 159.627 115.495C159.627 115.495 143.303 119.353 136.43 125.524C136.43 125.524 128.697 130.924 126.979 131.695C126.979 131.695 123.543 130.153 120.965 134.781C120.965 134.781 100.345 145.581 92.613 157.924C92.613 157.924 89.1764 157.924 87.458 162.553C87.458 162.553 71.9933 161.01 68.5566 177.21C68.5566 177.21 65.12 185.695 84.0214 178.753C84.0214 178.753 90.8947 174.124 92.613 169.495C92.613 169.495 97.7679 168.724 98.6271 166.41C98.6271 166.41 122.683 157.924 129.557 142.495C129.557 142.495 161.345 134.781 165.641 127.067C165.641 127.067 177.669 124.753 176.81 120.124L183.683 145.581C183.683 145.581 181.106 153.295 186.261 155.61C186.261 155.61 181.133 164.818 181.549 179.486M219.121 177.943L181.549 179.486"
        stroke-width="0.9"
        stroke-miterlimit="10"
        disabled={disabled}
        onPress={({nativeEvent}) =>
          wrong_press({
            x: Math.floor(nativeEvent.pageX),
            y: Math.floor(nativeEvent.pageY),
          })
        }
      />
      {eyes && (
        <Path
          d="M201.382 73.9157C201.141 69.5648 200.171 65.3451 197.859 62.3442H176.381C176.088 62.7685 175.951 63.0385 175.951 63.0385C175.951 63.0385 173.966 68.1917 173.691 73.9157H201.382Z"
          stroke-width="0.59"
          stroke-miterlimit="10"
          disabled={disabled}
          onPress={() => {
            right_press('head');
          }}
          onLayout={event => {
            setVulnerableAreas('eyes', {
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
      )}
      {nose && (
        <Path
          d="M201.425 77.7729H173.812C174.07 80.0101 174.714 82.1778 175.96 84.0138C175.96 84.0138 177.137 86.6212 178.46 89.3444H200.025C200.617 86.4592 201.305 82.2164 201.434 77.7729H201.425Z"
          stroke-width="0.59"
          stroke-miterlimit="10"
          disabled={disabled}
          onPress={() => {
            right_press('nose');
          }}
          onLayout={event => {
            setVulnerableAreas('nose', {
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
      )}
      {throat && (
        <Path
          d="M177.36 104.773H215.481V99.4343C213.35 99.8895 210.807 101.016 207.748 103.153C207.748 103.153 203.452 97.7526 199.157 98.524C199.157 98.524 201.571 94.7672 199.354 93.2012H180.418C181.14 94.5203 181.724 95.4383 181.974 95.4383C182.833 95.4383 179.396 97.7526 182.833 100.838C182.833 100.838 179.662 102.265 177.36 104.773Z"
          stroke-width="0.59"
          stroke-miterlimit="10"
          disabled={disabled}
          onPress={() => {
            right_press('head');
          }}
          onLayout={event => {
            setVulnerableAreas('throat', {
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
      )}

      {hand && (
        <>
          <Path
            d="M150.176 135.854C156.921 133.254 163.064 130.168 164.791 127.075C164.791 127.075 165.727 126.898 167.059 126.535L161.612 111.562C160.563 112.51 159.593 113.799 158.776 115.504C158.776 115.504 151.422 117.247 144.506 120.256L150.185 135.862L150.176 135.854Z"
            stroke-width="0.59"
            stroke-miterlimit="10"
            disabled={disabled}
            onPress={() => {
              right_press('hand', true);
            }}
            onLayout={event => {
              setVulnerableAreas('hand_left', {
                x: Math.floor(
                  event.nativeEvent.layout.x +
                    event.nativeEvent.layout.width / 2,
                ),
                y: Math.floor(event.nativeEvent.layout.y),
              });
            }}
          />
          <Path
            d="M229.124 108.538L216.95 117.154C218.436 119.268 222.474 124.776 227.114 129.181L241.728 118.836C237.518 114.886 232.75 110.744 229.115 108.538H229.124Z"
            stroke-width="0.59"
            stroke-miterlimit="10"
            disabled={disabled}
            onPress={() => {
              right_press('hand', true);
            }}
            onLayout={event => {
              setVulnerableAreas('hand_right', {
                x: Math.floor(
                  event.nativeEvent.layout.x +
                    event.nativeEvent.layout.width / 2,
                ),
                y: Math.floor(event.nativeEvent.layout.y),
              });
            }}
          />
        </>
      )}

      {ribs && (
        <Path
          d="M181.072 139.086L209.458 135.422V121.065L177.326 125.216L181.072 139.086Z"
          stroke-width="0.59"
          stroke-miterlimit="10"
          disabled={disabled}
          onPress={() => {
            right_press('ribs');
          }}
          onLayout={event => {
            setVulnerableAreas('ribs', {
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
      )}

      {solar_plexus && (
        <Path
          d="M209.458 141.724V139.688L182.188 143.213L182.824 145.581C182.824 145.581 181.536 149.438 182.609 152.509L212.027 148.705C212.431 146.623 212.113 144.092 209.467 141.716L209.458 141.724Z"
          stroke-width="0.59"
          stroke-miterlimit="10"
          disabled={disabled}
          onPress={() => {
            right_press('solar_plexus');
          }}
          onLayout={event => {
            setVulnerableAreas('solar_plexus', {
              x: Math.floor(
                event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2,
              ),
              y: Math.floor(event.nativeEvent.layout.y),
            });
          }}
        />
      )}
      {thigh && (
        <>
          <Path
            d="M226.083 212.001H205.695C206.838 216.329 208.633 222.786 210.884 229.744H230.61C229.124 223.565 227.526 217.201 226.074 212.001H226.083Z"
            stroke-width="0.59"
            stroke-miterlimit="10"
            disabled={disabled}
            onPress={() => {
              right_press('thigh', true);
            }}
            onLayout={event => {
              setVulnerableAreas('thigh_left', {
                x: Math.floor(
                  event.nativeEvent.layout.x +
                    event.nativeEvent.layout.width / 2,
                ),
                y: Math.floor(event.nativeEvent.layout.y),
              });
            }}
          />
          <Path
            d="M176.578 212.001C175.874 214.501 173.743 222.223 172.085 229.744H191.278C192.679 225.771 194.457 220.086 196.648 212.001H176.578Z"
            stroke-width="0.59"
            stroke-miterlimit="10"
            disabled={disabled}
            onPress={() => {
              right_press('thigh', true);
            }}
            onLayout={event => {
              setVulnerableAreas('thigh_right', {
                x: Math.floor(
                  event.nativeEvent.layout.x +
                    event.nativeEvent.layout.width / 2,
                ),
                y: Math.floor(event.nativeEvent.layout.y),
              });
            }}
          />
        </>
      )}
      {knee && (
        <>
          <Path
            d="M180.247 265.924L178.528 264.382C178.528 264.382 180.247 263.61 180.247 262.067L184.603 247.487H169.215L167.368 257.439L168.227 259.753C168.227 259.753 164.79 262.067 168.227 266.696C168.227 266.696 167.609 271.139 167.987 277.573H186.201C184.749 272.96 182.79 268.493 180.255 265.924H180.247Z"
            stroke-width="0.59"
            stroke-miterlimit="10"
            disabled={disabled}
            onPress={() => {
              right_press('knee', true);
            }}
            onLayout={event => {
              setVulnerableAreas('knee_left', {
                x: Math.floor(
                  event.nativeEvent.layout.x +
                    event.nativeEvent.layout.width / 2,
                ),
                y: Math.floor(event.nativeEvent.layout.y),
              });
            }}
          />
          <Path
            d="M234.374 257.438C234.374 257.438 236.951 255.896 236.092 253.581C236.092 253.581 235.13 249.153 233.686 242.858H215.524C217.388 247.618 219.398 252.139 221.486 255.896C221.486 255.896 222.345 258.981 224.064 259.753C224.064 259.753 221.486 265.153 230.078 266.696C230.078 266.696 232.355 269.635 238.927 272.944H263.585V262.345C257.27 259.544 247.287 256.582 234.374 257.438V257.438Z"
            stroke-width="0.59"
            stroke-miterlimit="10"
            disabled={disabled}
            onPress={() => {
              right_press('knee', true);
            }}
            onLayout={event => {
              setVulnerableAreas('knee_right', {
                x: Math.floor(
                  event.nativeEvent.layout.x +
                    event.nativeEvent.layout.width / 2,
                ),
                y: Math.floor(event.nativeEvent.layout.y),
              });
            }}
          />
        </>
      )}
      {foot && (
        <>
          <Path
            d="M307.402 271.325C307.402 271.325 302.247 272.867 303.965 279.81C303.965 279.81 301.25 278.291 298.81 277.735V290.117C300.185 289.955 301.646 289.422 303.106 288.304C303.106 288.304 303.965 300.647 306.543 304.504C309.12 308.361 310.838 312.218 315.134 309.904C315.134 309.904 316.853 306.818 316.853 302.189C316.853 297.561 315.134 290.101 315.134 290.101C315.134 290.101 313.416 269.018 307.402 271.332V271.325Z"
            stroke-width="0.59"
            stroke-miterlimit="10"
            disabled={disabled}
            onPress={() => {
              right_press('foot', true);
            }}
            onLayout={event => {
              setVulnerableAreas('foot_left', {
                x: Math.floor(
                  event.nativeEvent.layout.x +
                    event.nativeEvent.layout.width / 2,
                ),
                y: Math.floor(event.nativeEvent.layout.y),
              });
            }}
          />
          <Path
            d="M196.364 330.801H181.664C181.793 332.221 182.91 333.848 186.269 335.353C186.269 335.353 168.227 336.124 163.931 343.838C163.931 343.838 162.213 346.924 174.241 346.153C174.241 346.153 188.606 344.756 192.163 342.373L199.157 342.296C199.157 342.296 205.171 338.438 200.875 336.124C196.579 333.81 194.002 333.038 194.002 333.038C194.002 333.038 195.462 332.213 196.364 330.801Z"
            stroke-width="0.59"
            stroke-miterlimit="10"
            disabled={disabled}
            onPress={() => {
              right_press('foot', true);
            }}
            onLayout={event => {
              setVulnerableAreas('foot_right', {
                x: Math.floor(
                  event.nativeEvent.layout.x +
                    event.nativeEvent.layout.width / 2,
                ),
                y: Math.floor(event.nativeEvent.layout.y),
              });
            }}
          />
        </>
      )}
    </Svg>
  );
};

export {Mannequin_horizontal_vulnerable};
