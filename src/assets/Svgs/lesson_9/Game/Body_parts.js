import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {Sizes} from '../../../RootStyles';
import {Dimensions} from 'react-native';

const Body_parts = ({
  setVulnerableAreas,
  right_press,
  eyes,
  left_elbow,
  right_elbow,
  left_hand,
  right_hand,
  ribs,
  throat,
  groin,
  left_foot,
  right_foot,
  left_knee,
  right_knee,
}) => {
  return (
    <Svg
      width={'100%'}
      height={'100%'}
      viewBox="0 0 375 812"
      fill="#0B2B3E"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        opacity={0.85}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h375v812H0V0zm320 493c0 15.464-12.536 28.2-28.2 28.2s-28.2-12.536-28.2-28.2 12.536-28.2 28.2-28.2 28.2 12.536 28.2 28.2zm-181 76c15.464 0 28.2-12.536 28.2-28.2s-12.536-28.2-28.2-28.2-28.2 12.536-28.2 28.2 12.536 28.2 28.2 28.2zm83-300c0 15.464-12.536 28.2-28.2 28.2s-28.2-12.536-28.2-28.2 12.536-28.2 28.2-28.2 28.2 12.536 28.2 28.2zm108-49c15.464 0 28.2-12.536 28.2-28.2s-12.536-28.2-28.2-28.2-28.2 12.536-28.2 28.2 12.536 28.2 28.2 28.2zM72 290c0 15.464-12.536 28.2-28.2 28.2s-28.2-12.536-28.2-28.2 12.536-28.2 28.2-28.2 28.2 12.536 28.2 28.2zm60-21c15.464 0 28.2-12.536 28.2-28.2s-12.536-28.2-28.2-28.2-28.2 12.536-28.2 28.2 12.536 28.2 28.2 28.2zm143-27c0 15.464-12.536 28.2-28.2 28.2s-28.2-12.536-28.2-28.2 12.536-28.2 28.2-28.2 28.2 12.536 28.2 28.2zm-88 125c15.464 0 28.2-12.536 28.2-28.2s-12.536-28.2-28.2-28.2-28.2 12.536-28.2 28.2 12.536 28.2 28.2 28.2zm25.229-183.5C219.916 178.508 225 169.848 225 160c0-15.464-12.536-28.2-28.2-28.2s-28.2 12.536-28.2 28.2c0 9.848 5.084 18.508 12.771 23.5C174.084 188.492 169 197.152 169 207c0 15.464 12.536 28.2 28.2 28.2s28.2-12.536 28.2-28.2c0-9.848-5.084-18.508-12.771-23.5zM238 434c0 15.464-12.536 28.2-28.2 28.2s-28.2-12.536-28.2-28.2 12.536-28.2 28.2-28.2 28.2 12.536 28.2 28.2zm-93 22c15.464 0 28.2-12.536 28.2-28.2s-12.536-28.2-28.2-28.2-28.2 12.536-28.2 28.2 12.536 28.2 28.2 28.2z"
        fill="#0B2B3E"
      />
      <Circle
        onLayout={event => {
          const {x, y, width, height} = event.nativeEvent.layout;
          console.log(width, height);
          setVulnerableAreas('eyes', {
            color: 'Red',
            next: 'throat',
            x: Math.floor(x - width / 2.5),
            y: Math.floor(y - height / 3),
          });
        }}
        onPress={() => {
          right_press('eyes');
        }}
        disabled={eyes !== 'transparent'}
        opacity={0.85}
        strokeWidth={0}
        cx={197}
        cy={160}
        r={28.5}
        stroke={'#0B2B3E'}
        fill={eyes}
      />
      <Circle
        onLayout={event => {
          const {x, y, width, height} = event.nativeEvent.layout;
          setVulnerableAreas('throat', {
            color: 'Red',
            next: 'left_elbow',
            x: Math.floor(x - width / 2.5),
            y: Math.floor(y - height / 3),
          });
        }}
        onPress={() => {
          right_press('throat');
        }}
        disabled={throat !== 'transparent'}
        opacity={0.85}
        strokeWidth={0}
        cx={197}
        cy={207}
        r={28.5}
        stroke={'#0B2B3E'}
        fill={throat}
      />
      <Circle
        onLayout={event => {
          const {x, y, width, height} = event.nativeEvent.layout;
          setVulnerableAreas('left_elbow', {
            color: 'yellow',
            next: 'right_elbow',
            x: Math.floor(x - width / 2.5),
            y: Math.floor(y - height / 3),
          });
        }}
        onPress={() => {
          right_press('left_elbow');
        }}
        disabled={left_elbow !== 'transparent'}
        opacity={0.85}
        strokeWidth={0}
        cx={247}
        cy={242}
        r={28.5}
        stroke={'#0B2B3E'}
        fill={left_elbow}
      />
      <Circle
        onLayout={event => {
          const {x, y, width, height} = event.nativeEvent.layout;
          setVulnerableAreas('right_elbow', {
            color: 'yellow',
            next: 'left_hand',
            x: Math.floor(x - width / 2.5),
            y: Math.floor(y - height / 3),
          });
        }}
        onPress={() => {
          right_press('right_elbow');
        }}
        disabled={right_elbow !== 'transparent'}
        opacity={0.85}
        strokeWidth={0}
        cx={132}
        cy={241}
        r={28.5}
        stroke={'#0B2B3E'}
        fill={right_elbow}
      />

      <Circle
        onLayout={event => {
          const {x, y, width, height} = event.nativeEvent.layout;
          setVulnerableAreas('left_hand', {
            color: 'yellow',
            next: 'right_hand',

            x: Math.floor(x - width / 2.5),
            y: Math.floor(y - height / 3),
          });
        }}
        onPress={() => {
          right_press('left_hand');
        }}
        disabled={left_hand !== 'transparent'}
        opacity={0.85}
        strokeWidth={0}
        cx={330}
        cy={192}
        r={28.5}
        stroke={'#0B2B3E'}
        fill={left_hand}
      />
      <Circle
        onLayout={event => {
          const {x, y, width, height} = event.nativeEvent.layout;
          setVulnerableAreas('right_hand', {
            color: 'yellow',
            next: 'ribs',

            x: Math.floor(x - width / 2.5),
            y: Math.floor(y - height / 3),
          });
        }}
        onPress={() => {
          right_press('right_hand');
        }}
        disabled={right_hand !== 'transparent'}
        opacity={0.85}
        strokeWidth={0}
        cx={44}
        cy={290}
        r={28.5}
        stroke={'#0B2B3E'}
        fill={right_hand}
      />

      <Circle
        onLayout={event => {
          const {x, y, width, height} = event.nativeEvent.layout;
          setVulnerableAreas('ribs', {
            color: 'orange',
            next: 'groin',
            x: Math.floor(x - width / 2.5),
            y: Math.floor(y - height / 3),
          });
        }}
        onPress={() => {
          right_press('ribs');
        }}
        disabled={ribs !== 'transparent'}
        opacity={0.85}
        strokeWidth={0}
        cx={194}
        cy={269}
        r={28.5}
        stroke={'#0B2B3E'}
        fill={ribs}
      />
      <Circle
        onLayout={event => {
          const {x, y, width, height} = event.nativeEvent.layout;
          setVulnerableAreas('groin', {
            color: 'Red',
            next: 'right_knee',
            x: Math.floor(x - width / 2.5),
            y: Math.floor(y - height / 3),
          });
        }}
        onPress={() => {
          right_press('groin');
        }}
        disabled={groin !== 'transparent'}
        opacity={0.85}
        strokeWidth={0}
        cx={187}
        cy={339}
        r={28.5}
        stroke={'#0B2B3E'}
        fill={groin}
      />

      <Circle
        onLayout={event => {
          const {x, y, width, height} = event.nativeEvent.layout;
          setVulnerableAreas('right_knee', {
            color: 'Red',
            next: 'left_knee',
            x: Math.floor(x - width / 2.5),
            y: Math.floor(y - height / 3),
          });
        }}
        onPress={() => {
          right_press('right_knee');
        }}
        disabled={right_knee !== 'transparent'}
        opacity={0.85}
        strokeWidth={0}
        cx={145}
        cy={428.2}
        r={28.5}
        stroke={'#0B2B3E'}
        fill={right_knee}
      />
      <Circle
        onLayout={event => {
          const {x, y, width, height} = event.nativeEvent.layout;
          setVulnerableAreas('left_knee', {
            color: 'Red',
            next: 'left_foot',
            x: Math.floor(x - width / 2.5),
            y: Math.floor(y - height / 3),
          });
        }}
        onPress={() => {
          right_press('left_knee');
        }}
        disabled={left_knee !== 'transparent'}
        opacity={0.85}
        strokeWidth={0}
        cx={210}
        cy={434}
        r={28.5}
        stroke={'#0B2B3E'}
        fill={left_knee}
      />
      <Circle
        onLayout={event => {
          const {x, y, width, height} = event.nativeEvent.layout;
          setVulnerableAreas('left_foot', {
            color: 'orange',
            next: 'right_foot',
            x: Math.floor(x - width / 2.5),
            y: Math.floor(y - height / 3),
          });
        }}
        onPress={() => {
          right_press('left_foot');
        }}
        disabled={left_foot !== 'transparent'}
        opacity={0.85}
        strokeWidth={0}
        cx={292}
        cy={493}
        r={28.5}
        stroke={'#0B2B3E'}
        fill={left_foot}
      />
      <Circle
        onLayout={event => {
          const {x, y, width, height} = event.nativeEvent.layout;
          setVulnerableAreas('right_foot', {
            color: 'orange',
            x: Math.floor(x - width / 2.5),
            y: Math.floor(y - height / 3),
          });
        }}
        onPress={() => {
          right_press('right_foot');
        }}
        disabled={right_foot !== 'transparent'}
        opacity={0.85}
        strokeWidth={0}
        cx={139}
        cy={541}
        r={28.5}
        stroke={'#0B2B3E'}
        fill={right_foot}
      />
    </Svg>
  );
};

export {Body_parts};
