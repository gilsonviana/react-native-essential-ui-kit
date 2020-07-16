import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import * as defaultStyles from '@components/Buttons/styles'
import { IOutline } from '@components/Buttons/types'

const Outline: React.FunctionComponent<IOutline> = ({
  text,
  radius,
  borderWidth,
  borderColor,
  large,
	small
}) => {
  return (
    <TouchableOpacity style={[
      {
        "alignItems": "center",
        justifyContent: 'center',
        "width": 375,
        "height": 58,
        "borderRadius": radius,
        "borderWidth": borderWidth,
        "borderColor": borderColor
      },
      (small) && styles.small,
      (large) && styles.large
    ]}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
	small: {
		height: 45
	},
	large: {
		height: 65
	}
})

Outline.defaultProps = {
  radius: 30,
  borderColor: '#DDD',
  borderWidth: 1
}

export default Outline