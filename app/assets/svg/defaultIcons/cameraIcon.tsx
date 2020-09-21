import React from "react";
import Svg, { G, Path } from 'react-native-svg';
  
interface CameraIconProps {

};

const CameraIcon: CameraIconProps = ({  }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 488.455 488.455"
    >
      <G fill="#9e9ba6">
        <Path
          xmlns="http://www.w3.org/2000/svg"
          d="M287.396 216.317c23.845 23.845 23.845 62.505 0 86.35s-62.505 23.845-86.35 0-23.845-62.505 0-86.35 62.505-23.845 86.35 0"
          data-original="#000000"
        ></Path>
        <Path
          xmlns="http://www.w3.org/2000/svg"
          d="M427.397 91.581H385.21l-30.544-61.059H133.76l-30.515 61.089-42.127.075C27.533 91.746.193 119.115.164 152.715L0 396.86c0 33.675 27.384 61.074 61.059 61.074h366.338c33.675 0 61.059-27.384 61.059-61.059V152.639c-.001-33.674-27.385-61.058-61.059-61.058zM244.22 381.61c-67.335 0-122.118-54.783-122.118-122.118s54.783-122.118 122.118-122.118 122.118 54.783 122.118 122.118S311.555 381.61 244.22 381.61z"
          data-original="#000000"
        ></Path>
      </G>
    </Svg>
  );
}

export default CameraIcon;