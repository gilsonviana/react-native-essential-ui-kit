import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import * as defaultStyles from '@components/Cards/styles'
import { ICardAction } from '@components/Cards/types'

const CardAction: React.FunctionComponent<ICardAction> = ({
  title,
  body,
  action,
  onPress,
  titleStyle,
  bodyStyle,
  actionStyle,
  style,
  color,
  shadow,
  shadowSm,
  shadowLg,
  radius
}) => {
  const renderTitle = (): React.ReactNode => {
    if (title) {
      return (
        <Text style={[
          styles.title,
          (titleStyle) && titleStyle
        ]}>{title}</Text>
      )
    }
  }
  return (
    <View style={[
      {
        "borderRadius": radius,
        "backgroundColor": color
      },
      styles.container,
      (style) && style,
      (shadow) && defaultStyles.shadow,
      (shadowSm) && defaultStyles.shadowSm,
      (shadowLg) && defaultStyles.shadowLg,
    ]}>
      {renderTitle()}
      <Text style={[
        styles.body,
        (bodyStyle) && bodyStyle
      ]}>{body}</Text>
      <TouchableOpacity
        onPress={onPress}
        style={
          {
            "alignItems": "flex-start"
          }
        } >
        <Text style={[
          styles.action,
          (actionStyle) && actionStyle
        ]}>{action}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    "alignItems": "flex-start",
    padding: 20,
    "width": 375,
  },
  title: {
    fontWeight: 'bold',
    "fontSize": 17,
    "color": "rgba(112, 112, 112, 255)",
    marginBottom: 15
  },
  body: {
    "fontSize": 16,
    "color": "rgba(112, 112, 112, 255)",
  },
  action: {
    "fontSize": 15,
    "color": "rgba(112, 112, 112, 255)",
    fontWeight: 'bold',
    marginTop: 15
  }
})

CardAction.defaultProps = {
  color: '#DDD',
  radius: 10
}

export default CardAction