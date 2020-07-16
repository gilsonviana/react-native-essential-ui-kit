import React from 'react';
import {
	TouchableOpacity,
	Text,
	Dimensions,
	StyleSheet
} from 'react-native';

import * as defaultStyles from '@components/Buttons/styles'
import { IFullWidth } from '@components/Buttons/types'

const FullWidth: React.FunctionComponent<IFullWidth> = ({
	onPress,
	text,
	color,
	large,
	small,
	shadow,
	shadowSm,
	shadowLg,
	style,
	textStyle
}) => {
	const { width } = Dimensions.get('screen')

	return (
		<TouchableOpacity
			style={[
				(style) ?
					style :
					{
						...defaultStyles.centered,
						height: 58,
						backgroundColor: color,
						width
					},
				(shadow) && defaultStyles.shadow,
				(shadowSm) && defaultStyles.shadowSm,
				(shadowLg) && defaultStyles.shadowLg,
				(small) && styles.small,
				(large) && styles.large
			]}
			onPress={onPress}
		>
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

FullWidth.defaultProps = {
	color: '#ddd'
}

export default FullWidth