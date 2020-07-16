import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import * as defaultStyles from "@components/Cards/styles";
import { ICardAvatarAction } from "@components/Cards/types";
import { render } from "react-dom";

const CardAvatarAction: React.FunctionComponent<ICardAvatarAction> = ({
	heading,
	title,
	body,
	avatar: Avatar,
	avatarName,
	avatarTitle,
	radius,
	color,
	shadow,
	shadowSm,
	shadowLg,
	style,
	headingStyle,
	titleStyle,
	bodyStyle,
	avatarNameStyle,
	avatarTitleStyle,
	avatarStyle
}) => {
	const renderHeading = (): React.ReactNode => {
		return (
			<Text
				style={[
					styles.heading,
					(headingStyle) && headingStyle
				]}
			>{heading}</Text>
		)
	}

	const renderTitle = (): React.ReactNode => {
		return (
			<Text
				style={[
					styles.title,
					(titleStyle) && titleStyle
				]}>{title}
			</Text>
		)
	}

	const renderBody = (): React.ReactNode => {
		return (
			<Text
				style={[
					styles.body,
					(bodyStyle) && bodyStyle
				]}>{body}
			</Text>
		)
	}

	const renderAvatarTitle = (): React.ReactNode => {
		return (
			<Text
				style={[
					styles.avatarTitle,
					(avatarTitleStyle) && avatarTitleStyle
				]}>{avatarTitle}
			</Text>

		)
	}
	const renderAvatarName = (): React.ReactNode => {
		return (
			<Text
				style={[
					styles.avatarName,
					(avatarNameStyle) && avatarNameStyle
				]}>{avatarName}
			</Text>
		)
	}

	const renderFooter = (): React.ReactNode => {
		if (Avatar !== undefined) {
			return (
				<View style={styles.footer}>
					<View style={[
						styles.avatarWrapper,
						(avatarStyle) && avatarStyle
					]}>
						<Avatar />
					</View>
					<View style={{ flex: 1, marginLeft: 15 }}>
						{renderAvatarTitle()}
						{renderAvatarName()}
					</View>
				</View>
			)
		}
	}

	return (
		<View
			style={[
				{
					borderRadius: radius,
					backgroundColor: color,
				},
				styles.container,
				style && style,
				shadow && defaultStyles.shadow,
				shadowSm && defaultStyles.shadowSm,
				shadowLg && defaultStyles.shadowLg,
			]}
		>
			{renderHeading()}
			{renderTitle()}
			{renderBody()}
			{renderFooter()}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "flex-start",
		padding: 20,
		width: 375,
	},
	heading: {
		textTransform: 'uppercase',
		fontWeight: "bold",
		fontSize: 13,
		color: "rgba(112, 112, 112, 255)",
	},
	title: {
		fontWeight: "bold",
		fontSize: 16,
		color: "rgba(112, 112, 112, 255)",
		marginTop: 15,
	},
	body: {
		fontSize: 14,
		color: "rgba(112, 112, 112, 255)",
		marginTop: 5,
	},
	avatarTitle: {
		fontWeight: "bold",
		fontSize: 13,
		color: "rgba(112, 112, 112, 255)",
	},
	avatarName: {
		fontSize: 13,
		color: "rgba(112, 112, 112, 255)",
	},
	footer: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginTop: 15,
	},
	avatarWrapper: {
		alignItems: "center",
		justifyContent: 'center',
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "rgba(255, 255, 255, 255)",
		padding: 5,
		overflow: 'hidden'
	}
});

CardAvatarAction.defaultProps = {
	radius: 10,
	color: "#DDD",
};

export default CardAvatarAction;
