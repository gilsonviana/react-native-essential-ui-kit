import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import * as defaultStyles from '@components/Buttons/styles'
import { ICircle } from "@components/Buttons/types";

const Circle: React.FunctionComponent<ICircle> = ({
	onPress,
	icon: Icon,
	color,
	large,
	small,
	shadow,
	shadowSm,
	shadowLg
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				{
					width: 75,
					height: 75,
					borderRadius: 37.5, 
					backgroundColor: color,
					...defaultStyles.centered
				},
				(shadow) && defaultStyles.shadow,
				(shadowSm) && defaultStyles.shadowSm,
				(shadowLg) && defaultStyles.shadowLg,
				(small) && styles.small,
				(large) && styles.large
			]}
		>
			<Icon />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	large: {
		width: 105,
		height: 105,
		borderRadius: 52.5
	},
	small: {
		width: 55,
		height: 55,
		borderRadius: 25.5
	}
})

Circle.defaultProps = {
	color: '#DDD'
}

export default Circle;
