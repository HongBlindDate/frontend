import React from 'react';
import { Image } from 'react-native';

const CustomBackArrow = () => {
  return (
    <Image
      source={require('../assets/backArrow.png')} // 이미지 경로를 설정합니다.
      style={{ width: 8, height: 16, margin:19 }} // 이미지의 크기를 조정합니다.
    />
  );
};

export default CustomBackArrow;