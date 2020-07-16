import React from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	ImageBackground
} from 'react-native';

import * as defaultStyles from '@components/Cards/styles'
import { ICardSimple } from '@components/Cards/types'

const CardSimple: React.FunctionComponent<ICardSimple> = ({
	body,
	title,
	paddingTop,
	radius,
	color,
	style,
	shadow,
	shadowSm,
	shadowLg,
	backgroundImageUri,
	titleStyle,
	bodyStyle,
	onPress,
}) => {
	const renderTitle = (): React.ReactNode => {
		if (title) {
			return (
				<Text 
					style={[
						styles.title,
						(titleStyle) && titleStyle
					]}>{title}</Text>
			)
		}
	}

	const renderBody = (): React.ReactNode => {
		return (
			<Text style={[
				styles.body,
				(bodyStyle) && bodyStyle
			]}>{body}</Text>
		)
	}

	if (onPress !== undefined && backgroundImageUri) {
		return (
			<TouchableOpacity
				onPress={onPress}
				style={[
					(style) && style,
					(shadow) && defaultStyles.shadow,
					(shadowSm) && defaultStyles.shadowSm,
					(shadowLg) && defaultStyles.shadowLg,
				]}
			>
				<ImageBackground
					source={{uri: backgroundImageUri}}
					style={[
						styles.container,
						{
							"borderRadius": radius,
							"backgroundColor": color,
							paddingTop: paddingTop,
							overflow: 'hidden'
						}
					]}
				>
					{renderTitle()}
					{renderBody()}
				</ImageBackground>
			</TouchableOpacity>
		)
	}

	if (onPress !== undefined) {
		return (
			<TouchableOpacity onPress={onPress} style={[
				styles.container,
				(style) && style,
				(shadow) && defaultStyles.shadow,
				(shadowSm) && defaultStyles.shadowSm,
				(shadowLg) && defaultStyles.shadowLg,
				{
					"borderRadius": radius,
					"backgroundColor": color,
					paddingTop: paddingTop,
				}
			]}>
				{renderTitle()}
				{renderBody()}
			</TouchableOpacity>
		)
	}

	if (backgroundImageUri) {
		return (
			<View
				style={[
					(style) && style,
					(shadow) && defaultStyles.shadow,
					(shadowSm) && defaultStyles.shadowSm,
					(shadowLg) && defaultStyles.shadowLg,
				]}
			>
				<ImageBackground
					source={{uri: backgroundImageUri}}
					style={[
						styles.container,
						{
							"borderRadius": radius,
							"backgroundColor": color,
							paddingTop: paddingTop,
							overflow: 'hidden'
						}
					]}
				>
					{renderTitle()}
					{renderBody()}
				</ImageBackground>
			</View>
		)
	}

	return (
		<View style={[
			{
				"borderRadius": radius,
				"backgroundColor": color,
				paddingTop: paddingTop,
			},
			styles.container,
			(style) && style,
			(shadow) && defaultStyles.shadow,
			(shadowSm) && defaultStyles.shadowSm,
			(shadowLg) && defaultStyles.shadowLg
		]}>
			{renderTitle()}
			{renderBody()}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		"alignItems": "flex-start",
		justifyContent: 'flex-end',
		"padding": 20,
		"width": 375,
	},
	body: {
		"marginTop": 10,
		"fontSize": 16,
		"color": "rgba(112, 112, 112, 255)",
	},
	title: {
		fontWeight: 'bold',
		"fontSize": 17,
		"color": "rgba(112, 112, 112, 255)",
	}
})

CardSimple.defaultProps = {
	radius: 10,
	color: '#DDD',
	paddingTop: 85
}

export default CardSimple