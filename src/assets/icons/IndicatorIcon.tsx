import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
const IndicatorIcon: React.FC<{
  fill?: string;
  size?: number;
  rotate?: number;
}> = ({fill = 'none', size = 60, rotate = 0}) => (
  <Svg width={size} height={size} fill={fill} rotation={rotate}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        fillRule="evenodd"
        d="M33 48a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm-18.777-9a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm34.734 1.5a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM55.5 27.957a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9ZM7.5 18a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm45.858-2.379a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM24 0a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm22.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={60}
        x2={-11.395}
        y1={60}
        y2={39.3}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF8216" />
        <Stop offset={1} stopColor="#FF9D48" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h60v60H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default IndicatorIcon;
