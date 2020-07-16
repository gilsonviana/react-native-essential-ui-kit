import React from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';

import * as defaultStyles from '@components/Buttons/styles'
import { IRounded } from '@components/Buttons/types'

const Rounded: React.FunctionComponent<IRounded> = ({
	onPress,
	text,
	color,
	radius,
	large,
	small,
	shadow,
	shadowSm,
	shadowLg,
	style,
	textStyle
}) => {
	return (
		<TouchableOpacity style={[
			(style) ?
				style :
				{
					...defaultStyles.centered,
					"width": 375,
					"height": 58,
					"borderRadius": radius || 30,
					"backgroundColor": color
				},
			(shadow) && defaultStyles.shadow,
			(shadowSm) && defaultStyles.shadowSm,
			(shadowLg) && defaultStyles.shadowLg,
			(small) && styles.small,
			(large) && styles.large
		]} >
			<Text style={(textStyle) ? textStyle : null}>{text}</Text>
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


Rounded.defaultProps = {
	color: '#ddd'
}

export default Rounded