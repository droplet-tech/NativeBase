import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
  position,
} from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
  customPosition,
} from '../../../utils/customProps';
import { usePropsConfig, useToken } from '../../../hooks';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import type { IIconProps, IconType } from './props';
import { SVGIcon } from './SVGIcon';
import { Path } from 'react-native-svg';

const Icon = (iconProps: IIconProps) => {
  const { name, type, size, color: colorProp, ...props } = iconProps;
  const newProps = usePropsConfig('Icon', { size, color: colorProp });
  const rawColor = useToken('colors', newProps.color);
  if (!name) {
    return <SVGIcon {...iconProps} />;
  }
  const flattenedIconStyle: TextStyle = StyleSheet.flatten([
    { fontSize: parseInt(newProps.size, 10) },
  ]);
  switch (type) {
    case 'AntDesign':
      return (
        <AntDesign
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
    case 'EvilIcons':
      return (
        <EvilIcons
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
    case 'Feather':
      return (
        <Feather
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
    case 'FontAwesome':
      return (
        <FontAwesome
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
    case 'FontAwesome5':
      return (
        <FontAwesome5
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
    case 'Foundation':
      return (
        <Foundation
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
    case 'Ionicons':
      return (
        <Ionicons
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
    case 'Octicons':
      return (
        <Octicons
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
    case 'Zocial':
      return (
        <Zocial
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
    default:
      return (
        <MaterialIcons
          name={name}
          {...props}
          style={flattenedIconStyle}
          color={rawColor}
        />
      );
  }
};

const styledIcon = styled(Icon)<IIconProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  customTypography
);

export default styledIcon;
export { Path };
export type { IIconProps, IconType };
export { createIcon } from './createIcon';
